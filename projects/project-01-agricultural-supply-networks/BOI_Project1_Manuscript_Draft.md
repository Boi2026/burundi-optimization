# Graph-Based Combinatorial Optimization for Agricultural Supply Networks in Burundi

## Research synthesis and publication draft — Phase 13

**Status:** Manuscript draft for external review; not yet submitted or peer reviewed.

### Abstract
Agricultural market integration in Burundi is constrained by spatial separation, transport costs, and heterogeneous market prices. This study develops a reproducible analytical framework that combines market-price screening, road-network accessibility, transport-cost sensitivity analysis, route robustness, corridor prioritization, and multi-product flow allocation. The current dataset contains 72 markets, 10 agricultural products, and 24,724 route-product observations. A first-pass road network provides network distances between 72 markets. Price-gap opportunities are evaluated under transport-cost scenarios from 500 to 1,500 BIF per tonne-kilometre, including a literature-derived benchmark of 811.331 BIF/t-km. At the benchmark, 21,848 route-product observations remain profitable under the screening rule. Across the six canonical scenarios, 19,505 observations are profitable in all six scenarios and are classified as robust; 868 are strong, 1,475 moderate, 1,144 sensitive, and 1,732 not profitable. Corridor prioritization combines robustness, product breadth, normalized margin, and distance efficiency. The coupled multi-product allocation model uses normalized analytical flow units and a shared corridor-capacity constraint. At a capacity of three normalized units per corridor, the model selects 349 arcs at the 811.331 BIF/t-km benchmark. These results demonstrate the analytical value of graph-based screening while also showing the need for observed freight tariffs, supply and demand quantities, vehicle capacities, road-condition information, and transaction-level validation before operational or investment conclusions can be drawn.

## 1. Introduction

Food-market performance depends not only on production but also on the spatial organization of markets and the cost of moving commodities between them. In a setting where market prices differ across locations, road-network structure can be used to identify candidate corridors for further investigation. The objective of this research is not to claim realized arbitrage or observed shipments, but to construct a transparent decision-support framework for identifying spatial opportunities and testing their sensitivity to transport costs.

The study asks four questions: (1) where are persistent cross-market price gaps observed; (2) how does network distance affect the economic screening of these gaps; (3) which corridors remain attractive as transport costs increase; and (4) how does a shared-capacity, multi-product allocation model change the set of candidate flows?

## 2. Data and study design

The analytical dataset contains 72 markets and ten products: bananas, beans, cassava flour, maize, maize flour, goat meat, onions, potatoes, rice, and tomatoes. Price observations span multiple years, with product-specific latest available dates. The routing layer is derived from OpenStreetMap road data and projected for network analysis. Markets are snapped to the noded routing network, and pairwise network distances are computed for the 72 markets.

The road layer is explicitly treated as a first-pass analytical network. The current model does not validate one-way restrictions, seasonal accessibility, road-condition constraints, vehicle restrictions, loading losses, handling costs, or observed freight tariffs.

## 3. Methods

### 3.1 Price-gap screening
For each product, ordered market pairs are generated where destination price exceeds origin price. The gross price gap is expressed in BIF/kg. The break-even transport cost is computed as:

`break_even_BIF_per_tkm = gross_price_gap_BIF_per_kg × 1000 / road_distance_km`

A candidate is considered profitable under a scenario when the gross price gap exceeds the assumed transport cost multiplied by network distance. This is a screening criterion, not an estimate of realized trading profit.

### 3.2 Transport-cost sensitivity
Six canonical scenarios are evaluated: 500, 750, 811.3311, 1,000, 1,250, and 1,500 BIF/t-km. The 811.3311 value is a literature-derived benchmark converted using an official exchange rate; it is not an observed current Burundi agricultural freight tariff.

### 3.3 Route robustness
Each route-product observation is classified according to the number of canonical transport-cost scenarios in which it remains profitable: robust (6/6), strong (5/6), moderate (3–4/6), sensitive (1–2/6), and not profitable (0/6).

