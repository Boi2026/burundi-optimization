# Phase 20 — Computational Experiment Specification

## Status
EXECUTABLE SPECIFICATION — synthetic experiment branch

## Baseline synthetic network

Origins: O1, O2, O3  
Markets: M1, M2, M3

Supply (t): O1=300, O2=250, O3=200  
Demand (t): M1=220, M2=280, M3=200

Total supply = 750 t; total demand = 700 t.

## Synthetic unit transport costs

| | M1 | M2 | M3 |
|---|---:|---:|---:|
| O1 | 4 | 7 | 9 |
| O2 | 6 | 3 | 5 |
| O3 | 8 | 5 | 2 |

Capacity constraints (t): O1-M1=220, O1-M2=180, O1-M3=120; O2-M1=150, O2-M2=250, O2-M3=150; O3-M1=120, O3-M2=180, O3-M3=200.

## Scenarios

S1 baseline.
S2 demand at M2 +20%.
S3 all origin supply -20%.
S4 all transport costs +30%.
S5 supply -20% and transport costs +30%.

## Optimization objective

Minimize total transport cost:

min Σ(i,j) c_ij x_ij

subject to:
- Σj x_ij ≤ supply_i
- Σi x_ij = demand_j where feasible
- 0 ≤ x_ij ≤ corridor_capacity_ij

For scenarios where total supply is insufficient, introduce unmet-demand variables u_j with a documented penalty P greater than every feasible marginal transport cost. Report unmet demand separately; do not conceal infeasibility.

## Expected experiment outputs

For each scenario:
- total demand;
- total available supply;
- shipped quantity;
- unmet demand;
- total transport cost;
- cost per shipped tonne;
- corridor utilization;
- optimal flow matrix;
- sensitivity versus S1.

## Integrity

All numbers in this file are SYNTHETIC and are not observations of Burundi markets. They exist to test the optimization formulation and response to shocks.
