"""
BOI Project 1 — reproducible binary network-selection solver
Phase 29 implementation.

Dependencies: Python 3.10+, scipy
Model: maximize sum(m_i x_i), subject to shared corridor capacities.
x_i in {0,1}. Flow-unit and capacity are normalized units.
"""

from __future__ import annotations
import csv
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
import numpy as np
from scipy.optimize import milp, LinearConstraint, Bounds


@dataclass(frozen=True)
class Candidate:
    candidate_id: str
    corridor: str
    margin: float
    flow_unit: float = 1.0


def read_candidates(path: str | Path) -> list[Candidate]:
    with open(path, newline="", encoding="utf-8") as f:
        rows = csv.DictReader(f)
        return [
            Candidate(
                candidate_id=r["candidate_id"],
                corridor=r["corridor"],
                margin=float(r["margin"]),
                flow_unit=float(r.get("flow_unit", 1.0)),
            )
            for r in rows
        ]


def solve(candidates: Iterable[Candidate], capacity_by_corridor: dict[str, float]):
    candidates = list(candidates)
    corridors = sorted(capacity_by_corridor)
    index = {c: j for j, c in enumerate(corridors)}

    A = np.zeros((len(corridors), len(candidates)))
    for i, item in enumerate(candidates):
        if item.corridor not in index:
            raise ValueError(f"Unknown corridor: {item.corridor}")
        A[index[item.corridor], i] = item.flow_unit

    # scipy.milp minimizes; negate margin to maximize it.
    result = milp(
        c=-np.array([x.margin for x in candidates], dtype=float),
        integrality=np.ones(len(candidates)),
        bounds=Bounds(0, 1),
        constraints=LinearConstraint(
            A,
            -np.inf * np.ones(len(corridors)),
            np.array([capacity_by_corridor[c] for c in corridors], dtype=float),
        ),
        options={"presolve": True},
    )
    return result


def selected_candidates(candidates: list[Candidate], result) -> list[Candidate]:
    if result.x is None:
        return []
    return [c for c, x in zip(candidates, result.x) if x >= 0.5]


if __name__ == "__main__":
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument("csv")
    p.add_argument("--capacity", type=float, default=3.0)
    args = p.parse_args()
    items = read_candidates(args.csv)
    corridors = {x.corridor for x in items}
    result = solve(items, {c: args.capacity for c in corridors})
    print(f"status={result.status}")
    print(f"message={result.message}")
    print(f"objective={-result.fun if result.fun is not None else None}")
