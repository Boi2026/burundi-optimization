# Phase 16 — Empirical Data Collection & Integration

## Purpose
Phase 16 operationalizes the empirical-validation framework established in Phases 14–15. It defines the controlled intake, documentation, matching, quality control, and versioning of real-world observations needed before BOI transport parameters and corridor results can be recalibrated.

## Scientific status
**Data-collection ready — not empirically validated.**

No synthetic observations are included. Empty templates are intentional. Model recalibration must wait for documented observations.

## Data streams
1. Transaction/market prices
2. Freight tariffs and observed transport costs
3. Road accessibility / travel observations
4. Supply and demand quantities
5. Cost components (fuel, tolls, loading, unloading, other logistics costs)

## Required provenance
Every observation should retain source, collection date, geographic reference, unit, method, and source document/reference where available.

## Workflow
1. Collect observations using the templates.
2. Preserve the raw source and assign a unique `observation_id`.
3. Standardize units without overwriting the raw value.
4. Match markets to BOI identifiers; retain unmatched records in a review queue.
5. Run schema and range checks.
6. Freeze a versioned empirical dataset.
7. Pass the validated dataset to Phase 15 calibration and out-of-sample validation.

## Minimum evidence standard
Do not infer current transport tariffs from price gaps. Do not convert normalized optimization units into tonnes. Do not report empirical validation until observations have been independently documented and quality-checked.

## 1. Observation identity
Each row receives a stable `observation_id`. Do not reuse IDs after deletion; mark records as invalid instead.

## 2. Required fields
At minimum: observation date, source, geography, variable/value, unit, and collection method. Product, origin, destination, and load fields are required where relevant.

## 3. Raw vs standardized values
Keep the reported value in `raw_value` and store any transformed value separately. Record the transformation rule and conversion factor.

## 4. Geographic matching
Use BOI market identifiers where possible. If an external location cannot be confidently matched, set `match_status=unmatched` and retain the record for manual review.

## 5. Freight observations
For a usable freight-cost observation, collect origin, destination, load tonnes, freight cost, currency, distance basis, and date. Calculate BIF/tonne-km only when the denominator is valid.

## 6. Price observations
Record product, market, date, price, unit, currency, and whether the observation is retail, wholesale, farm-gate, or transaction-level.

## 7. Accessibility observations
Record observed travel time, route, date, vehicle/mode, and road-condition context where available. Do not treat straight-line distance as observed travel distance.

## 8. Quality control
Flag missing units, impossible values, duplicate IDs, inconsistent currencies, negative quantities, zero/invalid distances, and unmatched markets.

## 9. Versioning
Each released dataset must have a version identifier and a manifest containing row count, date range, source inventory, transformations, and QA status.

## 10. Handoff to Phase 15
Only records passing Phase 16 QA should enter calibration. Keep a separate validation sample when sample size permits. Calibration and validation observations must not be silently mixed.
