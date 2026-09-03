BOI Project 1 — Phase 10: Spatial Scenario Analysis

Purpose
-------
Translate Phase 7 corridor priorities and Phase 8 multi-product normalized-flow results into a spatially explicit corridor screening layer.

Inputs
------
- Phase 7 corridor priority ranking
- Phase 8 cap-3 allocation across transport-cost scenarios: 500, 750, 811.331, 1000, 1250, 1500 BIF/t-km
- Phase 1 market coordinates

Method
------
Spatial priority score = 45% Phase-7 priority score + 25% flow persistence + 20% robustness/strong-or-better share + 10% product breadth.
Flow persistence = share of the six scenarios in which the corridor carries positive normalized flow.

Outputs
-------
- priority_corridors_spatial.csv — complete spatial corridor screening table
- priority_corridors_top50.csv — top 50 corridors
- priority_corridors_top50.geojson — top 50 as straight-line analytical connectors between market coordinates
- scenario_corridor_stability.csv — scenario-by-scenario corridor stability and utilization
- benchmark_flows_811.33_cap3.csv — selected benchmark flows at 811.33 BIF/t-km
- priority_market_nodes.csv — market coordinates used for spatial joins
- spatial_tier_summary.csv — counts and aggregate indicators by spatial tier
- spatial_summary.json — machine-readable execution summary

Important limitations
---------------------
1. Phase 8 flow units are normalized analytical units, not observed tonnes.
2. 811.33 BIF/t-km is a literature benchmark converted to BIF/t-km, not a current observed domestic agricultural freight tariff.
3. GeoJSON geometries are straight-line market connectors, not shortest-path road geometries. Road distances used in the optimization remain the Phase 2 network distances.
4. The spatial tier is a research-screening score, not an investment appraisal or policy recommendation.
