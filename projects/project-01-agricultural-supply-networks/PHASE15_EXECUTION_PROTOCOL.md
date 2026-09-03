# Phase 15 — Execution Protocol

## A. Data ingestion
Import only observations with documented:
- date
- market/location
- product where applicable
- unit of measurement
- source
- observation or transaction value

## B. Entity matching
Match external markets to BOI market identifiers. Record unmatched observations rather than silently dropping them.

## C. Price validation
For each matched product-market-date observation:
- compare observed price with the model price reference;
- calculate absolute error;
- calculate percentage error where the denominator is valid;
- flag extreme discrepancies for review.

## D. Freight-cost calibration
Estimate observed BIF/tonne-km where sufficient origin, destination, load, freight cost and distance information exist.

Report:
- median
- mean
- interquartile range
- sample size
- dispersion
- sensitivity to fuel/road conditions.

## E. Accessibility validation
Compare observed travel/accessibility indicators with the analytical road-network measures.

## F. Recalibration
Use empirical observations to select or estimate transport-cost parameters. Re-run:
- route profitability
- robustness classification
- corridor prioritization
- multi-product allocation.

## G. Out-of-sample validation
Where sample size permits, separate calibration and validation observations. Never evaluate a model only on the observations used to fit its parameters.

## H. Reproducibility
Every recalibrated result must record:
- source data version
- parameter values
- transformation rules
- model version
- execution date
- output file name.
