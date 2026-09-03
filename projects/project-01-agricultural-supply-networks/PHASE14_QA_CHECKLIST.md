# Phase 14 QA Checklist

Before empirical observations enter the model:

- [ ] Exact market names match the BOI market master.
- [ ] Commodity names match the ten modeled products.
- [ ] Dates are valid and unambiguous.
- [ ] Currency is BIF unless explicitly documented otherwise.
- [ ] Freight cost is separated from non-freight costs.
- [ ] Payload is recorded in tonnes or has a documented conversion.
- [ ] Distance is documented and traceable.
- [ ] Source/provenance is recorded.
- [ ] Duplicate observations are checked.
- [ ] Missing values are distinguished from zero values.
- [ ] Outliers are reviewed, not silently deleted.
- [ ] Road-condition observations include date/season.
- [ ] Price observations include exact units.
- [ ] No empirical observation is represented as model output.
- [ ] Any recalibration is versioned and reproducible.
