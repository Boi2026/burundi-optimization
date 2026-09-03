# Phase 14 Data Dictionary

## Core identifiers
- `observation_id`: unique record identifier.
- `origin_market`, `destination_market`: BOI market names.
- `market`: market where a supply, demand or price observation is recorded.
- `commodity`: one of the ten modeled products.

## Freight
- `payload_tonnes`: payload transported in tonnes.
- `freight_cost_bif`: observed freight charge in BIF.
- `total_trip_distance_km`: observed or documented route distance.
- `fuel_price_bif_per_litre`: fuel price at observation time.

## Quantities
- `available_supply_quantity`: available quantity during the stated period.
- `observed_demand_quantity`: observed demand/sales quantity.
- `conversion_to_tonnes`: conversion factor to tonnes.

## Road
- `road_condition`: observed physical condition.
- `passability`: passable/limited/closed or a documented equivalent.
- `closure_or_delay`: disruption information.
- `travel_time_hours`: observed travel time.

## Prices
- `price_bif`: observed transaction or market price in BIF.
- `unit`: kg, tonne, bag, litre, etc.
- `quality_grade`: quality/grade information where relevant.

## Provenance
- `source_type`: interview, administrative record, market survey, transporter quote, field observation, etc.
- `source_reference`: traceable source identifier.
- `verification_status`: unverified, checked, independently verified, etc.
