# Phase 16 Data Dictionary

| Field | Meaning | Example | Required |
|---|---|---|---|
| observation_id | Stable unique observation key | P16-000001 | Yes |
| observation_date | Date observed/reported | 2026-09-01 | Yes |
| source_name | Organization/person/source | Transporter interview | Yes |
| source_reference | Document/form/reference | INT-001 | Yes where available |
| location_raw | Original location label | Gitega | Yes |
| boi_market_id | Matched BOI market identifier | GITEGA | Where applicable |
| match_status | matched/unmatched/review | matched | Yes |
| product | BOI product label | maize | Where applicable |
| raw_value | Reported value before transformation | 25000 | Yes |
| standardized_value | Converted analytical value | 25000 | If transformed |
| unit | Measurement unit | BIF/kg | Yes |
| currency | Currency code | BIF | Where applicable |
| collection_method | Survey/admin/web/document | interview | Yes |
| quality_flag | pass/review/reject | pass | Yes |
| notes | Context/limitations | wet-season road | Optional |

Additional stream-specific fields are defined in the CSV templates.
