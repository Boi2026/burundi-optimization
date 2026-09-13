# Phase 30 — Empirical Calibrated Full Run

This phase runs the restored Phase 29 MILP over the complete benchmark candidate universe while applying the Phase 28 evidence rules.

Important: current empirical price observations do not contain enough information to reconstruct every candidate's gross revenue and cost equation. Therefore the runner does not manufacture a new margin from a market price alone. It retains the documented normalized margin and records the empirical price evidence separately.

This produces a valid full-pipeline execution while preventing false empirical calibration.

Run from this directory:

python run_phase30.py
