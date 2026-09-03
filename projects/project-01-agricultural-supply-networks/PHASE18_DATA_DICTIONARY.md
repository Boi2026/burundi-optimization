# Phase 18 Data Dictionary

## Common fields
- `observation_id`: unique immutable identifier.
- `observation_date`: date the observation occurred or was recorded.
- `source_type`: official, institutional, transaction, interview, field, secondary, etc.
- `source_name`: organization/provider/source.
- `evidence_reference`: document, record, interview code, or other traceable reference.
- `matching_status`: matched / unmatched / review.
- `qa_status`: pass / fail / review.

## Prices
`price_raw` retains the reported price; `unit_raw` retains the original unit. Standardization must occur only after unit interpretation is verified.

## Freight
`freight_amount_raw` and `load_quantity_raw` must retain original values and units. Do not convert to BIF/t-km without documented assumptions.

## Accessibility
Travel time must retain the original time unit and observation date. Seasonal restrictions must not be inferred when not observed.

## Supply/Demand
`metric_type` must distinguish the quantity concept (e.g. arrivals, sales, production, demand proxy). Definitions must accompany the source.

## Cost components
`cost_category` must identify the cost component. `quantity_basis` records what the amount is associated with.
