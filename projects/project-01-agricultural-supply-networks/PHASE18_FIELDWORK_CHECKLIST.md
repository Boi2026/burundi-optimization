# Phase 18 — Field/Data Acquisition Checklist

## Before collection
- [ ] Confirm sampled markets/corridors
- [ ] Confirm product list
- [ ] Confirm observation period
- [ ] Prepare source/evidence log
- [ ] Assign collector/source identifier
- [ ] Define units before recording values

## For every price observation
- [ ] observation_id
- [ ] market
- [ ] product
- [ ] observation_date
- [ ] price
- [ ] currency
- [ ] unit
- [ ] market level (retail/wholesale/farm-gate/etc.)
- [ ] source
- [ ] evidence reference

## For every freight observation
- [ ] observation_id
- [ ] origin
- [ ] destination
- [ ] product
- [ ] date
- [ ] load quantity
- [ ] freight amount
- [ ] currency
- [ ] vehicle/load type
- [ ] included services
- [ ] source/evidence

## QA
- [ ] No duplicate observation_id
- [ ] No impossible/negative values without explanation
- [ ] Currency recorded
- [ ] Unit recorded
- [ ] Date valid
- [ ] Geography matched or queued as unmatched
- [ ] Source traceable
- [ ] Corrections logged, not silently overwritten
