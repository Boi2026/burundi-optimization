# Authorized Estimation Execution — Phases 19–22 Scenario Run

Date: 2026-09-12

## User authorization
The user explicitly authorized logical estimates for missing observations. Therefore five missing road distances were filled for **scenario analysis only**, with a mandatory MODEL_ESTIMATE flag.

## Estimated distances
- Buraza: 162.2 km
- Kirembasud: 129.0 km
- Kivuruga: 137.7 km
- Masanganzira: 149.9 km
- Nyeshenza: 83.8 km

### Estimation method
Four estimates are derived from the empirical relationship between the project's observed Bujumbura route tariffs and observed road distances, using the non-Musenyi/non-Muzinda reference set. Kirembasud is anchored at 129.0 km using a published Bujumbura–Kiremba (Bururi) road-distance result; because the exact tariff endpoint is Kiremba Sud, this remains an estimate, not a verified observation.

The estimate is explicitly labelled and must never be merged into the empirical-observation column without the flag.

## Scenario calibration
Using all 43 corridors:
- OLS slope: 77.736 BIF/km
- OLS intercept: 1,667.028 BIF
- OLS R²: 0.8984
- Origin-constrained slope: 90.344 BIF/km
- Origin-constrained R²: 0.8681
- Existing central benchmark: 79 BIF/km

## Interpretation
The authorized estimates do not materially destroy the observed relationship: the unconstrained OLS slope remains close to the 79 BIF/km benchmark and R² improves relative to the 38-route observed-only fit.

However, this is **scenario calibration, not empirical validation**.

## Phase gates
15 PASS
16 PASS
17 PASS
18 PASS
19 CONDITIONAL — scenario estimates allowed; empirical freeze still requires observed evidence.
20 PASS — SCENARIO
21 CONDITIONAL — robustness/scenario validation may be run; cannot be labelled empirical out-of-sample validation.
22 BLOCKED for an empirical-validation claim.

## Integrity rule
Estimated values must remain separately identified from observed/verified values. No publication table may present an estimate as an observed fact.

## Next execution
Run scenario robustness (±10%, ±20% on estimated distances), compare coefficient stability, then integrate the estimated scenario into the optimization model while preserving the observed-only baseline.
