# Graph-Based Combinatorial Optimization for Agricultural Supply Networks

**Burundi Optimization & Intelligence (BOI)**  
**Status:** Under Development

## Overview

This research project investigates how graph theory and combinatorial optimization can support agricultural supply-network analysis in Burundi.

The project combines agricultural market-price information with road-network distances to identify potential market connections and evaluate how transportation costs may affect the attractiveness of inter-market routes.

## Research Objectives

- Represent agricultural markets as nodes in a network.
- Represent road connections between markets as network links.
- Measure road-network distances between markets.
- Identify potential market-to-market price-gap opportunities.
- Test transportation-cost scenarios.
- Evaluate the robustness of potential corridors under different transport-cost assumptions.
- Explore normalized multi-product flow allocation using optimization methods.
- Prioritize corridors for further analytical investigation.

## Analytical Framework

The current research workflow includes:

1. Market price data preparation
2. Spatial market analysis
3. Road-network construction
4. Market-to-market distance calculation
5. Price-gap screening
6. Transport-cost benchmarking
7. Route robustness analysis
8. Corridor prioritization
9. Multi-product flow-allocation modelling
10. Spatial scenario analysis

## Optimization Approach

The project uses graph-based analysis and linear optimization techniques to explore feasible market connections.

The flow-allocation prototype uses normalized units to avoid interpreting model outputs as observed agricultural quantities.

The optimization framework considers:

- origin markets
- destination markets
- product-specific price differences
- road-network distance
- transportation-cost scenarios
- normalized supply constraints
- normalized demand constraints
- shared corridor capacity

## Important Limitations

This is a research and modelling project.

The current results should **not** be interpreted as observed agricultural trade flows, actual shipment volumes, guaranteed profitability, or current commercial transport tariffs.

Actual implementation would require additional validated information, including:

- market-level supply volumes
- market-level demand volumes
- vehicle capacities
- actual freight tariffs
- fuel costs
- seasonal road conditions
- transaction costs
- loading and unloading costs
- market access constraints
- current field validation

## Expected Contribution

The project aims to demonstrate how data science, graph theory and optimization can be combined to support evidence-based analysis of agricultural supply networks and market accessibility in Burundi.

## Project Status

**Under Development**

Further datasets, field validation, calibration and methodological refinement are required before the framework can support operational decision-making.
