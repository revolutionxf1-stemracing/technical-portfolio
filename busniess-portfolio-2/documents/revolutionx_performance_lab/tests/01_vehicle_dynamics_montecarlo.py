#!/usr/bin/env python3
"""High-fidelity Monte Carlo launch simulation for STEM Racing cars.

Physics basis (longitudinal dynamics):
1) Newton 2nd law: a = F_net / m_eff
2) Aerodynamic drag: F_drag = 0.5 * rho * CdA * v^2
3) Rolling resistance: F_roll = Crr * m * g
4) Thrust decay surrogate: F_thrust(t) = F0 * exp(-t/tau) + F_residual
5) Rotational inertia of wheels mapped to equivalent translational mass:
   m_eff = m + sum(J_i / r_i^2)

Why this is portfolio-grade:
- Propagates uncertainty with Monte Carlo instead of single-point claims.
- Reports robust KPIs (mean, std, percentiles, success probability).
- Quantifies sensitivity with Spearman rank correlation.
"""

from __future__ import annotations

import argparse
import math
import multiprocessing as mp
from dataclasses import asdict, dataclass

from common import OUTPUT_DIR, ensure_dirs, mean, percentile, seed_everything, spearman, stdev, write_csv, write_json


@dataclass
class NominalSetup:
    # Track and environment
    track_length_m: float = 20.0
    rho_air: float = 1.20
    g: float = 9.80665

    # Numerical integration controls
    dt: float = 0.0007
    t_max: float = 3.0

    # Vehicle nominal parameters
    mass_kg: float = 0.052
    wheel_radius_m: float = 0.0135
    wheel_inertia_kgm2: float = 1.9e-7
    cda_m2: float = 0.00145
    crr: float = 0.018

    # Launch model parameters
    thrust_f0_n: float = 18.0
    thrust_tau_s: float = 0.11
    residual_thrust_n: float = 2.0
    launch_loss_ratio: float = 0.06

    # Yaw-to-drag coupling factor (surrogate)
    yaw_drag_gain: float = 0.012


def _sample(seed: int, nominal: NominalSetup) -> dict[str, float]:
    """Sample one uncertain realization around the nominal setup.

    Each run represents one plausible race state including manufacturing and
    launch variability (mass, CdA, Crr, thrust shape, alignment, roughness).
    """
    rng = seed_everything(seed)
    return {
        "seed": seed,
        "mass_kg": nominal.mass_kg * (1.0 + rng.gauss(0.0, 0.02)),
        "cda_m2": nominal.cda_m2 * (1.0 + rng.gauss(0.0, 0.06)),
        "crr": max(0.004, nominal.crr * (1.0 + rng.gauss(0.0, 0.20))),
        "wheel_radius_m": nominal.wheel_radius_m * (1.0 + rng.gauss(0.0, 0.008)),
        "wheel_inertia_kgm2": max(1e-8, nominal.wheel_inertia_kgm2 * (1.0 + rng.gauss(0.0, 0.10))),
        "thrust_f0_n": nominal.thrust_f0_n * (1.0 + rng.gauss(0.0, 0.08)),
        "thrust_tau_s": max(0.05, nominal.thrust_tau_s * (1.0 + rng.gauss(0.0, 0.10))),
        "launch_loss_ratio": min(0.2, max(0.0, nominal.launch_loss_ratio + rng.gauss(0.0, 0.015))),
        "yaw_deg": rng.gauss(0.0, 0.9),
        "surface_roughness_gain": max(0.7, 1.0 + rng.gauss(0.0, 0.08)),
    }


def _simulate_case(sample: dict[str, float], nominal: NominalSetup) -> dict[str, float]:
    """Simulate one race using explicit time stepping.

    State variables:
    - x: position [m]
    - v: speed [m/s]
    - t: time [s]
    """
    x = 0.0
    v = 0.0
    t = 0.0

    m = sample["mass_kg"]
    r = sample["wheel_radius_m"]
    j = sample["wheel_inertia_kgm2"]
    cda = sample["cda_m2"]
    crr = sample["crr"]

    # Simple yaw penalty: larger absolute yaw increases effective drag.
    yaw_factor = 1.0 + nominal.yaw_drag_gain * abs(sample["yaw_deg"])

    # Equivalent mass from wheel rotation:
    # KE_total = 0.5*m*v^2 + 4*0.5*J*omega^2, with omega = v/r
    # => KE_total = 0.5*(m + 4J/r^2)*v^2
    m_eff = m + 4.0 * j / max(1e-6, r * r)

    while t < nominal.t_max and x < nominal.track_length_m:
        # Thrust decay surrogate for CO2 launch behavior.
        f_thrust = sample["thrust_f0_n"] * math.exp(-t / sample["thrust_tau_s"]) + nominal.residual_thrust_n
        f_thrust *= 1.0 - sample["launch_loss_ratio"]

        # Aerodynamic and rolling losses.
        f_drag = 0.5 * nominal.rho_air * cda * v * v * yaw_factor
        f_roll = crr * sample["surface_roughness_gain"] * m * nominal.g

        # Net longitudinal force and acceleration.
        f_net = f_thrust - f_drag - f_roll
        a = f_net / max(1e-7, m_eff)

        # Time integration (explicit Euler, small dt).
        v = max(0.0, v + a * nominal.dt)
        x += v * nominal.dt
        t += nominal.dt

    success = 1.0 if x >= nominal.track_length_m else 0.0
    finish_time = t if success else nominal.t_max

    return {
        **sample,
        "success": success,
        "finish_time_s": finish_time,
        "terminal_speed_mps": v,
    }


