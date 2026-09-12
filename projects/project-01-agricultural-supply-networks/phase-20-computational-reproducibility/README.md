# Phase 20 — Computational Reproducibility & Optimization Implementation

## Purpose
Phase 20 makes the mathematical allocation layer explicit and executable. It is intentionally separate from empirical validation: no synthetic observations are introduced and no empirical claims are added.

## Scientific status
**Implementation specification and executable baseline — not independently validated against the original hidden execution environment.**

The repository currently contains published allocation outputs, including `Table_4_cap3_allocation.csv` and `benchmark_flows_811.33_cap3.csv`, but the original solver implementation was not present in the public repository. Phase 20 therefore reconstructs the allocation problem from the documented output schema and stated methodological constraints.

## Model represented
For each candidate product-corridor observation i:

- binary decision y_i ∈ {0,1}: select the candidate flow or not;
- c_i: normalized margin contribution (BIF);
- u_i: normalized flow-unit requirement;
- corridor(i): shared corridor identifier.

Objective:

max Σ_i c_i y_i

subject to:

Σ_{i: corridor(i)=e} u_i y_i ≤ C_e  for every corridor e

y_i ∈ {0,1}.

The principal configuration documented by Phase 13 is C_e = 3 normalized units per corridor.

### Important qualification
This is a reconstruction of the allocation layer, not a claim that it is byte-for-byte identical to the historical solver. The public evidence establishes the output fields and the shared-capacity concept, but does not expose the original solver code, all preprocessing rules, or all supply/demand constraint inputs.

## Inputs
The baseline runner expects a CSV with at least:

- `corridor_key`
- `flow_unit`
- `normalized_margin_contribution_bif`

Optional filtering can use `scenario_bif_tkm` or `transport_cost_bif_kg` when present.

## Output
The runner writes a selected-flow CSV and a compact summary containing:

- scenario
- corridor capacity
- selected flow arcs
- total normalized flow units
- total normalized margin

## Reproducibility rule
Do not label the reconstructed result as an exact reproduction of the historical Phase-10/13 solver until its output has been compared with the archived tables and the remaining preprocessing assumptions have been recovered.
