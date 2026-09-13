# Phase 18 — Source Reconciliation

**Execution date:** 2026-09-13

## Purpose

Reconcile the newly frozen FAO/GIEWS benchmark with the authoritative FAOSTAT source definition before model integration.

## Important correction

The earlier frozen GIEWS file must be treated as a **reference benchmark**, not as a direct substitute for FAOSTAT QCL.

The official FAO/GIEWS archived table available for the Burundi country brief shows a 2024 forecast of approximately:
- maize: 280,000 t
- rice (paddy): 136,000 t
- sorghum: 25,000 t
- other cereals: 19,000 t
- total cereals: 460,000 t

The previously committed GIEWS CSV contains different maize/sorghum/total values. Therefore those conflicting values must **not** be used as validation evidence until corrected against the source table.

Source: https://www.fao.org/giews/countrybrief/country/BDI/pdf_archive/BDI_Archive.pdf

## Current FAOSTAT source

FAOSTAT QCL metadata identifies:
- revision: 2025-12-15
- coverage: 1961–2024
- production unit: tonnes
- harvested area: hectares
- yield: hg/ha

Source: https://data.fao.org/catalog/iso/d24a448b-3b62-4c09-8c1d-4a39bb599876

## Food-balance source

FAOSTAT Food Balances covers 2010–2023 and describes national supply and utilization, including production, imports, exports, feed, seed, processing, losses and food available for human consumption. Its metadata revision is 2025-10-16.

Source: https://data.fao.org/catalog/iso/2f264bb6-1238-459a-bf8b-0e2d0a16804a

## Gate decision

**Reference benchmark: BLOCKED pending correction.**

**FAOSTAT QCL production layer: SOURCE LOCKED, extraction still required.**

**Food-balance demand/availability layer: SOURCE LOCKED, extraction still required.**

**Model integration: BLOCKED.**

**Full empirical validation: NOT PASSED.**

## Integrity action

No conflicting GIEWS values are to be silently overwritten. The discrepancy is recorded explicitly so the research history remains auditable.
