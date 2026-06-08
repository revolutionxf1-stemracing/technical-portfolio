#!/usr/bin/env python3
"""Multi-objective aerodynamic optimization via NSGA-II.

Core idea:
- Minimize three conflicting objectives simultaneously:
  1) drag surrogate (performance)
  2) stability penalty (race robustness)
  3) manufacturing penalty (repeatability/DFM)

Method:
- NSGA-II (Deb et al.) with:
  - Fast non-dominated sorting
  - Crowding distance diversity preservation
  - Tournament selection
  - SBX crossover + polynomial mutation

Note:
- This uses engineering surrogates (response equations), not CFD directly.
- In a real workflow these surrogates should be calibrated from CFD/track data.
"""

from __future__ import annotations

import argparse
import random
from dataclasses import dataclass

from common import OUTPUT_DIR, ensure_dirs, percentile, seed_everything, write_csv, write_json


# Design variable bounds (normalized design space for concept iteration).
BOUNDS = [
    (0.035, 0.180),  # nose_radius_ratio
    (0.000, 1.000),  # sidepod_taper
    (-4.000, 7.000),  # wing_attack_deg
    (0.000, 1.000),  # wheel_shroud_ratio
    (0.000, 1.000),  # splitline_robustness
]
NAMES = [
    "nose_radius_ratio",
    "sidepod_taper",
    "wing_attack_deg",
    "wheel_shroud_ratio",
    "splitline_robustness",
]


@dataclass
class Individual:
    # x: design vector, f: objective vector [drag, stability_pen, manuf_pen]
    x: list[float]
    f: list[float]
    rank: int = 0
    crowding: float = 0.0


def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))


def evaluate(x: list[float]) -> list[float]:
    """Evaluate surrogate objectives for one design vector.

    The equations below are intentionally nonlinear and include interactions,
    matching typical aerodynamic trade-offs found in CFD response surfaces.
    """
    n, taper, wing, shroud, split = x

    # Drag surrogate (dimensionless objective proxy, lower is better).
    # Structure: baseline + linear terms + quadratic curvature terms + interactions.
    drag = (
        0.247
        - 0.021 * taper
        - 0.012 * shroud
        + 0.006 * (wing + 0.8) ** 2 / 25.0
        + 0.018 * (n - 0.095) ** 2 / 0.01
        + 0.010 * (1.0 - split) ** 2
        - 0.006 * taper * shroud
        + 0.004 * (wing / 6.0) * (1.0 - taper)
    )

    # Stability surrogate: lower penalty means better directional robustness.
    stability_pen = (
        0.120
        + 0.075 * abs(wing - 0.5) / 7.5
        + 0.050 * (1.0 - taper)
        + 0.038 * abs(0.10 - n) / 0.08
        + 0.020 * (1.0 - shroud)
    )

    # Manufacturing surrogate: lower penalty means easier process capability.
    manuf_pen = (
        0.10
        + 0.13 * max(0.0, 0.055 - n) / 0.055
        + 0.09 * max(0.0, wing - 5.0) / 3.0
        + 0.06 * abs(taper - 0.62)
        + 0.11 * (1.0 - split)
    )

    # Soft compliance penalties emulate rule/manufacturing boundaries.
    constraint = 0.0
    if n < 0.050:
        constraint += 0.25 * (0.050 - n) / 0.050
    if wing > 6.0:
        constraint += 0.20 * (wing - 6.0) / 2.0
    if shroud > 0.85 and taper < 0.25:
        constraint += 0.15

    return [drag + constraint, stability_pen + 0.60 * constraint, manuf_pen + 0.90 * constraint]


def dominates(a: Individual, b: Individual) -> bool:
    """Pareto dominance relation.

    a dominates b iff:
    - a is no worse in all objectives
    - a is strictly better in at least one objective
    """
    better_or_equal = all(x <= y for x, y in zip(a.f, b.f))
    strictly_better = any(x < y for x, y in zip(a.f, b.f))
    return better_or_equal and strictly_better


def fast_non_dominated_sort(pop: list[Individual]) -> list[list[int]]:
    """NSGA-II fast non-dominated sorting.

    Returns fronts F0, F1, ... where F0 is the Pareto front.
    """
    s = [set() for _ in pop]
    n = [0 for _ in pop]
    fronts: list[list[int]] = [[]]

    for p in range(len(pop)):
        for q in range(len(pop)):
            if p == q:
                continue
            if dominates(pop[p], pop[q]):
                s[p].add(q)
            elif dominates(pop[q], pop[p]):
                n[p] += 1
        if n[p] == 0:
            pop[p].rank = 0
            fronts[0].append(p)

    i = 0
    while i < len(fronts) and fronts[i]:
        nxt = []
        for p in fronts[i]:
            for q in s[p]:
                n[q] -= 1
                if n[q] == 0:
                    pop[q].rank = i + 1
                    nxt.append(q)
        i += 1
        if nxt:
            fronts.append(nxt)

    return fronts


