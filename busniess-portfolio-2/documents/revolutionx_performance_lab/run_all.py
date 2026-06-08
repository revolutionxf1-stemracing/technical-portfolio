#!/usr/bin/env python3
"""Run the full RevolutionX performance lab and generate all evidence artifacts.

Execution order is intentional:
1) Dynamic performance uncertainty
2) Multi-objective optimization
3) DOE statistical screening
4) Manufacturing capability
5) Reliability modeling
6) Telemetry parameter identification

This creates a complete evidence chain from design to validation.
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


LAB_ROOT = Path(__file__).resolve().parent

# Default campaign sizes are tuned for fast local iteration.
TESTS = [
    ["tests/01_vehicle_dynamics_montecarlo.py", "--runs", "5000", "--processes", "4"],
    ["tests/02_aero_nsga2_optimizer.py", "--population", "110", "--generations", "70"],
    ["tests/03_doe_factor_screening.py", "--boot", "900"],
    ["tests/04_tolerance_stackup_montecarlo.py", "--runs", "18000"],
    ["tests/05_bearing_reliability_weibull.py", "--boot", "450"],
    ["tests/06_telemetry_system_identification.py"],
]


def run(cmd: list[str]) -> None:
    """Run one script and fail-fast on any error."""
    full = [sys.executable, *cmd]
    print(f"[RUN] {' '.join(full)}")
    subprocess.run(full, cwd=LAB_ROOT, check=True)


def main() -> None:
    for cmd in TESTS:
        run(cmd)
    print("\n[OK] Full evidence pack generated in documents/revolutionx_performance_lab/output")


if __name__ == "__main__":
    main()
