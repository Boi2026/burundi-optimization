# Phase 19 — Execution Protocol

## 1. Intake
Load each source without overwriting original values. Assign an immutable `observation_id` when absent.

## 2. Provenance
For every record retain source, source date, evidence reference, geography, product/cost category, original unit and original value.

## 3. Entity matching
Match:
- market names → BOI market identifiers;
- products → BOI product identifiers;
- origin/destination → BOI market nodes;
- corridors → BOI unordered/ordered corridor representation as appropriate.

Uncertain matches go to the review queue.

## 4. Standardization
Create standardized fields only after:
- unit meaning is confirmed;
- currency is identified;
- time basis is explicit;
- quantity basis is explicit.

Never replace the raw field with a converted value.

## 5. QA
Run:
- duplicate checks;
- missing required-field checks;
- date validity;
- numeric plausibility checks;
- unit/currency consistency;
- geographic matching checks;
- source/evidence completeness;
- impossible-value review.

## 6. Freeze
Freeze only when:
- all included observations have traceable provenance;
- unresolved records are separated;
- QA results are recorded;
- dataset version and freeze date are assigned;
- a manifest/hash is generated.

## 7. Downstream rule
Only the frozen dataset may feed Phase 20 validation/recalibration.
