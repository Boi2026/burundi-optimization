# BOI Project 1 — Phase 17: Empirical Dataset Intake & Freeze Gate

## Objective
Phase 17 converts the Phase 16 collection framework into an explicit, auditable intake gate. It checks whether the five empirical data streams required for recalibration are present, documented, standardized, geographically matched, and ready for a versioned freeze.

## Scientific status
**Gate established — empirical recalibration not yet authorized.**

The repository currently contains collection templates and validation protocols, but no documented observation set was supplied to this phase. Therefore Phase 17 does not manufacture observations, estimate missing tariffs, or reinterpret normalized optimization units as tonnes.

## Required streams
1. Transaction / market prices
2. Freight tariffs / observed transport costs
3. Road accessibility / travel observations
4. Supply and demand quantities
5. Cost components

## Freeze gate
A dataset can advance only when:
- every observation has a unique `observation_id`;
- source and collection date are recorded;
- geographic identifiers are traceable to BOI market/network identifiers;
- raw values are preserved alongside standardized values;
- units and currencies are explicit;
- schema, range, duplicate, and missingness checks pass or are documented;
- unmatched geographic records are resolved or isolated in a review queue;
- the dataset receives a version identifier and freeze date;
- an independent validation record is retained.

## Current decision
**HOLD.** The analytical model remains a scenario-based research prototype. Phase 15 calibration and out-of-sample empirical validation must wait for documented observations that pass the intake gate.

## Next step
Populate the Phase 16 templates with primary or independently documented observations, run the Phase 17 checks, freeze the resulting dataset, then execute recalibration and out-of-sample validation.