def crowding_distance(pop: list[Individual], front_idx: list[int]) -> None:
    """Compute NSGA-II crowding distance for one front.

    Distance approximates local objective-space density.
    Higher crowding keeps boundary/diverse solutions.
    """
    if not front_idx:
        return
    m = len(pop[0].f)
    for i in front_idx:
        pop[i].crowding = 0.0

    for obj in range(m):
        front_sorted = sorted(front_idx, key=lambda idx: pop[idx].f[obj])
        lo = pop[front_sorted[0]].f[obj]
        hi = pop[front_sorted[-1]].f[obj]
        pop[front_sorted[0]].crowding = float("inf")
        pop[front_sorted[-1]].crowding = float("inf")
        if hi - lo < 1e-12:
            continue
        for j in range(1, len(front_sorted) - 1):
            prev_v = pop[front_sorted[j - 1]].f[obj]
            next_v = pop[front_sorted[j + 1]].f[obj]
            pop[front_sorted[j]].crowding += (next_v - prev_v) / (hi - lo)


def tournament(pop: list[Individual], rng: random.Random) -> Individual:
    """Binary tournament by rank first, then crowding distance."""
    a = pop[rng.randrange(len(pop))]
    b = pop[rng.randrange(len(pop))]
    if a.rank < b.rank:
        return a
    if b.rank < a.rank:
        return b
    if a.crowding > b.crowding:
        return a
    if b.crowding > a.crowding:
        return b
    return a if rng.random() < 0.5 else b


def sbx_crossover(p1: list[float], p2: list[float], rng: random.Random, eta: float = 15.0) -> tuple[list[float], list[float]]:
    """Simulated Binary Crossover (SBX).

    SBX mimics one-point crossover behavior in continuous variables.
    eta controls spread: higher eta -> children closer to parents.
    """
    c1 = p1.copy()
    c2 = p2.copy()
    for i, (lo, hi) in enumerate(BOUNDS):
        if rng.random() > 0.90:
            continue
        if abs(p1[i] - p2[i]) < 1e-12:
            continue

        x1 = min(p1[i], p2[i])
        x2 = max(p1[i], p2[i])
        u = rng.random()

        beta = 1.0 + 2.0 * (x1 - lo) / (x2 - x1)
        alpha = 2.0 - beta ** (-(eta + 1.0))
        if u <= 1.0 / alpha:
            betaq = (u * alpha) ** (1.0 / (eta + 1.0))
        else:
            betaq = (1.0 / (2.0 - u * alpha)) ** (1.0 / (eta + 1.0))
        child1 = 0.5 * ((x1 + x2) - betaq * (x2 - x1))

        beta = 1.0 + 2.0 * (hi - x2) / (x2 - x1)
        alpha = 2.0 - beta ** (-(eta + 1.0))
        if u <= 1.0 / alpha:
            betaq = (u * alpha) ** (1.0 / (eta + 1.0))
        else:
            betaq = (1.0 / (2.0 - u * alpha)) ** (1.0 / (eta + 1.0))
        child2 = 0.5 * ((x1 + x2) + betaq * (x2 - x1))

        c1[i] = clamp(child1, lo, hi)
        c2[i] = clamp(child2, lo, hi)

    return c1, c2


def polynomial_mutation(x: list[float], rng: random.Random, eta: float = 20.0, pm: float = 0.20) -> list[float]:
    """Polynomial mutation for bounded real-valued GA variables."""
    y = x.copy()
    for i, (lo, hi) in enumerate(BOUNDS):
        if rng.random() > pm:
            continue
        delta1 = (y[i] - lo) / (hi - lo)
        delta2 = (hi - y[i]) / (hi - lo)
        u = rng.random()
        mut_pow = 1.0 / (eta + 1.0)
        if u < 0.5:
            xy = 1.0 - delta1
            val = 2.0 * u + (1.0 - 2.0 * u) * (xy ** (eta + 1.0))
            dq = val ** mut_pow - 1.0
        else:
            xy = 1.0 - delta2
            val = 2.0 * (1.0 - u) + 2.0 * (u - 0.5) * (xy ** (eta + 1.0))
            dq = 1.0 - val ** mut_pow
        y[i] = clamp(y[i] + dq * (hi - lo), lo, hi)
    return y


def random_individual(rng: random.Random) -> Individual:
    x = [rng.uniform(lo, hi) for lo, hi in BOUNDS]
    return Individual(x=x, f=evaluate(x))


