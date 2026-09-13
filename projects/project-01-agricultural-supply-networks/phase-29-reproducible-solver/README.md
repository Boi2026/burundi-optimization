# Phase 29 — Reproducible Solver Restoration

This phase restores an executable implementation of the documented Phase 20 binary network-selection model.

## Model

For candidate i:

- decision x_i ∈ {0,1}
- objective: maximize Σ m_i x_i
- shared corridor capacity: Σ f_i x_i ≤ C_e
- default normalized capacity: C_e = 3

The implementation uses scipy.optimize.milp and negates the objective because scipy.milp is a minimizer.

## Evidence boundary

This implementation reproduces the documented mathematical structure. It does **not** claim to recover the original historical solver, preprocessing, filtering, tie-breaking, tolerances, or any undocumented supply/demand constraints.

## Empirical calibration

Phase 29 accepts empirically calibrated parameters as inputs but does not silently convert estimates into observations. Institutional estimates and secondary benchmarks must retain their evidence class.

## Reproducibility

Run:

python -m pip install scipy numpy
python solver.py path/to/candidates.csv --capacity 3

The candidate CSV must contain:

candidate_id,corridor,margin,flow_unit

A successful run reports the solver status and objective.
