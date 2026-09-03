# Phase 18 — Empirical Data Acquisition Protocol

## A. Acquisition priority

### Priority 1 — Price observations
Collect market/product/date observations for the 10 BOI products:
bananas, beans, cassava flour, maize, maize flour, goat meat, onions, potatoes, rice, tomatoes.

Target: multiple observations per product across selected BOI markets and dates.

### Priority 2 — Freight observations
Collect origin-destination freight evidence with:
- origin
- destination
- product
- load quantity
- quoted/paid freight
- currency
- date
- vehicle/load type
- included services
- source.

### Priority 3 — Accessibility
Collect observed travel time, road condition, seasonal interruption, or reliable route-time evidence for sampled corridors.

### Priority 4 — Supply/demand
Collect observed traded quantities, arrivals, sales volumes, production/market supply, or demand proxies with clear definitions.

### Priority 5 — Cost components
Collect fuel, tolls, loading/unloading, handling, storage and other documented transport-related costs.

## B. Sampling strategy

Use stratified sampling rather than convenience-only sampling.

Strata:
- BOI priority tier (A/B/C/D)
- geographic region/province
- product
- corridor distance band
- season/month.

The first field/data acquisition round should deliberately include both high-priority BOI corridors and lower-priority comparison corridors.

## C. Evidence hierarchy

1. Official administrative/statistical records
2. Documented market bulletins or institutional datasets
3. Verifiable transaction/invoice/waybill evidence
4. Structured interviews with documented respondent role and date
5. Structured field observations
6. Secondary sources with transparent methodology

Lower-tier evidence can be used for exploratory validation but should be flagged.

## D. Intake rule

No observation enters the frozen empirical dataset until:
- identity is unique,
- source is documented,
- units are explicit,
- date/geography are present,
- BOI entity matching is completed,
- plausibility checks pass,
- unresolved observations are separated into the unmatched queue.

## E. Stopping rule

Do not stop collection merely because the model produces plausible results.

Freeze only after the sampling framework has adequate coverage across products, markets/corridors and relevant time periods, with all coverage gaps explicitly documented.
