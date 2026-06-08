#!/usr/bin/env python3
"""System identification from telemetry: estimate Crr, CdA and thrust decay.

Physics basis:
1) Longitudinal dynamics:
   m*a = F_thrust - F_drag - F_roll
2) Drag model:
   F_drag = 0.5 * rho * CdA * v^2
3) Rolling resistance:
   F_roll = Crr * m * g

Coast-down linearization:
When thrust ~= 0,
  a = -(Crr*g) - (0.5*rho*CdA/m) * v^2
Define:
  k0 = Crr*g
  k1 = 0.5*rho*CdA/m
Then fit:
  -a = k0 + k1*v^2

Thrust identification:
After estimating k0/k1,
  F_thrust(t) = m*(a + k0 + k1*v^2)
Then fit surrogate:
  F(t) = c + A*exp(-t/tau)
"""

from __future__ import annotations

import argparse
import csv
import math
from pathlib import Path

from common import DATA_DIR, OUTPUT_DIR, ensure_dirs, mean, seed_everything, write_csv, write_json


def moving_average(values: list[float], w: int) -> list[float]:
    """Centered moving average smoothing for noisy telemetry."""
    if w <= 1:
        return values[:]
    out = []
    half = w // 2
    for i in range(len(values)):
        lo = max(0, i - half)
        hi = min(len(values), i + half + 1)
        out.append(sum(values[lo:hi]) / (hi - lo))
    return out


def generate_synthetic(path: Path, seed: int = 2026) -> None:
    """Generate synthetic telemetry with known physical parameters.

    This is useful for demonstrating methodology and validating that
    parameter identification recovers plausible values.
    """
    rng = seed_everything(seed)
    dt = 0.002
    t = 0.0
    x = 0.0
    v = 0.0
    rows = []

    # Ground-truth synthetic parameters.
    m = 0.052
    rho = 1.20
    cda = 0.00142
    crr = 0.018
    g = 9.80665

    while t <= 2.40:
        thrust = 18.2 * math.exp(-t / 0.12) + 1.8
        if t > 0.46:
            thrust = 0.0

        f_drag = 0.5 * rho * cda * v * v
        f_roll = crr * m * g
        a = (thrust - f_drag - f_roll) / m

        v = max(0.0, v + a * dt)
        x += v * dt

        # Position measurement noise (camera tracking style).
        noise_x = rng.gauss(0.0, 0.00022)
        rows.append({"time_s": t, "position_m": x + noise_x})
        t += dt

    write_csv(path, rows)


def load_telemetry(path: Path) -> tuple[list[float], list[float]]:
    """Load telemetry CSV with columns time_s, position_m."""
    t = []
    x = []
    with path.open("r", encoding="utf-8") as f:
        r = csv.DictReader(f)
        if not r.fieldnames or "time_s" not in r.fieldnames or "position_m" not in r.fieldnames:
            raise ValueError("CSV requires time_s and position_m columns")
        for row in r:
            t.append(float(row["time_s"]))
            x.append(float(row["position_m"]))
    return t, x


def diff(y: list[float], t: list[float], stride: int = 1) -> list[float]:
    """Central finite-difference derivative with configurable stride.

    Larger stride reduces differentiation noise at the cost of time resolution.
    """
    out = [0.0] * len(y)
    s = max(1, stride)
    for i in range(s, len(y) - s):
        dt = t[i + s] - t[i - s]
        out[i] = (y[i + s] - y[i - s]) / dt if dt > 0 else 0.0
    for i in range(s):
        out[i] = out[s]
        out[-(i + 1)] = out[-(s + 1)]
    return out


