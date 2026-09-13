# Phase 28 — Empirical Recalibration Audit

Date: 2026-09-13

## Objective

Recalibrate Project 1 using the empirical evidence currently available, while preserving the distinction between direct/observed evidence, institutional estimates, secondary benchmarks, and synthetic assumptions.

## Evidence incorporated

### Market prices

The current empirical collection contains six explicitly recorded August 2026 World Bank RTFP observations:

- Beans: 4 observations, 2,120.07–2,563.76 BIF/kg; sample mean 2,248.945 BIF/kg.
- Maize: 1 observation, 1,301.50 BIF/kg.
- Rice: 1 observation, 5,348.14 BIF/kg.

These observations are classified as institutional estimates rather than direct transaction observations. They are therefore usable for empirical price calibration/sensitivity, but not as transaction-level validation.

Source: World Bank Real Time Food Prices dataset, as recorded in EMPIRICAL_PRICE_COLLECTION.csv.

### Freight

One route-specific freight observation is currently available:

- Kayanza → Bujumbura
- maize
- 200 kg
- 60,000 BIF
- Probox / road transport
- 2024
- observed payment during a fuel shortage

Using the externally reported route metadata of approximately 104 km, the derived rate is:

60,000 / 0.2 tonnes / 104 km = 2,884.6 BIF/tonne-km.

This must NOT be used as the unconditional central transport-cost parameter. The source explicitly describes a fuel-shortage shock and the vehicle reportedly failed because of fuel scarcity. It is therefore classified as a shock-state empirical observation.

Source: Burundi Eco, as recorded in EMPIRICAL_FREIGHT_COLLECTION.csv.

### Transport-cost benchmark

A World Bank/EAC corridor spatial-analysis source provides historical Burundi vehicle operating cost benchmarks by road surface and road hierarchy. Reported Burundi values range approximately from 0.0545 USD/tonne-km for good asphalt primary roads to 0.1059 USD/tonne-km for earth tertiary roads, with corresponding travel speeds varying strongly by road condition.

These values are treated as secondary historical benchmarks, not current transaction observations. They constrain plausible transport-cost ranges but do not justify replacing the model's BIF parameters without an explicit and documented FX/time normalization step.

### Accessibility

The empirical accessibility collection remains empty. Therefore no current route-level travel-time calibration is authorized from that table.

External route planners can provide present-day route estimates, but these are not equivalent to repeated agricultural-freight travel observations and should remain contextual metadata unless independently sampled.

## Calibration decision

| Parameter block | Status | Calibration action |
|---|---|---|
| Market prices | EMPIRICALLY CONSTRAINED | Use observed/estimated market prices for price sensitivity and calibration where market-product matching is valid |
| Freight | EMPIRICALLY CONSTRAINED | Retain Kayanza-Bujumbura as a shock observation; do not generalize it |
| Vehicle operating cost | SECONDARY BENCHMARK | Use as bounded prior/reference only |
| Travel time | NOT CALIBRATED | No route-level empirical collection currently present |
| Handling/loading/unloading | NOT CALIBRATED | No observations |
| Market quantities traded | NOT CALIBRATED | No transaction-volume observations |
| Supply/demand by market | NOT CALIBRATED | No empirical market-level quantities |
| Full transaction validation | NOT PASSED | Insufficient repeated observations |

## Solver gate

A reproducible numerical solver implementation is not present in the public Project 1 repository files inspected during this execution. The repository contains optimized scenario outputs and analytical records, but no discoverable executable optimization source that can be rerun against the newly calibrated parameter table.

Therefore Phase 28 does NOT claim to have produced a new solver optimum.

The existing authorized scenario remains:

- 20 corridors
- 4 products
- 60 normalized supply units
- 60 normalized demand units
- optimized transport cost: 264,170.36 BIF
- optimized margin proxy: 358,459.97 BIF
- LP status: OPTIMAL
- empirical status: SCENARIO_ONLY

That result must remain labelled scenario-only until the calibrated inputs are passed through a reproducible solver.

## Required next execution

1. Obtain/restore the executable solver or a fully reproducible notebook/script.
2. Expand price coverage from the current six recorded observations to the full usable World Bank/WFP market-product panel.
3. Add route-specific freight observations across multiple corridors and products.
4. Populate repeated travel-time observations by route and season.
5. Add handling/loading/unloading observations.
6. Define a transparent FX normalization rule before combining USD/t-km historical benchmarks with BIF observations.
7. Run the same optimization model on:
   - synthetic baseline;
   - empirically calibrated parameters;
   - stress scenarios.
8. Compare objective value, corridor ranking, product allocation, and market allocation.
9. Reserve an out-of-sample subset for validation.

## Scientific verdict

Phase 28 strengthens empirical grounding but does not pass the full empirical-validation gate.

The correct status is:

**ANALYTICALLY REPRODUCIBLE / EMPIRICALLY CONSTRAINED / FULL EMPIRICAL VALIDATION NOT PASSED / SOLVER RECALIBRATION BLOCKED BY MISSING EXECUTABLE SOLVER**

This is a deliberate evidence-preserving result, not a failure of the research process.
