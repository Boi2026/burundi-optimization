# BOI Project 1 — Presentation Brief

## Title
**Graph-Based Agricultural Supply Network Optimization for Emerging Economies**

## One-minute pitch

BOI studies how mathematical optimization can improve agricultural supply allocation when supply is limited, markets compete for resources and transport corridors have finite capacities. We formulate the system as a capacitated network-flow problem and use linear programming to identify cost-minimizing allocations and quantify unmet demand under controlled shocks.

## Method
1. Represent origins and markets as nodes.
2. Represent transport corridors as capacitated edges.
3. Assign supply, demand and transport costs.
4. Minimize total transport cost.
5. Add unmet-demand variables with an explicit penalty when demand cannot be fully satisfied.
6. Stress-test the network with demand, supply and transport shocks.

## Demonstration
Baseline synthetic network:
- supply: 750 t
- demand: 700 t
- unmet demand: 0 t
- transport cost: 2,240

Demand +20%:
- demand: 840 t
- supply: 750 t
- unmet demand: 90 t

Supply -20%:
- supply: 600 t
- demand: 700 t
- unmet demand: 100 t

Transport cost +30%:
- demand remains fully served
- transport cost: 2,912

Combined supply -20% + transport +30%:
- unmet demand: 100 t
- transport cost: 2,522

## What is real vs synthetic

Public FAO sources provide national reference evidence. The market network instance and its shock magnitudes are synthetic. This separation is intentional and is part of the research design.

## Research value

The current artifact demonstrates the optimization mechanism and its response to controlled perturbations. The next stage is calibration with observed market, freight and demand data.
