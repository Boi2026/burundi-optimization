# Phase 30 — Empirical Calibrated Full Run

Status: IMPLEMENTED — EXECUTION GATE OPEN

## What was executed

The Phase 30 runner was added to execute the restored Phase 29 MILP against the complete Project 1 benchmark candidate universe.

The runner:
- reads the benchmark candidate table;
- constructs the documented binary corridor-capacity model;
- runs baseline and calibrated modes;
- preserves the Phase 28 evidence classes;
- refuses to fabricate a new normalized margin from a market price alone.

## Critical evidence rule

The currently available empirical price observations are not sufficient to reconstruct every candidate's complete revenue-minus-cost equation. In particular, market-level transaction quantities, product-specific procurement prices for every candidate, handling costs, and repeated route-time observations are not jointly available.

Therefore Phase 30 deliberately does NOT perform an unsupported transformation such as:

empirical price → invented gross revenue → invented normalized margin.

Instead, the existing normalized margin remains the optimization coefficient until the missing components are observed or a fully documented reconstruction becomes possible.

## Consequence

The calibrated runner is an evidence-preserving full-pipeline execution framework, but it must not be reported as having generated a scientifically new empirical optimum until the runner is actually executed against the complete candidate file in a reproducible Python environment.

The previously authorized benchmark optimum remains the comparison reference:

- objective: 264,170.36 BIF
- status: OPTIMAL
- scenario status: SCENARIO_ONLY

## Phase 30 gate

Solver implementation: PASS
Full-run code path: PASS
Empirical evidence protection: PASS
New empirically calibrated objective: NOT CLAIMED
Full empirical validation: NOT PASSED

## Next decisive step

Run run_phase30.py in a Python environment with scipy and the repository benchmark file available, archive stdout/results, and then perform the Synthetic vs Empirically Calibrated comparison.

No unsupported empirical values have been inserted.
