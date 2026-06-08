#!/usr/bin/env python3
"""Bearing reliability modeling using Weibull MLE + bootstrap uncertainty.

Reliability basis:
- Life variable T modeled with Weibull(k, lambda).
- Reliability function: R(t) = exp(-(t/lambda)^k)
- CDF: F(t) = 1 - R(t)
- PDF: f(t) = (k/lambda) * (t/lambda)^(k-1) * exp(-(t/lambda)^k)
- B-life for reliability level R*:
  t_B = lambda * (-ln(R*))^(1/k)

Statistical inference:
- MLE for (k, lambda)
- Bootstrap percentile CI for k, lambda, B10, B50
"""

from __future__ import annotations

import argparse
import csv
import math
from pathlib import Path

from common import DATA_DIR, OUTPUT_DIR, ensure_dirs, mean, percentile, seed_everything, write_csv, write_json


def weibull_sample(rng_seed: int, shape_k: float, scale_l: float) -> float:
    """Inverse-transform sampling for Weibull distribution.

    If U ~ Uniform(0,1), then:
    T = lambda * (-ln(1-U))^(1/k)
    """
    rng = seed_everything(rng_seed)
    u = max(1e-12, min(1.0 - 1e-12, rng.random()))
    return scale_l * ((-math.log(1.0 - u)) ** (1.0 / shape_k))


def load_or_generate(path: Path, n: int, seed: int) -> list[float]:
    """Load real spin-time data or generate synthetic reliability dataset."""
    if path.exists():
        vals = []
        with path.open("r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            if not reader.fieldnames or "spin_time_s" not in reader.fieldnames:
                raise ValueError("CSV must contain 'spin_time_s' column")
            for r in reader:
                vals.append(float(r["spin_time_s"]))
        return [v for v in vals if v > 0]

    vals = []
    for i in range(n):
        v = weibull_sample(seed + i * 31, shape_k=3.2, scale_l=128.0)

        # Add process effects: low-frequency drift + sparse contamination events.
        drift = 1.0 + 0.03 * math.sin(i / 18.0)
        if i % 37 == 0:
            drift *= 0.82
        vals.append(max(1.0, v * drift))

    out = DATA_DIR / "bearing_spin_samples.csv"
    write_csv(out, [{"spin_time_s": f"{v:.6f}"} for v in vals])
    return vals


def mle_weibull(times: list[float], k0: float = 2.0, max_iter: int = 80) -> tuple[float, float]:
    """Maximum-likelihood estimation of Weibull parameters.

    Solves for shape k using Newton iterations, then:
      lambda = ( (1/n) * sum(t_i^k) )^(1/k)

    The Newton target is based on the derivative of log-likelihood.
    """
    if any(t <= 0 for t in times):
        raise ValueError("All times must be positive")

    n = len(times)
    logs = [math.log(t) for t in times]
    mean_log = mean(logs)

    k = k0
    for _ in range(max_iter):
        tk = [t**k for t in times]
        s1 = sum(tk)
        s2 = sum(v * math.log(t) for v, t in zip(tk, times))

        # Score function in k (set to zero at MLE optimum).
        g = 1.0 / k + mean_log - s2 / s1

        # Numerical derivative dg/dk for robust Newton step.
        eps = 1e-5
        kp = k + eps
        tkk = [t**kp for t in times]
        s1p = sum(tkk)
        s2p = sum(v * math.log(t) for v, t in zip(tkk, times))
        gp = 1.0 / kp + mean_log - s2p / s1p
        dg = (gp - g) / eps

        step = g / dg
        k_new = max(0.2, k - step)
        if abs(k_new - k) < 1e-7:
            k = k_new
            break
        k = k_new

    lam = (sum(t**k for t in times) / n) ** (1.0 / k)
    return k, lam


def reliability(t: float, k: float, lam: float) -> float:
    """Reliability function R(t) for Weibull."""
    return math.exp(-((t / lam) ** k))


def b_life(k: float, lam: float, reliability_level: float) -> float:
    """Compute B-life at target reliability level.

    From R(t)=exp(-(t/lambda)^k), solve t at R=R*.
    """
    return lam * ((-math.log(reliability_level)) ** (1.0 / k))


def bootstrap_ci(times: list[float], n_boot: int, seed: int) -> dict[str, tuple[float, float]]:
    """Bootstrap percentile confidence intervals for key reliability metrics."""
    rng = seed_everything(seed)
    stats = {"shape_k": [], "scale_lambda": [], "b10": [], "b50": []}
    n = len(times)

    for _ in range(n_boot):
        sample = [times[rng.randrange(n)] for _ in range(n)]
        k, lam = mle_weibull(sample, k0=2.5)
        stats["shape_k"].append(k)
        stats["scale_lambda"].append(lam)
        stats["b10"].append(b_life(k, lam, reliability_level=0.90))
        stats["b50"].append(b_life(k, lam, reliability_level=0.50))

    out: dict[str, tuple[float, float]] = {}
    for key, vals in stats.items():
        out[key] = (percentile(vals, 2.5), percentile(vals, 97.5))
    return out


def main() -> None:
    parser = argparse.ArgumentParser(description="Bearing Weibull reliability analysis")
    parser.add_argument("--input", type=str, default="", help="CSV with spin_time_s column")
    parser.add_argument("--n", type=int, default=220, help="Synthetic sample size if no input")
    parser.add_argument("--boot", type=int, default=600, help="Bootstrap iterations")
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args()

    ensure_dirs()
    input_path = Path(args.input) if args.input else (DATA_DIR / "bearing_spin_samples.csv")
    times = load_or_generate(input_path, n=args.n, seed=args.seed)

    k, lam = mle_weibull(times, k0=2.8)
    ci = bootstrap_ci(times, n_boot=args.boot, seed=args.seed + 999)

    mission_time = 110.0
    mission_reliability = reliability(mission_time, k, lam)

    summary = {
        "analysis": "bearing_reliability_weibull",
        "samples": len(times),
        "shape_k": k,
        "scale_lambda": lam,
        "shape_k_ci95": ci["shape_k"],
        "scale_lambda_ci95": ci["scale_lambda"],
        "b10_life_s": b_life(k, lam, 0.90),
        "b10_ci95": ci["b10"],
        "b50_life_s": b_life(k, lam, 0.50),
        "b50_ci95": ci["b50"],
        "mission_time_s": mission_time,
        "mission_reliability": mission_reliability,
        "portfolio_message": "Quantifies reliability margins and validates bearing prep process statistically.",
    }

    # Curve export for portfolio plots (PDF/CDF/R(t)).
    curve = []
    max_t = max(times) * 1.15
    for i in range(120):
        t = max_t * i / 119.0
        curve.append(
            {
                "time_s": t,
                "pdf": (k / lam) * ((t / lam) ** (k - 1)) * math.exp(-((t / lam) ** k)) if t > 0 else 0.0,
                "cdf": 1.0 - reliability(t, k, lam),
                "reliability": reliability(t, k, lam),
            }
        )

    out_summary = OUTPUT_DIR / "05_bearing_weibull_summary.json"
    out_curve = OUTPUT_DIR / "05_bearing_weibull_curve.csv"

    write_json(out_summary, summary)
    write_csv(out_curve, curve)

    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_curve}")


if __name__ == "__main__":
    main()
