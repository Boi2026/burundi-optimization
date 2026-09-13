# Phase 27 — Non-Trivial Multi-Path Network Benchmark

Status: PASS — exact LP solved.

The benchmark uses 10 existing high-priority origin-destination corridors as anchors. Each receives two synthetic alternative paths through intermediate logistics hubs. Added path parameters are MODEL_ESTIMATE values.

- 10 OD pairs
- 4 products
- 3 competing paths per OD
- 30 paths
- 120 path-product decision variables
- capacity 3 normalized units per path
- demand 3 normalized units per OD-product
- transport benchmark 79 BIF/km

LP objective: 271,034.03 BIF
Greedy lowest-cost objective: 271,034.03 BIF; gap approximately 0%
Direct-first heuristic objective: 278,841.59 BIF; gap 2.8807%

The lowest-cost greedy method matches the LP because alternatives remain separable by OD in this benchmark. The direct-first heuristic is worse and demonstrates the cost of a non-optimized path policy.

This does NOT establish algorithmic novelty.

Next decisive experiment: construct a coupled network with shared bottleneck edges used by multiple OD pairs/products, then compare exact optimization with a non-trivial heuristic and report runtime, objective gap and feasibility.
