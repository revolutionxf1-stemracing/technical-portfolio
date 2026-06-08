#!/usr/bin/env python3
"""DOE factor screening with bootstrap confidence intervals.

Statistical basis:
- 2-level full factorial design (coded levels -1/+1).
- Main and interaction effects using contrast of means:
  effect = mean(y | sign=+1) - mean(y | sign=-1)
- Bootstrap confidence intervals (percentile method, 95%).

Use case in portfolio:
- Proves factor prioritization with uncertainty bounds.
- Avoids subjective setup decisions.
"""

from __future__ import annotations

import argparse
import csv
import itertools
from pathlib import Path

from common import DATA_DIR, OUTPUT_DIR, ensure_dirs, mean, percentile, seed_everything, write_csv, write_json


# Engineering factors and their real (LOW, HIGH) physical levels.
FACTORS = {
    "wheel_diameter_mm": (24.8, 27.2),
    "bearing_preload_n": (0.15, 0.55),
    "body_mass_g": (48.5, 53.0),
    "rear_balance_pct": (46.0, 55.0),
    "guide_clearance_mm": (0.25, 0.75),
    "launch_alignment_deg": (-1.0, 1.0),
}


def coded_to_real(name: str, coded: int) -> float:
    """Map coded level (-1/+1) to real physical value (LOW/HIGH)."""
    lo, hi = FACTORS[name]
    return lo if coded < 0 else hi


def generate_full_factorial() -> list[dict[str, float]]:
    """Generate all 2^k combinations for k factors."""
    names = list(FACTORS.keys())
    rows = []
    for levels in itertools.product([-1, 1], repeat=len(names)):
        row = {f"coded_{n}": levels[i] for i, n in enumerate(names)}
        for i, n in enumerate(names):
            row[n] = coded_to_real(n, levels[i])
        rows.append(row)
    return rows


def synthetic_response(row: dict[str, float], seed_offset: int) -> float:
    """Synthetic process model used when no real CSV is provided.

    This emulates a realistic race-time response surface with:
    - main effects
    - interactions
    - measurement/process noise

    y is race time in seconds (lower is better).
    """
    rng = seed_everything(seed_offset)
    x = {k: row[f"coded_{k}"] for k in FACTORS}

    base = 1.088
    y = (
        base
        - 0.008 * x["wheel_diameter_mm"]
        + 0.005 * x["bearing_preload_n"]
        + 0.006 * x["body_mass_g"]
        - 0.004 * x["rear_balance_pct"]
        + 0.007 * x["guide_clearance_mm"]
        + 0.010 * abs(x["launch_alignment_deg"])
        - 0.005 * x["wheel_diameter_mm"] * x["rear_balance_pct"]
        + 0.004 * x["bearing_preload_n"] * x["guide_clearance_mm"]
        + 0.003 * x["body_mass_g"] * x["launch_alignment_deg"]
    )
    return y + rng.gauss(0.0, 0.0018)


