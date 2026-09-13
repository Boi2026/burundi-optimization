# Phase 19 — Empirical Acquisition Execution (September 2026)

## Decision
**PARTIAL ACQUISITION COMPLETE — EMPIRICAL FREEZE REMAINS BLOCKED**

This execution added and verified external source pathways without fabricating observations.

## Evidence streams

### 1. Market prices — AVAILABLE
The World Bank Real Time Food Prices dataset for Burundi covers 74 markets and monthly estimates from 2007 through August 2026. It includes beans, maize, rice and other food commodities. The repository already contains a small set of extracted August 2026 observations from this source.

Source: https://microdata.worldbank.org/index.php/catalog/4486/data-dictionary/BDI_2021_RTFP_MKT

### 2. Freight / transport — PARTIAL
A documented Burundi Eco observation reports 60,000 BIF to transport 200 kg of maize from Kayanza to Bujumbura during a fuel shortage. The repository already records this as a freight observation and correctly treats the externally reported 104 km route distance as metadata rather than part of the original observation.

A separate INSBU publication provides December 2024 domestic passenger transport tariffs for numerous Bujumbura routes, including Buraza, Gitega, Kayanza, Kiremba Sud, Kivuruga, Masanganzira, Musenyi, Nyeshenza and others. These are **passenger tariffs**, not agricultural freight tariffs, and must not be silently substituted for freight observations.

Sources:
- https://burundi-eco.com/quand-la-penurie-du-carburant-handicape-le-transport-des-marchandises/
- https://api.insbu.bi/storage/documents/01KRXTD00HD7QH9TWKPF45K76J.pdf

### 3. Road accessibility — SOURCE IDENTIFIED, OBSERVATIONS NOT YET INTEGRATED
The World Bank Burundi Roads dataset contains road type, condition and traffic-volume data compiled for the AICD study with input from the Office des Routes. It is suitable for a road-network/accessibility acquisition step, but no route-level travel-time observations have been inserted into the empirical collection file in this execution.

Source: https://datacatalog.worldbank.org/search/dataset/0040699/burundi-roads

### 4. Supply / agricultural structure — PARTIAL PROXY ONLY
INSBU RGPHAE 2024 reports 2,335,995 agricultural households nationally and publishes detailed agricultural modules. The current retrieved evidence supports agricultural-household and crop-practice indicators, but not a directly matched market-node/product quantity series suitable for the project's supply-demand collection schema.

Source:
https://www.insbu.bi/resultatRGPHAE2024

### 5. Agricultural production context — AVAILABLE AS CONTEXT, NOT YET NODE-LEVEL SUPPLY
FAO GIEWS reports 2025 aggregate cereal production of about 789,000 tonnes and provides seasonal production context. This is national production evidence and should not be converted into market-node supply without an explicit allocation methodology.

Source:
https://www.fao.org/giews/countrybrief/country.jsp?code=BDI

### 6. Cost components — SOURCE PATHS IDENTIFIED, NO CLEAN ROUTE-LEVEL OBSERVATION SET
Fuel scarcity and fuel-price effects on transport costs are documented by Burundi Eco. However, the current evidence does not provide a complete route-level decomposition into fuel, toll, loading, unloading and other components required by the Phase 19 schema.

## Anti-fabrication decision
No straight-line distance, airport distance, same-name locality distance, passenger tariff, national production total or agricultural-household count has been converted into a missing freight/accessibility/supply observation.

## Current gate
- Price stream: PARTIAL / usable observations present
- Freight stream: PARTIAL
- Accessibility stream: BLOCKED for integrated route observations
- Supply/demand stream: BLOCKED for matched quantities
- Cost-component stream: BLOCKED for route-level decomposition
- Empirical freeze: **BLOCKED**
- Phase 20 transport benchmark: **~79 BIF/km**
- Final empirical validation: **NOT AUTHORIZED**

## Required next acquisition
1. Extract route geometry/road attributes from the World Bank Burundi Roads shapefile.
2. Acquire route-level travel times or derive reproducible network distances from the road graph, with the derivation explicitly labelled as model-derived rather than observed.
3. Obtain node/product supply quantities from the RGPHAE agricultural tables or another traceable dataset.
4. Obtain additional route-level freight observations.
5. Obtain fuel/loading/unloading/toll components where available.
6. Re-run Phase 19 matching, QA and freeze.
7. Only then rerun Phase 20 and Phase 21.
