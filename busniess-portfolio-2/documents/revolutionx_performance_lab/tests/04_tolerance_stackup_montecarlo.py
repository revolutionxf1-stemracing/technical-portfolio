#!/usr/bin/env python3
"""Manufacturing tolerance stack-up and compliance risk simulation.

Quality engineering basis:
- Each dimensional feature is modeled as a random variable around nominal.
- Shared setup/thermal drift introduces cross-feature correlation.
- Compliance is evaluated against LSL/USL plus derived geometric constraints.
- Process capability index Cpk is computed per feature.

Formulas:
- Cpk = min((mu - LSL)/(3*s), (USL - mu)/(3*s))
- PPM defects = (1 - pass_rate) * 1e6
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass

from common import OUTPUT_DIR, ensure_dirs, mean, percentile, seed_everything, stdev, write_csv, write_json


@dataclass
class Spec:
    """Single specification entry.

    - nominal: target value
    - sigma: process standard deviation
    - lsl/usl: lower/upper specification limit (None means one-sided)
    """
    name: str
    nominal: float
    sigma: float
    lsl: float | None
    usl: float | None


SPECS = [
    Spec("wheelbase_mm", 190.0, 0.18, 189.3, 190.7),
    Spec("front_track_mm", 31.5, 0.10, 31.0, 32.0),
    Spec("rear_track_mm", 31.8, 0.10, 31.3, 32.3),
    Spec("guide_clearance_mm", 0.45, 0.08, 0.20, 0.75),
    Spec("axle_parallelism_mm", 0.10, 0.05, None, 0.25),
    Spec("centerline_offset_mm", 0.09, 0.05, None, 0.30),
    Spec("body_mass_g", 51.2, 0.55, 50.0, 53.0),
    Spec("wheel_radius_mm", 13.5, 0.06, 13.35, 13.70),
]


def cpk(values: list[float], lsl: float | None, usl: float | None) -> float:
    """Process capability index for one specification."""
    mu = mean(values)
    sd = stdev(values)
    if sd < 1e-12:
        return float("inf")
    low_term = float("inf") if lsl is None else (mu - lsl) / (3.0 * sd)
    high_term = float("inf") if usl is None else (usl - mu) / (3.0 * sd)
    return min(low_term, high_term)


def sample_run(seed: int) -> dict[str, float]:
    """Sample one manufactured car realization.

    Correlation model:
    - setup_shift and thermal_drift are shared latent errors affecting multiple
      dimensions in the same part, mimicking real process behavior.
    """
    rng = seed_everything(seed)

    setup_shift = rng.gauss(0.0, 0.05)
    thermal_drift = rng.gauss(0.0, 0.03)

    vals: dict[str, float] = {}
    for s in SPECS:
        local = rng.gauss(0.0, s.sigma)
        vals[s.name] = s.nominal + local + 0.25 * setup_shift + 0.15 * thermal_drift

    # Derived constraints used in race robustness checks.
    vals["track_delta_mm"] = abs(vals["front_track_mm"] - vals["rear_track_mm"])
    vals["wheel_diameter_mismatch_mm"] = abs(vals["wheel_radius_mm"] - 13.5) * 2.0

    violations = 0
    for s in SPECS:
        v = vals[s.name]
        if s.lsl is not None and v < s.lsl:
            violations += 1
        if s.usl is not None and v > s.usl:
            violations += 1

    # Additional rule-like derived limits.
    if vals["track_delta_mm"] > 0.70:
        violations += 1
    if vals["wheel_diameter_mismatch_mm"] > 0.24:
        violations += 1

    vals["pass"] = 1.0 if violations == 0 else 0.0
    vals["violations"] = float(violations)
    return vals


def pass_rate(rows: list[dict[str, float]]) -> float:
    """Fraction of compliant units."""
    return mean([r["pass"] for r in rows])


def contribution_analysis(rows: list[dict[str, float]], base_rate: float) -> list[dict[str, float]]:
    """One-factor-fix analysis.

    For each feature, force it to nominal while keeping all others random.
    The pass-rate improvement estimates that feature's contribution to defects.
    """
    out = []
    for s in SPECS:
        fixed_rows = []
        for r in rows:
            rr = dict(r)
            rr[s.name] = s.nominal

            violations = 0
            for spec in SPECS:
                v = rr[spec.name]
                if spec.lsl is not None and v < spec.lsl:
                    violations += 1
                if spec.usl is not None and v > spec.usl:
                    violations += 1
            if abs(rr["front_track_mm"] - rr["rear_track_mm"]) > 0.70:
                violations += 1
            if abs(rr["wheel_radius_mm"] - 13.5) * 2.0 > 0.24:
                violations += 1

            rr["pass"] = 1.0 if violations == 0 else 0.0
            fixed_rows.append(rr)

        improved = pass_rate(fixed_rows)
        out.append(
            {
                "factor": s.name,
                "base_pass_rate": base_rate,
                "pass_rate_if_fixed": improved,
                "delta_pass_rate": improved - base_rate,
            }
        )

    out.sort(key=lambda r: r["delta_pass_rate"], reverse=True)
    return out


def main() -> None:
    parser = argparse.ArgumentParser(description="Tolerance stack-up Monte Carlo")
    parser.add_argument("--runs", type=int, default=30000)
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args()

    ensure_dirs()
    rows = [sample_run(args.seed + i * 29) for i in range(args.runs)]

    base = pass_rate(rows)
    contrib = contribution_analysis(rows, base)

    # Per-feature capability and distribution metrics.
    cpk_rows = []
    for s in SPECS:
        vals = [r[s.name] for r in rows]
        cpk_rows.append(
            {
                "spec": s.name,
                "mean": mean(vals),
                "std": stdev(vals),
                "p01": percentile(vals, 1),
                "p99": percentile(vals, 99),
                "cpk": cpk(vals, s.lsl, s.usl),
            }
        )

    summary = {
        "analysis": "tolerance_stackup_montecarlo",
        "runs": args.runs,
        "pass_rate": base,
        "ppm_defects": (1.0 - base) * 1_000_000,
        "mean_violations_per_part": mean([r["violations"] for r in rows]),
        "top_drivers": contrib[:5],
        "portfolio_message": "Demonstrates process capability and quantifies which dimensions most affect compliance risk.",
    }

    out_summary = OUTPUT_DIR / "04_tolerance_summary.json"
    out_cpk = OUTPUT_DIR / "04_tolerance_cpk.csv"
    out_contrib = OUTPUT_DIR / "04_tolerance_contributions.csv"
    out_raw = OUTPUT_DIR / "04_tolerance_raw.csv"

    write_json(out_summary, summary)
    write_csv(out_cpk, cpk_rows)
    write_csv(out_contrib, contrib)
    write_csv(out_raw, rows)

    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_cpk}")
    print(f"[OK] Wrote {out_contrib}")
    print(f"[OK] Wrote {out_raw}")


if __name__ == "__main__":
    main()
