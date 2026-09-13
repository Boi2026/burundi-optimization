# Phase 15 — Supply/Demand Evidence Acquisition Plan

**Project:** Agricultural Supply Network Optimization in Burundi  
**Execution date:** 2026-09-12

## Evidence source locked

FAOSTAT's **Crop production, yield, harvested area (Global, National - Annual)** dataset is suitable for the national production layer. The current metadata states time coverage 1961–2024, production in tonnes, harvested area in hectares and yield in hg/ha; the latest metadata revision is dated 2025-12-15. FAO states that source data can derive from official country statistics, estimates or, where necessary, imputation, and that records are flagged accordingly.

Official source: https://data.fao.org/catalog/iso/d24a448b-3b62-4c09-8c1d-4a39bb599876

## Evidence interpretation

FAOSTAT production is **national annual production evidence**, not automatically market-level supply.

It may therefore be used to constrain or benchmark the production layer, but it must not be redistributed across individual markets without an explicit, documented allocation rule.

## Demand evidence

FAOSTAT also exposes Food Balances / Supply Utilization Accounts and food-availability indicators. These are potential sources for national demand/availability proxies, but they do not automatically represent observed market-level demand. The exact series and definitions must be recorded before use.

## Required extraction schema

observation_id, geography, geography_level, product, year_or_period, metric_type, quantity, unit, source_type, source_name, dataset_revision, access_date, evidence_reference, flag, notes, matching_status, qa_status

## Matching rules

1. Never convert national production directly into market-level supply without a stated allocation model.
2. Preserve FAO flags indicating reported, estimated or imputed values.
3. Keep forecasts separate from observations.
4. Keep different reference years separate unless a temporal harmonization rule is documented.
5. Preserve original units and document every conversion.
6. Missing subnational evidence remains missing.

## Current gate

**National production evidence: UNLOCKED**

**Market-level supply evidence: PARTIAL**

**Demand evidence: SOURCE IDENTIFIED; EXTRACTION/DEFINITION REQUIRED**

**Full empirical validation: NOT PASSED**

## Next execution gate

Extract the Burundi records for the Project-1 commodity set, freeze the dataset revision and access date, then identify the exact Food Balance/Supply Utilization series to use as a bounded national demand/availability proxy. Only after those records pass QA should they enter the model validation sample.
