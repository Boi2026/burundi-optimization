# Phase 25 — Empirical Validation Execution Report

**Execution date:** 2026-09-13

## Objective

Replace synthetic assumptions with externally sourced empirical evidence wherever evidence is actually available, and quantify the remaining evidence gaps.

## Evidence executed

### 1. Market prices — PARTIAL PASS

The project contains six August 2026 Burundi market-price observations from the World Bank Real Time Food Prices dataset:
- Bandaga: beans, 2,563.76 BIF/kg
- Biyorwa: beans, 2,176.89 BIF/kg
- Biyorwa: beans, 2,120.07 BIF/kg
- Wimpfizi: beans, 2,135.06 BIF/kg
- Wimpfizi: maize, 1,301.50 BIF/kg
- Wimpfizi: rice, 5,348.14 BIF/kg

Important: these are institutional/modelled monthly price estimates, not transaction-level observations.

The World Bank source currently covers 74 Burundi markets and 2007–2026, with market/commodity price estimates and 95 variables.

### 2. Freight — PARTIAL PASS

Two empirical freight records exist:
- OECD Burundi DTIS 2012: farmers commonly reported transport costs of 1,000–5,000 FBU to market, but route, payload and vehicle are absent. Contextual only.
- Burundi Eco 2024: 60,000 BIF for 200 kg of maize from Kayanza to Bujumbura during a fuel shortage. The project derives 2,884.6 BIF/tonne-km using an externally reported ~104 km route distance. The distance is not part of the original freight observation.

The second observation is a real-world freight-cost anchor but is not sufficient to calibrate the whole network.

### 3. National agricultural production — PASS FOR NATIONAL BENCHMARK

FAOSTAT provides official agricultural production statistics. The project also contains a FAO/GIEWS reference layer.

This validates national-scale production context, but not market-level supply allocation.

### 4. Market availability — CONTEXT PASS

WFP reports monitoring of 85 Burundi markets and reported in March 2023 that more than 5 tonnes of food were available in 15% of monitored markets for beans and rice and 25% for maize. This is useful empirical evidence of heterogeneous market availability, but it is not a complete market-by-product quantity dataset.

### 5. Supply/demand quantities — FAIL / MISSING

EMPIRICAL_SUPPLY_DEMAND_COLLECTION.csv currently contains no observations.

Therefore no market-level supply/demand calibration is authorized.

### 6. Road accessibility — FAIL / MISSING

EMPIRICAL_ACCESSIBILITY_COLLECTION.csv currently contains no observations.

Therefore no empirical road-condition or travel-time calibration is authorized.

### 7. Cost decomposition — FAIL / MISSING

EMPIRICAL_COST_COMPONENT_COLLECTION.csv currently contains no observations.

Therefore loading, unloading, taxes, handling, spoilage and other cost components cannot be empirically calibrated.

## Model confrontation

The project's earlier illustrative transport-cost range of 500–1,500 BIF/tonne-km is confronted by the Kayanza–Bujumbura maize freight observation, which implies approximately 2,884.6 BIF/tonne-km under the project's external-distance calculation.

This is an empirical warning, not a reason to force the model to agree. The existing transport-cost assumptions therefore must not be described as empirically calibrated.

## Validation verdict

| Validation component | Result |
|---|---|
| Public market-price evidence | PARTIAL PASS |
| Empirical freight evidence | PARTIAL PASS |
| National production benchmark | PASS |
| Market availability context | PASS |
| Market-level supply/demand | FAIL |
| Road accessibility | FAIL |
| Cost decomposition | FAIL |
| Full empirical calibration | NOT PASSED |
| Synthetic experiment | PASS |
| Computational proof-of-concept | PASS |

## Required final empirical gate

The full empirical gate can only be marked PASS after obtaining:
1. market-level supply or sales/demand observations;
2. observed route-level freight observations for multiple corridors/products;
3. road accessibility/travel-time observations;
4. transaction or verified market prices across the modeled network;
5. sufficient repeated observations to estimate uncertainty.

## Integrity rule

No missing empirical observations are fabricated. Synthetic values remain in a separate experimental layer.

## Practical conclusion

Project 1 now has a mixed-evidence validation architecture:
public empirical evidence + national benchmarks + controlled synthetic experiments.

The empirical workstream is active, but a claim of full field validation would currently be false.