def normalized_weighted_score(front: list[Individual], weights: tuple[float, float, float]) -> list[tuple[float, Individual]]:
    """Build one portfolio-friendly champion from Pareto set.

    NSGA-II gives a set of optimal trade-offs. For practical implementation,
    this function creates a normalized weighted decision score.
    """
    mins = [min(ind.f[i] for ind in front) for i in range(3)]
    maxs = [max(ind.f[i] for ind in front) for i in range(3)]
    scored: list[tuple[float, Individual]] = []
    for ind in front:
        score = 0.0
        for i, w in enumerate(weights):
            if maxs[i] - mins[i] < 1e-12:
                z = 0.0
            else:
                z = (ind.f[i] - mins[i]) / (maxs[i] - mins[i])
            score += w * z
        scored.append((score, ind))
    scored.sort(key=lambda t: t[0])
    return scored


def main() -> None:
    parser = argparse.ArgumentParser(description="NSGA-II aero optimizer")
    parser.add_argument("--population", type=int, default=120)
    parser.add_argument("--generations", type=int, default=90)
    parser.add_argument("--seed", type=int, default=2026)
    args = parser.parse_args()

    ensure_dirs()
    rng = seed_everything(args.seed)

    pop = [random_individual(rng) for _ in range(args.population)]
    history = []

    # Main NSGA-II loop.
    for gen in range(args.generations):
        fronts = fast_non_dominated_sort(pop)
        for fidx in fronts:
            crowding_distance(pop, fidx)

        offspring: list[Individual] = []
        while len(offspring) < args.population:
            p1 = tournament(pop, rng)
            p2 = tournament(pop, rng)
            c1x, c2x = sbx_crossover(p1.x, p2.x, rng)
            c1x = polynomial_mutation(c1x, rng)
            c2x = polynomial_mutation(c2x, rng)
            offspring.append(Individual(x=c1x, f=evaluate(c1x)))
            if len(offspring) < args.population:
                offspring.append(Individual(x=c2x, f=evaluate(c2x)))

        # Elitist replacement from merged parent+offspring population.
        merged = pop + offspring
        fronts = fast_non_dominated_sort(merged)
        next_pop: list[Individual] = []

        for fidx in fronts:
            crowding_distance(merged, fidx)
            front_inds = [merged[i] for i in fidx]
            if len(next_pop) + len(front_inds) <= args.population:
                next_pop.extend(front_inds)
            else:
                front_inds.sort(key=lambda ind: ind.crowding, reverse=True)
                remaining = args.population - len(next_pop)
                next_pop.extend(front_inds[:remaining])
                break

        pop = next_pop

        # Track convergence indicators for portfolio plots.
        best_drag = min(ind.f[0] for ind in pop)
        best_stability = min(ind.f[1] for ind in pop)
        best_manuf = min(ind.f[2] for ind in pop)
        history.append(
            {
                "generation": gen,
                "best_drag": best_drag,
                "best_stability": best_stability,
                "best_manufacturability": best_manuf,
            }
        )

    final_fronts = fast_non_dominated_sort(pop)
    pareto = [pop[i] for i in final_fronts[0]]

    # Choose one implementation candidate from Pareto front.
    scored = normalized_weighted_score(pareto, weights=(0.55, 0.30, 0.15))
    champion = scored[0][1]

    pareto_rows = []
    for ind in pareto:
        row = {name: f"{val:.6f}" for name, val in zip(NAMES, ind.x)}
        row.update(
            {
                "drag_obj": f"{ind.f[0]:.6f}",
                "stability_obj": f"{ind.f[1]:.6f}",
                "manufacturing_obj": f"{ind.f[2]:.6f}",
            }
        )
        pareto_rows.append(row)

    summary = {
        "optimizer": "NSGA-II",
        "population": args.population,
        "generations": args.generations,
        "seed": args.seed,
        "pareto_size": len(pareto),
        "pareto_kpis": {
            "drag_p10": percentile([p.f[0] for p in pareto], 10),
            "drag_p50": percentile([p.f[0] for p in pareto], 50),
            "drag_p90": percentile([p.f[0] for p in pareto], 90),
        },
        "champion_design": {
            **{name: val for name, val in zip(NAMES, champion.x)},
            "objectives": {
                "drag": champion.f[0],
                "stability": champion.f[1],
                "manufacturability": champion.f[2],
            },
        },
        "portfolio_message": "Pareto front proves the team can optimize conflicting engineering objectives.",
    }

    out_summary = OUTPUT_DIR / "02_nsga2_summary.json"
    out_pareto = OUTPUT_DIR / "02_nsga2_pareto.csv"
    out_history = OUTPUT_DIR / "02_nsga2_history.csv"

    write_json(out_summary, summary)
    write_csv(out_pareto, pareto_rows)
    write_csv(out_history, history)

    print(f"[OK] Wrote {out_summary}")
    print(f"[OK] Wrote {out_pareto}")
    print(f"[OK] Wrote {out_history}")


if __name__ == "__main__":
    main()
