# Phase 16 — World Bank RTFP Integration

## Execution
The uploaded World Bank Burundi RTFP file BDI_RTFP_mkt_2007_2026-08-24.csv was processed.

### Extraction
- Source rows: 17,700
- Coverage used: January 2025 through August 2026
- Products: beans, maize, rice
- Extracted price observations: 4,380
- August 2026 snapshot: 219 observations
- BOI market matching: 216 matched, 3 review
- Review records correspond to the source market name Biyogwa, which does not exactly match the BOI priority node Biyorwa.

## Provenance
Source: World Bank Real Time Food Prices (RTFP), Burundi, version 2026-08-24.
Provider: World Bank / Bo Pieter Johannes Andrée.
Source file: BDI_RTFP_mkt_2007_2026-08-24.csv.

## Interpretation
These are monthly food price estimates, not direct transaction records. The World Bank metadata describes the RTFP variables as estimates; therefore this dataset is suitable as an external price benchmark and pipeline input, but it must not be represented as direct field observations.

The full August 2026 transformed CSV is retained in the BOI working file library. The repository collection table contains a verified audit sample pending the next bulk-data commit.

## Validation gate
Phase 19 empirical freeze remains BLOCKED. The World Bank price benchmark does not by itself provide freight tariffs, observed transport costs, accessibility observations, or supply/demand quantities. It also must not be used to infer transport tariffs from price gaps.
