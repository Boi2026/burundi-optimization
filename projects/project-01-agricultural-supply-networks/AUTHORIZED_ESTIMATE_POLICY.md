# Authorized Estimate Policy — Phase 19–22

The user explicitly authorized logical estimates to unblock scenario phases.

## Estimation policy
- Observed data retain their original provenance.
- Estimated quantities are marked `MODEL_ESTIMATE`.
- Supply and demand are normalized scenario quantities, not claimed agricultural measurements.
- Route cost uses the project transport benchmark of 77.74 BIF/km and observed/estimated road distance.
- Scenario capacity is set to 3 normalized units per candidate corridor.
- A 20-corridor high-confidence subset from the existing benchmark-flow table is used for the executable scenario optimization.
- No scenario result is presented as a 2026 empirical observation.

## Scenario formulas
For corridor i→j:
- distance = existing benchmark road distance
- unit transport cost = 77.74 × distance BIF per normalized tonne
- estimated supply = 3 normalized units at each origin-product pair
- estimated demand = 3 normalized units at each destination-product pair
- corridor capacity = 3 normalized units

The optimization minimizes total transport cost subject to supply, demand, non-negativity and corridor-capacity constraints.
