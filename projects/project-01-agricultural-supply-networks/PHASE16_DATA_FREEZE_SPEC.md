# Phase 16 — Data Freeze & Extraction Specification

**Execution date:** 2026-09-13

## Objective
Create a reproducible, auditable evidence layer from authoritative FAOSTAT sources without fabricating market-level observations.

## Primary production source
FAOSTAT — Crop production, yield, harvested area (Global, National - Annual).

Current metadata: revision 2025-12-15; coverage 1961–2024; production [t], harvested area [ha], yield [hg/ha]. FAOSTAT states that source data primarily come from official country statistics but may also include estimates based on expert observations. Each observation must preserve its source/flag information where supplied.

Source: https://data.fao.org/catalog/iso/d24a448b-3b62-4c09-8c1d-4a39bb599876

## Demand/availability source candidates
FAOSTAT Food Balances and Supply Utilization Accounts are national reference-period accounts describing food supply and utilization. They are appropriate candidates for national demand/availability proxies, not direct market-level demand observations.

FAOSTAT currently lists Food Balances (2010-), Supply Utilization Accounts (2010-), Availability based on supply utilization accounts, and apparent intake datasets. The exact series selected must be recorded before extraction.

Source portal: https://www.fao.org/faostat/en/

## Frozen extraction fields
observation_id, area, area_code, geography_level, item, item_code, element, year, value, unit, flag, source_dataset, dataset_revision, access_date, source_url, notes

## Required extraction scope
- Area: Burundi
- Project commodities: only commodities already defined in Project 1
- Production elements: production, harvested area and yield where applicable
- Years: use the validation period defined by Project 1; do not silently mix years

## QA gates
1. Area must equal Burundi.
2. Item must map to a Project-1 commodity through an explicit mapping table.
3. Year must be within the declared validation period.
4. Units must match the element definition.
5. Duplicate area-item-year-element records must be resolved using documented FAOSTAT keys/versioning.
6. Flags must be retained.
7. No national value may be copied into a market node without an explicit allocation model.
8. No missing observation may be filled with an invented value.

## Current status
**Source locked: PASS**
**Extraction executed: PENDING**
**QA: PENDING**
**Model integration: BLOCKED until extraction and QA pass**
**Full empirical validation: NOT PASSED**
