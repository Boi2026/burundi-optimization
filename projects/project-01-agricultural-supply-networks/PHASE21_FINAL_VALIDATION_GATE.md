# Phase 21 — Final Validation Gate

## Status
**BLOCKED — upstream empirical freeze not satisfied.**

### Executed checks
1. Price-stream QA: PASS (219 records; 216 matched; 3 review).
2. Freight evidence: PARTIAL.
3. Road accessibility: source identified; route-level integrated observations not yet available.
4. Supply/demand: source identified; matched node-product quantities not yet available.
5. Cost components: source identified; route-level decomposition not yet available.
6. Transport calibration: completed on 38 verified road-distance observations; central coefficient ≈79 BIF/km.
7. Outlier sensitivity: Musenyi retained; exclusion changes the slope negligibly.
8. Five unresolved road endpoints remain missing and are not imputed.

## Freeze rule
No final empirical validation or publication freeze is authorized until Phase 19 multi-stream evidence passes QA and is frozen.

## Sources
- World Bank Burundi Roads dataset: https://datacatalog.worldbank.org/search/dataset/0040699/burundi-roads
- World Bank Burundi RTFP: https://microdata.worldbank.org/catalog/4486/variable/BDI_2021_RTFP_MKT/V005?name=mkt_name
- INSBU agricultural modules: https://www.insbu.bi/rapportModulesAgricoles
- Burundi Eco freight evidence: https://burundi-eco.com/quand-la-penurie-du-carburant-handicape-le-transport-des-marchandises/

## Next executable gates
- Extract the World Bank road shapefile and document network-distance derivation.
- Integrate RGPHAE node/product supply quantities.
- Add route-level freight and cost-component observations.
- Re-run Phase 19 QA and freeze.
- Re-run Phase 20 calibration.
- Run Phase 21 out-of-sample/robustness validation.
