# Phase 32 — Exact Market/Product/Corridor Matching

Date: 2026-09-13

## New externally verified evidence

1. NCBIP reports repeated Gatumba maize purchase/selling observations, including 2026-08-27 at BIF 4,000/kg selling and BIF 3,500/kg purchase. This establishes a repeated market-level gross spread of BIF 500/kg at Gatumba. Source: Northern Corridor Business Information Portal, Market Analysis.
2. Burundi introduced a maize minimum purchase price of BIF 1,700/kg in May 2026. This is a policy floor, not a transaction observation and not a farmgate observation for every producer.
3. A current food-security assessment reports that fuel shortages and high transport costs are increasing food transportation costs in Burundi.
4. Kayanza-to-Gatumba geographic distance sources disagree materially: one source reports about 62 km straight-line distance, while route-oriented sources report substantially longer road distances. Therefore no single distance is promoted to a calibrated corridor distance without a route-specific source.

## Exact-match gate

Gatumba + maize is an exact market/product match for a destination-market gross-spread observation.

It is NOT yet an exact origin-destination net-margin match because:
- origin/farmgate location is absent;
- transaction quantity is absent;
- transport charge for the same observation is absent;
- loading/unloading/fees/spoilage are absent.

Therefore the BIF 500/kg spread is admitted as a MARKET_SPREAD observation, not a candidate NET_MARGIN coefficient.

## New policy constraint

The 2026 maize minimum purchase price of BIF 1,700/kg can be used as a policy-floor scenario for maize procurement, but it must not be treated as an observed price. The model should maintain separate evidence classes:
- observed market quote;
- policy floor;
- secondary benchmark;
- synthetic assumption.

## Phase 32 decision

Exact market/product matching: PASS for Gatumba maize.
Exact corridor net-margin matching: NOT PASSED.
Empirical candidate margin construction: NOT PASSED.
Policy-floor scenario: ADMISSIBLE as a separate scenario.
Full empirical validation: NOT PASSED.

## Next decisive dataset

For Gatumba maize, obtain at least one observation linking:
origin -> quantity -> purchase price -> transport payment -> destination sale price.

With repeated observations of this form, a defensible route-level gross/net margin can be constructed without borrowing assumptions from unrelated corridors.