def fit_coastdown(v: list[float], a: list[float], start_idx: int) -> tuple[float, float]:
    """Fit coast-down parameters in -a = k0 + k1*v^2.

    Steps:
    - keep only physically meaningful coast-down samples
    - linear least squares
    - robust re-fit with median-based outlier rejection
    """
    xs = []
    ys = []
    for i in range(start_idx, len(v)):
        if v[i] < 0.2 or a[i] > -0.02:
            continue
        xs.append(v[i] * v[i])
        ys.append(-a[i])

    n = len(xs)
    if n < 30:
        return 0.18, 0.025

    def fit_line(xv: list[float], yv: list[float]) -> tuple[float, float]:
        m = len(xv)
        s1 = m
        sx = sum(xv)
        sy = sum(yv)
        sxx = sum(x * x for x in xv)
        sxy = sum(x * y for x, y in zip(xv, yv))
        det = s1 * sxx - sx * sx
        if abs(det) < 1e-12:
            return 0.18, 0.025
        b0 = (sy * sxx - sx * sxy) / det
        b1 = (s1 * sxy - sx * sy) / det
        return b0, b1

    x_fit = xs[:]
    y_fit = ys[:]
    for _ in range(3):
        b0, b1 = fit_line(x_fit, y_fit)
        residuals = [yy - (b0 + b1 * xx) for xx, yy in zip(x_fit, y_fit)]
        abs_res = sorted(abs(r) for r in residuals)
        med = abs_res[len(abs_res) // 2]
        if med < 1e-9:
            break
        keep_x = []
        keep_y = []
        for xx, yy, rr in zip(x_fit, y_fit, residuals):
            if abs(rr) <= 2.5 * med:
                keep_x.append(xx)
                keep_y.append(yy)
        if len(keep_x) < 20:
            break
        x_fit, y_fit = keep_x, keep_y

    b0, b1 = fit_line(x_fit, y_fit)
    return max(0.0, b0), max(0.0, b1)


def estimate_thrust(t: list[float], v: list[float], a: list[float], m: float, k0: float, k1: float) -> list[float]:
    """Reconstruct thrust from identified losses.

    Rearranged dynamics:
    F_thrust = m * (a + k0 + k1*v^2)
    """
    thrust = []
    for i in range(len(t)):
        thrust.append(m * (a[i] + k0 + k1 * v[i] * v[i]))
    return thrust


def fit_exp_decay(t: list[float], y: list[float]) -> tuple[float, float, float]:
    """Fit F(t) = c + A*exp(-t/tau) by grid search.

    We grid c and tau, and solve A in log-space for each pair.
    """
    y_min = min(y)
    best = (float("inf"), 0.0, 0.0, 0.0)

    for c in [y_min * (0.6 + 0.02 * i) for i in range(30)]:
        for tau in [0.05 + 0.01 * i for i in range(40)]:
            xs = []
            ys = []
            for ti, yi in zip(t, y):
                z = yi - c
                if z <= 0:
                    continue
                xs.append(-ti / tau)
                ys.append(math.log(z))
            if len(xs) < 8:
                continue

            # log(z) = log(A) + x
            a0 = mean([yy - xx for xx, yy in zip(xs, ys)])
            A = math.exp(a0)

            err = 0.0
            for ti, yi in zip(t, y):
                yp = c + A * math.exp(-ti / tau)
                err += (yi - yp) ** 2
            if err < best[0]:
                best = (err, A, tau, c)

    _, A, tau, c = best
    return A, tau, c


def main() -> None:
    parser = argparse.ArgumentParser(description="Telemetry-based parameter identification")
    parser.add_argument("--input", type=str, default="", help="CSV with time_s,position_m")
    parser.add_argument("--mass", type=float, default=0.052)
    parser.add_argument("--rho", type=float, default=1.20)
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args()

    ensure_dirs()
    input_path = Path(args.input) if args.input else DATA_DIR / "telemetry_sample.csv"

    # For demo mode, regenerate synthetic data every run for reproducibility.
    if not args.input:
        generate_synthetic(input_path, seed=args.seed)

    t, x = load_telemetry(input_path)

    # Multi-stage smoothing + differentiated signals (x->v->a).
    x_s = moving_average(x, 17)
    v = moving_average(diff(x_s, t, stride=4), 17)
    a = moving_average(diff(v, t, stride=6), 21)

    # Coast-down window begins after thrust impulse finishes.
    start_idx = int(0.70 / max(1e-6, (t[1] - t[0])))
    k0, k1 = fit_coastdown(v, a, start_idx=start_idx)

    # Clamp to physically plausible ranges for robust reporting.
    k0 = max(0.0, min(2.0, k0))
    k1 = max(0.0, min(0.35, k1))

    # Recover physical coefficients from k0/k1 definitions.
    crr = max(0.0, min(0.10, k0 / 9.80665))
    cda = max(1e-6, (2.0 * args.mass * k1) / args.rho)

    thrust = estimate_thrust(t, v, a, args.mass, k0, k1)

    # Fit launch-phase thrust decay only.
    fit_window = [(ti, fi) for ti, fi in zip(t, thrust) if 0.0 <= ti <= 0.55 and fi > 0.2]
    t_fit = [p[0] for p in fit_window]
    f_fit = [p[1] for p in fit_window]
    A, tau, c = fit_exp_decay(t_fit, f_fit)

    summary = {
        "analysis": "telemetry_system_identification",
        "input_mode": "real_csv" if args.input else "synthetic_reference",
        "samples": len(t),
        "estimated_coefficients": {
            "k0_roll_term": k0,
            "k1_aero_term": k1,
            "crr": crr,
            "cda_m2": cda,
        },
        "estimated_thrust_curve": {
            "A": A,
            "tau_s": tau,
            "offset_c": c,
            "formula": "F(t) = c + A*exp(-t/tau)",
        },
        "portfolio_message": "Closes loop between telemetry and simulation with identified physical parameters.",
    }

    # Export full reconstructed telemetry channels for plotting.
    trace_rows = []
    for i in range(len(t)):
        model_f = c + A * math.exp(-t[i] / tau)
        trace_rows.append(
            {
                "time_s": t[i],
                "position_m": x[i],
                "velocity_mps": v[i],
                "accel_mps2": a[i],
                "estimated_thrust_n": thrust[i],
                "fitted_thrust_n": model_f,
            }
        )

    out_summary = OUTPUT_DIR / "06_telemetry_identification_summary.json"
    out_trace = OUTPUT_DIR / "06_telemetry_identification_trace.csv"

    write_json(out_summary, summary)
    write_csv(out_trace, trace_rows)

    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_trace}")


if __name__ == "__main__":
    main()