def load_csv(path: Path) -> list[dict[str, float]]:
    """Load real DOE data.

    Accepted columns:
    - coded_<factor> and/or <factor>
    - mandatory response: time_s
    """
    rows: list[dict[str, float]] = []
    with path.open("r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for i, r in enumerate(reader):
            out: dict[str, float] = {}
            for name in FACTORS:
                c = f"coded_{name}"
                if c in r and r[c] != "":
                    out[c] = float(r[c])
                elif name in r and r[name] != "":
                    midpoint = 0.5 * (FACTORS[name][0] + FACTORS[name][1])
                    out[c] = -1.0 if float(r[name]) <= midpoint else 1.0
                else:
                    raise ValueError(f"Missing factor column '{name}' or '{c}' in row {i}")
            if "time_s" not in r:
                raise ValueError("CSV must include 'time_s' column")
            out["time_s"] = float(r["time_s"])
            rows.append(out)
    return rows


def effect(rows: list[dict[str, float]], term: str) -> float:
    """Estimate effect for a main term or interaction.

    For interaction A*B, sign = coded_A * coded_B.
    Effect formula:
      E = mean(time | sign=+1) - mean(time | sign=-1)
    Negative effect means HIGH level tends to reduce time (good).
    """
    plus = []
    minus = []
    for row in rows:
        if "*" in term:
            factors = term.split("*")
            sign = 1.0
            for f in factors:
                sign *= row[f"coded_{f}"]
        else:
            sign = row[f"coded_{term}"]
        if sign >= 0:
            plus.append(row["time_s"])
        else:
            minus.append(row["time_s"])
    return mean(plus) - mean(minus)


def bootstrap_ci(rows: list[dict[str, float]], term: str, n_boot: int, seed: int) -> tuple[float, float]:
    """Bootstrap CI for one effect using resampling with replacement."""
    rng = seed_everything(seed)
    vals = []
    n = len(rows)
    for _ in range(n_boot):
        sample = [rows[rng.randrange(n)] for _ in range(n)]
        vals.append(effect(sample, term))
    return percentile(vals, 2.5), percentile(vals, 97.5)


def main() -> None:
    parser = argparse.ArgumentParser(description="DOE screening and interaction analysis")
    parser.add_argument("--input", type=str, default="", help="Optional input CSV with real experiments")
    parser.add_argument("--boot", type=int, default=1200, help="Bootstrap iterations")
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args()

    ensure_dirs()

    if args.input:
        rows = load_csv(Path(args.input))
        mode = "real_data"
    else:
        # Build synthetic DOE campaign for methodology demonstration.
        design = generate_full_factorial()
        rows = []
        for i, row in enumerate(design):
            data_row = row.copy()
            data_row["time_s"] = synthetic_response(row, args.seed + i)
            rows.append(data_row)
        mode = "synthetic_demo"

        # Template for importing real experiments later.
        template_path = DATA_DIR / "doe_template.csv"
        write_csv(
            template_path,
            [
                {
                    **{f"coded_{k}": "" for k in FACTORS},
                    **{k: "" for k in FACTORS},
                    "time_s": "",
                }
            ],
        )

    main_terms = list(FACTORS.keys())
    interaction_terms = [f"{a}*{b}" for a, b in itertools.combinations(main_terms, 2)]

    ranked = []
    for term in main_terms + interaction_terms:
        eff = effect(rows, term)
        lo, hi = bootstrap_ci(rows, term, args.boot, args.seed + hash(term) % 10000)
        ranked.append(
            {
                "term": term,
                "effect_s": eff,
                "abs_effect_s": abs(eff),
                "ci95_low_s": lo,
                "ci95_high_s": hi,
            }
        )

    # Rank by absolute impact on race time.
    ranked.sort(key=lambda r: r["abs_effect_s"], reverse=True)

    # Translate effects into actionable level recommendations.
    recommendation = []
    for f in main_terms:
        eff = next(r["effect_s"] for r in ranked if r["term"] == f)
        level = "HIGH" if eff < 0 else "LOW"
        recommendation.append(
            {
                "factor": f,
                "recommended_level": level,
                "reason": "HIGH reduces time" if level == "HIGH" else "LOW reduces time",
            }
        )

    summary = {
        "analysis": "DOE factor screening",
        "mode": mode,
        "runs": len(rows),
        "top_5_effects": ranked[:5],
        "recommended_settings": recommendation,
        "portfolio_message": "Shows statistically defensible factor prioritization with uncertainty bounds.",
    }

    out_ranked = OUTPUT_DIR / "03_doe_ranked_effects.csv"
    out_summary = OUTPUT_DIR / "03_doe_summary.json"
    out_runs = OUTPUT_DIR / "03_doe_runs.csv"

    write_csv(out_ranked, ranked)
    write_json(out_summary, summary)
    write_csv(out_runs, rows)

    print(f"[OK] Wrote {out_ranked}")
    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_runs}")


if __name__ == "__main__":
    main()
