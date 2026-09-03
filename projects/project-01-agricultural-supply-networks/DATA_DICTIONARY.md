# Phase 12 — Core Data Dictionary

| Field / concept | Meaning | Unit | Status |
|---|---|---|---|
| gross_price_gap_bif_kg | Destination price minus origin price | BIF/kg | Derived from observed price data |
| road_distance_km | Network road distance between markets | km | Derived from analytical road graph |
| break_even_transport_bif_ton_km | Price gap converted to maximum transport cost before gap is consumed | BIF/t-km | Derived |
| scenario_bif_tkm | Tested transport-cost assumption | BIF/t-km | Assumption/scenario |
| net_margin_bif_kg | Gross price gap minus scenario transport cost per kg | BIF/kg | Model-derived |
| scenarios_profitable | Number of tested transport scenarios with positive margin | count / 6 | Model-derived |
| robustness_share_pct | scenarios_profitable / 6 × 100 | % | Model-derived |
| priority_score | Composite corridor priority score | 0–100 | Model-derived |
| flow_unit | Normalized allocation quantity | analytical unit | Model-derived; not tonnes |
| capacity_utilization_pct | Flow relative to normalized corridor capacity | % | Model-derived |
| spatial_priority_score | Spatial screening composite | 0–100 | Model-derived |
| stress_score | Stress-test resilience score | 0–100 | Model-derived |
