# Phase 12 — Issues to Resolve Before Publication

## Issue 01 — Phase 11 stress-test merge completeness — RESOLVED

The original `stress_test_all.csv` contained 17,892 rows (2,556 corridors × 7 stress scenarios), but 16,457 rows had missing spatial metadata because 2,351 corridors were absent from the earlier flow-persistence merge.

### Correction applied

`stress_test_all_corrected_v2.csv` was rebuilt by reconstructing the complete Phase-10 spatial score from canonical Phase-7 corridor priorities and Phase-8 cap-3 scenario flows, then joining that complete metadata to the original Phase-11 scenario metrics. Corridors with no positive Phase-10 normalized flow explicitly receive `flow_persistence_score = 0`.

The original `stress_test_all.csv` remains unchanged as an audit trail. Existing non-missing `stress_score` values were exactly equal to `spatial_priority_score`; the corrected file preserves this definition and documents that `stress_score` is a carried spatial-priority score, not an independently calibrated stress-resilience metric.

## Publication note

The data-quality merge issue is resolved. The stress-test analysis remains a sensitivity exercise based on the price-gap and normalized-flow framework, not observed agricultural shipments or observed corridor freight tariffs.
