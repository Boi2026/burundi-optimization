# Phase 19 Data Dictionary

## Identity and provenance
- `observation_id`: immutable unique observation identifier.
- `source_id`: source/provider identifier.
- `source_type`: official, institutional, transaction, interview, field, secondary, etc.
- `evidence_reference`: traceable supporting record.
- `observation_date`: date of observation.
- `ingestion_date`: date received by BOI.

## Raw fields
Raw values and original units must be preserved exactly as received, subject only to safe character encoding.

## Standardized fields
Standardized values are derived fields. Their transformation rule must be documented.

## Matching
- `market_match_status`
- `product_match_status`
- `corridor_match_status`

Allowed states: `matched`, `review`, `unmatched`.

## QA
`qa_status`: `pass`, `review`, `fail`.

## Freeze
`dataset_version`, `freeze_date`, `freeze_status`.
