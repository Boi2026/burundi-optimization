# Phase 13 QA Report

## Status
**23 PASS / 0 FAIL — PASS**

## Scope
Independent package-integrity, quantitative-consistency, and manuscript-guardrail checks were run on the Phase 13 publication package.

## Checks performed
- SHA-256 and byte-size verification against `PHASE13_MANIFEST.csv`.
- Robustness-class counts reconcile to 24,724 route-product observations.
- Spatial tier counts reconcile to 2,556 corridors.
- Transport-cost candidate counts are monotonic as cost increases.
- Cap-3 normalized flow units reconcile to selected arcs.
- Core quantitative tables contain no missing values.
- Manuscript contains explicit restrictions against interpreting normalized units as tonnes/shipments, the benchmark as a current tariff, or screening as proof of arbitrage/causality.

## Scientific disposition
The package is internally consistent and suitable for **external review**, not yet for claims of empirical validation or peer-reviewed publication. The external-validation checklist remains open for observed freight tariffs, supply/demand quantities, road conditions, transaction prices, and field validation.

## Output
`PHASE13_QA_CHECKS.csv` contains the machine-readable check results.
