export type Phase = {
  id: number;
  title: string;
  group: string;
  status: string;
  detail: string;
};

const groups: Record<string, string> = {
  foundation: "Data & Optimization Foundation",
  validation: "Spatial Analysis & Research Validation",
  framework: "Empirical Validation Framework",
  public: "Public Data Integration",
  insbu: "Historical INSBU Evidence",
  final: "Final Integration & Scientific Audit",
};

const titles: Record<number, string> = {
  1: "Spatial & market data foundation",
  2: "Road-network construction",
  3: "Price-gap screening",
  4: "Normalized flow optimization",
  5: "Transport benchmark",
  6: "Route robustness",
  7: "Corridor prioritization",
  8: "Multi-product flow allocation",
  9: "Analytical integration checkpoint",
  10: "Spatial scenario analysis",
  11: "Research synthesis & stress testing",
  12: "Research validation",
  13: "Publication & external-validation package",
  14: "External-validation data framework",
  15: "Empirical validation & recalibration protocol",
  16: "Empirical data collection",
  17: "Empirical intake gate",
  18: "Empirical acquisition",
  19: "Master data completion",
  20: "Data audit & integration",
  21: "Public data harvest & integration",
  22: "Public-data integration gate",
  23: "Primary empirical acquisition integration",
  24: "INSBU price extraction",
  25: "Price crosswalk & validation",
  26: "Public-data integration continuation",
  27: "INSBU secondary price panel",
  28: "Secondary price deepening",
  29: "INSBU three-month consolidation",
  30: "Market-level integration gate",
  31: "RTFP acquisition & crosswalk",
  32: "Recalculation engine preparation",
  33: "Evidence expansion & recalculation readiness",
  34: "Historical INSBU 18-province evidence",
  35: "Historical INSBU extraction review",
  36: "Historical INSBU deepening",
  37: "INSBU June 2025 verified extraction",
  38: "Historical INSBU consolidation",
  39: "July 2025 administrative-transition review",
  40: "Producer prices & mercuriale integration review",
  41: "Public agricultural-data integration",
  42: "Empirical bottleneck control",
  43: "Recalibration & validation gate",
  44: "Final audit & publication package",
};

const groupFor = (id: number): string =>
  id <= 9
    ? groups.foundation
    : id <= 13
      ? groups.validation
      : id <= 23
        ? groups.framework
        : id <= 33
          ? groups.public
          : id <= 40
            ? groups.insbu
            : groups.final;

const statusFor = (id: number): string => {
  if (id <= 13) return "Analytical record";
  if ([14, 15, 16, 17, 18, 19, 20, 21, 22, 23].includes(id))
    return "Framework / gate";
  if ([24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38].includes(id))
    return "Controlled secondary evidence";
  if ([26, 35, 39, 40].includes(id))
    return "Review / not independently completed";
  return "Finalized with disclosed limits";
};

const detailFor = (id: number): string => {
  if (id <= 13)
    return "Analytical development and reproducibility record for the BOI agricultural supply-network optimization study.";
  if (id <= 23)
    return "Validation framework and acquisition controls. No empirical observations are fabricated or promoted without sufficient evidence.";
  if (id <= 33)
    return "Controlled public-data integration and evidence expansion. Province-level evidence is not falsely assigned to market-level observations.";
  if (id <= 40)
    return "Historical INSBU evidence review and consolidation using directly verifiable public statistical sources.";
  return "Final integration, scientific audit and publication controls. The analytical baseline remains reproducible, while empirical validation and recalibration require sufficient primary observations.";
};

export const phases: Phase[] = Array.from({ length: 44 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: titles[id],
    group: groupFor(id),
    status: statusFor(id),
    detail: detailFor(id),
  };
});

export const getPhase = (id: number): Phase | undefined =>
  phases.find((phase) => phase.id === id);
