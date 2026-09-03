# Phase 12 — Research Validation & Reproducibility

## Final validation status
**PASS** — all validation checks pass after correcting the Phase 11 stress-test merge.

## Correction
The original Phase-11 stress table had 16,457 rows with missing spatial metadata. A versioned corrected table, `stress_test_all_corrected_v2.csv`, now contains complete spatial metadata for all 2,556 corridors across all 7 stress scenarios. Corridors with no positive Phase-10 normalized flow explicitly receive flow persistence = 0.

The original stress table is retained unchanged as an audit trail. Existing non-missing `stress_score` values equal the Phase-10 spatial priority score; therefore this field is documented as a carried spatial-priority score, not an independently calibrated stress-resilience metric.

## Core validation
- 66 checks
- 66 PASS
- 0 warnings
- 0 failures
- 72 routing-layer markets
- 10 agricultural products
- 24,724 route-product observations
- 2,556 corridors
- 6 canonical transport-cost scenarios in Phases 3–10
- 7 stress-test scenarios in Phase 11
