# BOI Project 1 --- Phase 11: Research Synthesis & Publication Package

**Burundi Optimization & Intelligence (BOI)**\
**Project:** Graph-Based Combinatorial Optimization for Agricultural
Supply Networks\
**Status:** Research synthesis based on completed Phases 1--10

## 1. Executive Summary

This project develops a graph-based analytical framework for studying
agricultural market connectivity in Burundi. The workflow integrates
market-price observations, a road-network representation,
transport-distance analysis, price-gap screening, transport-cost
scenarios, route robustness, corridor prioritization, and normalized
multi-product flow allocation.

The final spatial layer identifies corridors that remain analytically
attractive across multiple transport-cost scenarios and products.

The results are a **research screening exercise**, not observed
agricultural trade flows, causal estimates, or an investment appraisal.

## 2. Research Question

How can graph theory, spatial analysis, and combinatorial optimization
be combined to identify potentially important agricultural market
connections and corridors in Burundi under alternative transport-cost
assumptions?

## 3. Integrated Methodology

1.  **Market Price Analysis** --- preparation and analysis of
    agricultural price observations.
2.  **Road Network & Accessibility** --- representation of markets as
    nodes and roads as network links; market-to-market road distances.
3.  **Price-Gap & Transport-Cost Screening** --- comparison of market
    price gaps with alternative transport-cost assumptions.
4.  **Normalized Flow Optimization** --- linear-programming prototype
    using normalized units rather than observed quantities.
5.  **Transport-Cost Benchmarking** --- testing a wider transport-cost
    range including approximately 811.33 BIF/t-km.
6.  **Route Robustness** --- classification across six transport-cost
    scenarios.
7.  **Corridor Prioritization** --- composite ranking using robustness,
    product breadth, normalized margin and distance efficiency.
8.  **Multi-Product Flow Allocation** --- coupled optimization with
    shared corridor-capacity constraints.
9.  **Critical Corridor Analysis** --- identification of repeatedly
    important corridors.
10. **Spatial Scenario Analysis** --- integration of corridor
    priorities, scenario flows and market coordinates.

## 4. Key Findings

### Network and market structure

-   10 agricultural products are represented in the price analysis.
-   The routing layer contains 72 markets.
-   The road-network analysis demonstrates why network distance is more
    informative than straight-line distance for transport-oriented
    screening.

### Transport-cost sensitivity

At approximately **811.33 BIF/t-km**, the Phase 3 screening identified
**21,848 profitable route-product observations out of 24,724**.

### Robustness

Across six scenarios: - **19,505** route-product observations were
profitable in all six scenarios. - **868** were profitable in five
scenarios. - **1,475** were profitable in three or four scenarios. -
**1,144** were profitable in one or two scenarios. - **1,732** were not
profitable in any tested scenario.

### Spatial prioritization

The spatial screening classified: - **96** corridors as Tier A ---
strategic - **534** as Tier B --- priority - **1,804** as Tier C ---
secondary - **122** as Tier D --- surveillance

Tier A corridors have an average spatial score of approximately
**93.7**, nearly **9.9 products** represented on average, and activity
across approximately **5.6 of six scenarios** on average.

## 5. Interpretation

The strongest defensible result is methodological: the framework
identifies market connections that are comparatively resilient to
transport-cost assumptions and span multiple products.

It does **not** demonstrate that these corridors currently carry
particular quantities of agricultural goods.

## 6. Limitations

1.  Normalized optimization units are analytical units, not tonnes.
2.  The 811.33 BIF/t-km benchmark is literature-derived, not a current
    observed domestic agricultural freight tariff.
3.  The road network is a first-pass analytical representation.
4.  Spatial geometries are analytical market connectors rather than
    shortest-path road geometries.
5.  Price gaps do not establish causality, arbitrage, actual trade, or
    welfare effects.
6.  The model does not yet incorporate observed supply, demand,
    inventory, vehicle capacity, road condition or time-dependent travel
    costs.
7.  Results should not be presented as investment recommendations
    without field validation.

## 7. Research Contribution

The project creates a modular pipeline:

**market prices → spatial network → transport cost → robustness →
corridor prioritization → multi-product allocation → spatial screening**

This provides a foundation for future empirical work as better market
and logistics data become available.

## 8. Reproducibility

The repository contains the principal Phase 10 spatial outputs,
including corridor screening data, top-50 ranking, scenario stability
data, benchmark normalized flows, market-node coordinates, tier
summaries and analytical maps.

Future versions should preserve the distinction between **observed
data** and **model assumptions**.

## 9. Working-Paper Structure

1.  Introduction
2.  Agricultural market integration and transport-cost context
3.  Data and study design
4.  Market-price analysis
5.  Road-network construction
6.  Price-gap screening
7.  Transport-cost scenarios
8.  Robustness and corridor prioritization
9.  Multi-product flow allocation
10. Spatial scenario analysis
11. Results
12. Limitations
13. Implications for future empirical research
14. Conclusion
15. Reproducibility appendix

## 10. Next Research Direction

The logical next stage is **empirical validation and data enrichment**,
rather than immediately adding more optimization complexity.

Priority additions: 1. observed agricultural freight rates; 2.
market-level supply and demand; 3. road-condition and seasonal
accessibility data; 4. vehicle capacity and logistics constraints; 5.
validation of selected priority corridors; 6. sensitivity analysis using
observed rather than illustrative transport costs.
