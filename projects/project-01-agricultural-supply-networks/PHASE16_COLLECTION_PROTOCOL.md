# Phase 16 — Empirical Data Collection Protocol

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
