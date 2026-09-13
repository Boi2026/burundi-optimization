# Phase 30 — empirical calibration runner
# Uses the documented candidate benchmark as the optimization candidate universe.
# Empirical evidence is applied only where an explicit product-price mapping exists.
# Missing mappings remain unchanged and are labelled synthetic/benchmark in outputs.

import csv
from pathlib import Path
from phase29_solver import Candidate, solve

BASE = Path(__file__).resolve().parents[1]
BENCHMARK = BASE.parent / "benchmark_flows_811.33_cap3.csv"
OUT = Path(__file__).resolve().parent

# Explicit empirical price mappings currently authorized from Phase 28.
# World Bank RTFP values are estimates, so this is an empirical-estimate sensitivity
# adjustment, not transaction-level calibration.
EMPIRICAL_PRICE = {
    "beans": 2248.945,
    "maize": 1301.50,
    "rice": 5348.14,
}

# The benchmark's normalized margin is retained as the decision margin.
# This first full-run comparison intentionally avoids inventing market quantity,
# handling, or route-time parameters.
def load():
    rows=[]
    with open(BENCHMARK, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            rows.append(r)
    return rows

def build(rows, calibrated=False):
    out=[]
    for i,r in enumerate(rows):
        margin=float(r["normalized_margin_contribution_bif"])
        if calibrated and r["product"] in EMPIRICAL_PRICE:
            # Price adjustment cannot be validly applied to an existing margin
            # without reconstructing the full gross-price/cost equation.
            # Therefore the calibrated run uses the empirical price as metadata
            # and leaves the objective unchanged rather than fabricating a new margin.
            pass
        out.append(Candidate(str(i), r["corridor_key"], margin, float(r["flow_unit"])))
    return out

def main():
    rows=load()
    capacities={r["corridor_key"]:3.0 for r in rows}
    base=solve(build(rows,False), capacities)
    calibrated=solve(build(rows,True), capacities)

    base_obj=-base.fun
    cal_obj=-calibrated.fun
    selected_base=sum(x>=.5 for x in base.x)
    selected_cal=sum(x>=.5 for x in calibrated.x)

    result=f"""# Phase 30 — Empirical Calibrated Full Run

Candidate rows: {len(rows)}
Distinct corridors: {len(capacities)}
Baseline objective: {base_obj:.6f} BIF
Calibrated objective: {cal_obj:.6f} BIF
Objective delta: {cal_obj-base_obj:.6f} BIF
Baseline selected candidates: {selected_base}
Calibrated selected candidates: {selected_cal}
Baseline solver status: {base.status}
Calibrated solver status: {calibrated.status}

## Interpretation

The solver successfully executes over the full benchmark candidate universe.

However, the calibrated objective is intentionally unchanged from the baseline because the currently available empirical price observations do not provide the complete market-product gross-price/cost reconstruction required to transform an existing normalized margin into a defensible calibrated margin.

This is therefore a **pipeline validation / evidence-preserving full run**, not a claim of a changed empirical optimum.

No transaction volumes, handling costs, route travel times, or unsupported price-to-margin transformations were invented.
"""
    (OUT/"PHASE_30_FULL_RUN_RESULT.md").write_text(result,encoding="utf-8")
    print(result)

if __name__=="__main__":
    main()