def _worker(args: tuple[int, NominalSetup]) -> dict[str, float]:
    """Multiprocessing wrapper for one Monte Carlo run."""
    seed, nominal = args
    sample = _sample(seed, nominal)
    return _simulate_case(sample, nominal)


def main() -> None:
    parser = argparse.ArgumentParser(description="Monte Carlo performance simulation")
    parser.add_argument("--runs", type=int, default=12000, help="Number of Monte Carlo runs")
    parser.add_argument("--seed", type=int, default=2026, help="Master seed")
    parser.add_argument("--processes", type=int, default=max(1, mp.cpu_count() - 1), help="Parallel workers")
    args = parser.parse_args()

    ensure_dirs()
    nominal = NominalSetup()

    seed_everything(args.seed)
    seeds = [args.seed + i * 17 for i in range(args.runs)]

    # Parallel Monte Carlo execution for speed.
    with mp.Pool(processes=args.processes) as pool:
        results = pool.map(_worker, [(s, nominal) for s in seeds], chunksize=200)

    times = [r["finish_time_s"] for r in results]
    success_flags = [r["success"] for r in results]
    success_rate = mean(success_flags)

    summary = {
        "simulation": "vehicle_dynamics_montecarlo",
        "runs": args.runs,
        "seed": args.seed,
        "nominal_setup": asdict(nominal),
        "kpis": {
            "mean_finish_time_s": mean(times),
            "std_finish_time_s": stdev(times),
            "p05_time_s": percentile(times, 5),
            "p50_time_s": percentile(times, 50),
            "p95_time_s": percentile(times, 95),
            "success_rate": success_rate,
        },
        "engineering_takeaway": "Optimize the highest-sensitivity variables first to reduce both average time and variance.",
    }

    # Sensitivity ranking with Spearman rho:
    # rho_s close to +/-1 indicates strong monotonic impact on finish time.
    factors = [
        "mass_kg",
        "cda_m2",
        "crr",
        "wheel_radius_m",
        "wheel_inertia_kgm2",
        "thrust_f0_n",
        "thrust_tau_s",
        "launch_loss_ratio",
        "yaw_deg",
        "surface_roughness_gain",
    ]
    sensitivity_rows = []
    for f in factors:
        sensitivity_rows.append(
            {
                "factor": f,
                "spearman_abs": abs(spearman([r[f] for r in results], times)),
                "spearman_signed": spearman([r[f] for r in results], times),
            }
        )

    sensitivity_rows.sort(key=lambda r: r["spearman_abs"], reverse=True)

    out_summary = OUTPUT_DIR / "01_dynamics_montecarlo_summary.json"
    out_sensitivity = OUTPUT_DIR / "01_dynamics_montecarlo_sensitivity.csv"
    out_raw = OUTPUT_DIR / "01_dynamics_montecarlo_raw.csv"

    write_json(out_summary, summary)
    write_csv(out_sensitivity, sensitivity_rows)
    write_csv(
        out_raw,
        [
            {
                "seed": r["seed"],
                "finish_time_s": f"{r['finish_time_s']:.6f}",
                "success": int(r["success"]),
                "mass_kg": f"{r['mass_kg']:.6f}",
                "cda_m2": f"{r['cda_m2']:.8f}",
                "crr": f"{r['crr']:.6f}",
                "thrust_f0_n": f"{r['thrust_f0_n']:.4f}",
                "launch_loss_ratio": f"{r['launch_loss_ratio']:.5f}",
                "yaw_deg": f"{r['yaw_deg']:.5f}",
            }
            for r in results
        ],
    )

    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_sensitivity}")
    print(f"[OK] Wrote {out_raw}")


if __name__ == "__main__":
    main()
