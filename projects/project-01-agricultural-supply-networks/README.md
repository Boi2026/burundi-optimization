# BOI Project 1 — Phase 12: Research Validation & Reproducibility

## Purpose
Audit the internal numerical consistency, structural integrity, traceability and publication readiness of the analytical chain from Phases 1–11.

## Validation result
The validation script rechecks core counts, formulas, scenario outputs, robustness classifications, corridor counts, spatial-tier totals, stress-test coverage and required-file presence.

See `VALIDATION_CHECKS.csv` for every check and `REPRODUCIBILITY_MANIFEST.csv` for file hashes.

## Canonical analytical scenarios
500, 750, 811.3311, 1000, 1250 and 1500 BIF/tonne-km.

## Reproducibility principles
1. Preserve source data separately from derived outputs.
2. Keep normalized flow units explicitly labeled as analytical units.
3. Treat 811.3311 BIF/t-km as a literature benchmark, not an observed tariff.
4. Preserve all scenario assumptions and formula definitions.
5. Distinguish empirical observations from model-generated screening and optimization outputs.
6. Before publication, add observed freight tariffs, supply/demand quantities, vehicle capacities, road-condition/seasonal accessibility and field validation.

## Publication readiness
The project is suitable for a **research working paper / analytical framework** presentation with explicit limitations. It is not yet suitable for claims of observed trade flows, realized arbitrage, causal price transmission, investment returns, or calibrated logistics optimization.
