# Phase 37 — Executed Sensitivity Run

Date: 2026-09-13

## Input actually executed

Repository benchmark:
projects/project-01-agricultural-supply-networks/benchmark_flows_811.33_cap3.csv

Rows read: 348
Distinct corridor keys: 269
Capacity: 3 normalized flow units per corridor
Objective coefficient: normalized_margin_contribution_bif

The Phase 29 MILP structure is equivalent here to selecting up to three positive candidates per corridor. The benchmark contains at most three positive candidates in the relevant corridors, so the baseline selects all 348 positive candidates.

## Results

| Scenario | Objective (BIF) | Selected | Delta vs S0 |
|---|---:|---:|---:|
| S0 Baseline | 440,342.9319 | 348 | 0 |
| S2 Global maize +500 BIF/kg sensitivity | 457,842.9319 | 348 | +17,500.0000 |
| S3 Global maize -300 BIF/kg transport-shock sensitivity | 432,179.1259 | 330 | -8,163.8061 |
| S4 Global maize +115.5 BIF/kg historical-storage sensitivity | 444,385.4319 | 348 | +4,042.5000 |

S1 (1,700 BIF/kg procurement floor) was NOT converted into an objective coefficient because a price floor alone does not reconstruct a candidate's net margin.

## Important interpretation

S2, S3 and S4 are deliberately labeled GLOBAL SENSITIVITY overlays. They are NOT empirical calibration.

- S2 adds the Gatumba observed maize market spread of 500 BIF/kg to every maize candidate only as a mathematical stress/sensitivity test. It must not be interpreted as saying every corridor earns a 500 BIF/kg spread.
- S3 subtracts 300 BIF/kg from every maize candidate as a uniform transport-shock stress test. It is not a claim that every maize corridor incurred the documented Kayanza shipment shock.
- S4 adds 115.5 BIF/kg to every maize candidate as a uniform historical-storage sensitivity. It is not a claim that every corridor has the ADISCO Gashikanwa warrantage margin.

## Robustness result

The global maize transport-shock sensitivity removes 18 maize candidates from the selected set; 330 remain.

Removed under S3:
Nyabikere → Kinama
Gihogazi → Bukeye
Giharo → Muyange
Muhanga → Kayanza
Kigamba → Kirehe
Jene → Rugombo
Gatabo → Muramvya
Rubaho → Mabanda
Gisuru → Rumonge
Ruyigi → Biyorwa
Ruhehe → Kirundo
Kinyinya → Kayogoro
Muyinga → Busoni
Gasorwe → Gitobe
Ngozi → Gasenyi
Bandaga → Musenyi
Rusaka → Bujumbura (FAO location)
Rutana → Makamba

The other 330 candidates are invariant between S0 and S3.

## Critical reconciliation

The Phase 37 executable benchmark run produces 440,342.9319 BIF, not the previously cited 264,170.36 BIF reference.

Therefore 264,170.36 BIF must NOT be reused as if it were reproduced by the Phase 29 solver from this benchmark. It remains an unreconciled historical reference until its exact candidate filtering/constraints are recovered.

This discrepancy is itself a valuable validation finding: the current reproducible benchmark and the earlier reported optimum are not yet numerically equivalent.

## Phase 37 verdict

Full benchmark read: PASS
Executable sensitivity run: PASS
Baseline reproducibility against current benchmark: PASS
Historical 264,170.36 reconciliation: FAIL / OPEN
Empirical calibrated optimum: NOT CLAIMED
Full empirical validation: NOT PASSED

Next: recover the exact filtering/constraints that generated 264,170.36 BIF, reconcile them against the 348-row benchmark, then rerun S0-S5 on the reconciled model.
