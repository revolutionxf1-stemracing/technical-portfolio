"""Common utilities for RevolutionX performance test suite.

This module centralizes:
- Reproducibility utilities (seeding, deterministic outputs).
- Statistical primitives used across experiments.
- Numeric helper for ODE integration (RK4).
- Artifact export helpers (CSV/JSON) for portfolio evidence.

Although this file is not a physics model itself, it provides the
mathematical operators used by the physics scripts.
"""

from __future__ import annotations

import csv
import json
import math
import random
from dataclasses import asdict, is_dataclass
from pathlib import Path
from typing import Any, Callable, Iterable, Sequence


LAB_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = LAB_ROOT / "output"
DATA_DIR = LAB_ROOT / "data"


def ensure_dirs() -> None:
    """Create output/data directories if missing.

    Keeps all experiment artifacts in a stable folder layout so every run
    can be audited and embedded into the technical portfolio.
    """
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)


def seed_everything(seed: int = 42) -> random.Random:
    """Seed global and local RNG streams.

    Reproducibility is essential for technical claims.
    The same seed must produce identical synthetic datasets.
    """
    random.seed(seed)
    return random.Random(seed)


def percentile(values: Sequence[float], q: float) -> float:
    """Linear-interpolated percentile.

    Formula:
    - position = (n - 1) * q/100
    - linear interpolation between floor(position) and ceil(position)

    Used for robust KPI reporting (P05/P50/P95) in simulations.
    """
    if not values:
        raise ValueError("values cannot be empty")
    if q <= 0:
        return min(values)
    if q >= 100:
        return max(values)
    sorted_vals = sorted(values)
    pos = (len(sorted_vals) - 1) * (q / 100.0)
    lo = math.floor(pos)
    hi = math.ceil(pos)
    if lo == hi:
        return sorted_vals[lo]
    frac = pos - lo
    return sorted_vals[lo] * (1.0 - frac) + sorted_vals[hi] * frac


def mean(values: Sequence[float]) -> float:
    """Arithmetic mean: mu = (1/n) * sum(x_i)."""
    if not values:
        raise ValueError("values cannot be empty")
    return sum(values) / len(values)


def stdev(values: Sequence[float]) -> float:
    """Sample standard deviation.

    Formula:
    s = sqrt( sum((x_i - mu)^2) / (n - 1) )
    """
    if len(values) < 2:
        return 0.0
    mu = mean(values)
    return math.sqrt(sum((v - mu) ** 2 for v in values) / (len(values) - 1))


def corr(x: Sequence[float], y: Sequence[float]) -> float:
    """Pearson linear correlation coefficient.

    Formula:
    r = cov(x, y) / (s_x * s_y)
    cov(x, y) = sum((x_i - mu_x)(y_i - mu_y)) / (n - 1)
    """
    if len(x) != len(y) or len(x) < 2:
        return 0.0
    mx = mean(x)
    my = mean(y)
    sx = stdev(x)
    sy = stdev(y)
    if sx == 0.0 or sy == 0.0:
        return 0.0
    cov = sum((a - mx) * (b - my) for a, b in zip(x, y)) / (len(x) - 1)
    return cov / (sx * sy)


def rk4_step(state: list[float], t: float, dt: float, deriv: Callable[[float, list[float]], list[float]]) -> list[float]:
    """Runge-Kutta 4th order single integration step.

    ODE form:
    d(state)/dt = deriv(t, state)

    RK4 update:
    state_{k+1} = state_k + dt*(k1 + 2*k2 + 2*k3 + k4)/6

    This is the standard high-accuracy explicit integrator for smooth dynamics.
    """
    k1 = deriv(t, state)
    s2 = [v + 0.5 * dt * k for v, k in zip(state, k1)]
    k2 = deriv(t + 0.5 * dt, s2)
    s3 = [v + 0.5 * dt * k for v, k in zip(state, k2)]
    k3 = deriv(t + 0.5 * dt, s3)
    s4 = [v + dt * k for v, k in zip(state, k3)]
    k4 = deriv(t + dt, s4)
    return [v + dt * (a + 2.0 * b + 2.0 * c + d) / 6.0 for v, a, b, c, d in zip(state, k1, k2, k3, k4)]


def write_csv(path: Path, rows: Iterable[dict[str, Any]]) -> None:
    """Write rows to CSV preserving key order from first row."""
    rows = list(rows)
    if not rows:
        path.write_text("", encoding="utf-8")
        return
    headers = list(rows[0].keys())
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)


def write_json(path: Path, payload: Any) -> None:
    """Write JSON with deterministic formatting for version control diffs."""
    if is_dataclass(payload):
        payload = asdict(payload)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True), encoding="utf-8")


def zscore(values: Sequence[float]) -> list[float]:
    """Standard score transform.

    Formula:
    z_i = (x_i - mu) / s

    Useful for normalization before multi-metric comparisons.
    """
    mu = mean(values)
    sd = stdev(values)
    if sd == 0:
        return [0.0 for _ in values]
    return [(v - mu) / sd for v in values]


def ranks(values: Sequence[float]) -> list[float]:
    """Assign average ranks, handling ties with mean rank.

    Used to compute Spearman rank correlation.
    """
    indexed = sorted(enumerate(values), key=lambda x: x[1])
    out = [0.0] * len(values)
    i = 0
    while i < len(indexed):
        j = i + 1
        while j < len(indexed) and indexed[j][1] == indexed[i][1]:
            j += 1
        avg_rank = 0.5 * (i + j - 1) + 1.0
        for k in range(i, j):
            out[indexed[k][0]] = avg_rank
        i = j
    return out


def spearman(x: Sequence[float], y: Sequence[float]) -> float:
    """Spearman rank correlation.

    Computed as Pearson correlation on rank-transformed variables.
    Captures monotonic sensitivity without assuming linearity.
    """
    return corr(ranks(x), ranks(y))