### 3.4 Corridor prioritization
Corridor priority combines robustness/strong-or-better share, product breadth, normalized minimum margin, and distance efficiency. The resulting score is a screening index between 0 and 100. It should not be interpreted as a causal estimate of investment return.

### 3.5 Multi-product allocation
The coupled allocation model maximizes normalized total margin subject to product-origin supply limits, product-destination demand limits, and a shared corridor-capacity constraint. A capacity of three normalized units per corridor is used as the principal analytical configuration. A normalized flow unit is not a tonne and must not be interpreted as an observed shipment.

## 4. Results

The six transport-cost scenarios produce 22,992 profitable route-product candidates at 500 BIF/t-km and 19,505 at 1,500 BIF/t-km. At 811.3311 BIF/t-km, 21,848 candidates remain profitable. The decline is monotonic as transport costs increase, providing a clear sensitivity gradient.

Across the six scenarios, 19,505 of the 24,724 route-product observations are robust, while 868 are strong, 1,475 moderate, 1,144 sensitive, and 1,732 not profitable. Robustness is heterogeneous by product. Goat meat, onions, tomatoes, rice, bananas, and potatoes have particularly high robust shares, while maize and cassava flour show lower robust shares.

The spatial prioritization produces 2,556 corridors: 96 Tier-A strategic corridors, 534 Tier-B priority corridors, 1,804 Tier-C secondary corridors, and 122 Tier-D surveillance corridors in the corrected spatial screening layer.

At the 811.3311 BIF/t-km benchmark and corridor-capacity level 3, the coupled model selects 349 normalized flow arcs with 349 normalized flow units and a total normalized margin of approximately 440,398 BIF. At 1,500 BIF/t-km, the same cap-3 configuration selects 345 normalized flow units with approximately 427,604 BIF of normalized margin.

## 5. Interpretation

The results indicate that a substantial set of candidate market connections survives transport-cost stress in the current analytical framework. This supports the use of graph-based methods as a screening tool for prioritizing field validation. The strongest analytical signal is not any individual route but the persistence of opportunities across multiple cost scenarios and products.

However, the results do not demonstrate actual commodity movement, causal price transmission, realized arbitrage, or positive investment returns. The normalized allocation model is a mathematical allocation experiment under stylized capacity constraints.

## 6. Limitations

1. Transport costs are scenario assumptions; the benchmark is literature-derived rather than a current observed agricultural tariff.
2. Supply and demand are normalized rather than observed quantities.
3. Vehicle capacities, loading/handling costs, spoilage/losses, market fees, taxes, and transaction costs are not modeled.
4. The road network is a first-pass analytical network and does not validate one-way restrictions or seasonal/condition-dependent accessibility.
5. Price gaps are screening signals and do not establish arbitrage or causal market integration.
6. The spatial `stress_score` is a carried spatial-priority score, not an independently calibrated resilience index.

## 7. External validation protocol

Before operational deployment or a stronger causal publication claim, BOI should collect and validate: (a) route-level freight tariffs from transporters; (b) truck/vehicle capacity by commodity; (c) market-level supply and demand volumes; (d) seasonal road accessibility and road-condition data; (e) transaction prices and dates; (f) loading, unloading, handling and loss rates; and (g) independent field observations for a sample of priority corridors.

A validation sample should stratify corridors by priority tier, distance, product breadth, and robustness class. Observed freight costs should be compared with model assumptions, and observed shipment feasibility should be compared with predicted candidate corridors.

## 8. Conclusion

The BOI framework demonstrates a reproducible way to combine graph-based accessibility, price-gap screening, transport-cost stress testing, corridor prioritization, and multi-product optimization. The current results are suitable as a methodological and exploratory research contribution. The next evidentiary step is external validation with observed transport, supply, demand, and transaction data.

## Data and reproducibility
The repository should retain the phase-level inputs, outputs, validation checks, data dictionary, and reproducibility manifest. Any publication should link to the versioned repository commit used to generate the reported tables and figures.
