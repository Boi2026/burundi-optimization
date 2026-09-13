# Phase 21 — Flow Analysis & Research Interpretation

## Executed optimal flows

All quantities are SYNTHETIC.

### S1 Baseline
| Origin | M1 | M2 | M3 |
|---|---:|---:|---:|
| O1 | 220 | 30 | 0 |
| O2 | 0 | 250 | 0 |
| O3 | 0 | 0 | 200 |

Unmet: M1=0, M2=0, M3=0.

### S2 Demand +20%
| Origin | M1 | M2 | M3 |
|---|---:|---:|---:|
| O1 | 220 | 80 | 0 |
| O2 | 0 | 250 | 0 |
| O3 | 0 | 0 | 200 |

Unmet: M1=44, M2=6, M3=40; total=90 t.

### S3 Supply -20%
| Origin | M1 | M2 | M3 |
|---|---:|---:|---:|
| O1 | 220 | 20 | 0 |
| O2 | 0 | 200 | 0 |
| O3 | 0 | 0 | 160 |

Unmet: M1=0, M2=60, M3=40; total=100 t.

### S4 Transport +30%
Flow pattern remains the same as S1. Unmet demand remains zero; all transport costs scale by 1.30.

### S5 Supply -20% + Transport +30%
Flow pattern remains the same as S3. Unmet: M1=0, M2=60, M3=40; total=100 t.

## Interpretation

The baseline solution exploits the lowest-cost corridors while respecting capacities. Under demand growth, the model allocates all available supply and exposes the residual shortage explicitly. Under supply contraction, shortages concentrate in markets whose remaining alternative supply is comparatively expensive or capacity constrained.

## Research claim

The experiment demonstrates that the network formulation can identify cost-minimizing allocations and quantify unmet demand under controlled shocks. It is a proof-of-concept computational experiment, not field validation.

## Next phase

Perform sensitivity analysis over shock magnitudes and penalty values, then package the experiment as a reproducible research artifact and presentation-ready result.
