# BOI Project 1 — Phase 16: Empirical Data Collection & Integration

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
