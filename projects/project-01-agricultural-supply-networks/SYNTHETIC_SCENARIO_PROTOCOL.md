# BOI Synthetic Scenario Protocol — Project 1

**Version:** 1.0  
**Status:** Computational experiment only

## Purpose

Allow Project 1 to progress while empirical market-level observations are incomplete.

## Non-negotiable labeling

Synthetic values are not observations. They must be labeled `SYNTHETIC` in every dataset, table, figure and publication.

## Scenario design

Synthetic market values are generated only after anchoring aggregate quantities to public reference evidence where available.

### Scenario variables
- market supply
- market demand
- transport cost
- corridor capacity
- disruption factor

### Scenario families

**S1 — Baseline:** balanced supply/demand with bounded synthetic allocation.

**S2 — Demand shock:** selected market demand increased by 20%.

**S3 — Supply shock:** selected origin supply reduced by 20%.

**S4 — Transport shock:** selected corridor costs increased by 30%.

**S5 — Combined disruption:** simultaneous supply and transport shocks.

Percentages are experimental assumptions, not empirical estimates.

## Provenance

Every synthetic record must contain:
- scenario_id
- synthetic=true
- parent_reference_id when anchored to public evidence
- generation_rule
- assumption_value
- random_seed if stochastic
- creation_date

## Scientific claim boundary

Valid claim:
> The optimization model was evaluated under reproducible synthetic scenarios anchored, where applicable, to public national reference quantities.

Invalid claim:
> The model was empirically validated against observed market data.

## Acceptance criteria

A scenario experiment is complete when:
1. input data are versioned;
2. generation rules are explicit;
3. seed is fixed where stochastic;
4. optimization code executes;
5. outputs are machine-readable;
6. sensitivity results are reproducible;
7. synthetic status remains visible.

## Relationship to empirical validation

Synthetic experiments support algorithmic verification and sensitivity analysis. They do not replace field validation.
