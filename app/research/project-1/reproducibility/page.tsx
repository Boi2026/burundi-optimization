export default function ReproducibilityPage() {
  const components = [
    {
      title: "Data provenance",
      text: "Each integrated evidence family is documented with its source, date, geographic level, role and integration status.",
    },
    {
      title: "Network construction",
      text: "The road-routing layer is based on OpenStreetMap data and uses a documented market-to-market network construction procedure.",
    },
    {
      title: "Optimization",
      text: "Price-gap screening, transport scenarios, robustness analysis, corridor prioritization and normalized flow allocation are defined through explicit computational procedures.",
    },
    {
      title: "Scenario analysis",
      text: "Transport-cost assumptions and scenario results are recorded explicitly so that the analytical baseline can be independently reviewed.",
    },
    {
      title: "Quality assurance",
      text: "Research packages contain validation checks, manifests, status files and documented limitations.",
    },
    {
      title: "Scientific disclosure",
      text: "BOI distinguishes analytical reproducibility from empirical validation and does not present the current baseline as empirically validated.",
    },
  ];

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">BOI RESEARCH · PROJECT 1</p>

        <h1>Reproducibility</h1>

        <p className="lead">
          Research infrastructure for transparent reconstruction, review and
          independent extension of the BOI agricultural supply-network model.
        </p>

        <div className="notice">
          <strong>Reproducibility status:</strong> analytical workflow
          documented and reproducible. Empirical validation remains pending.
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">01 · REPRODUCIBLE WORKFLOW</p>

        <h2>How the research can be reconstructed</h2>

        <div className="grid two">
          {components.map((component) => (
            <article className="card" key={component.title}>
              <span>{component.title}</span>
              <p>{component.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">02 · RESEARCH RECORD</p>

        <h2>Documented analytical layers</h2>

        <div className="card">
          <ol>
            <li>Market-price evidence and commodity normalization.</li>
            <li>Road-network construction and market snapping.</li>
            <li>Market-to-market distance calculation.</li>
            <li>Price-gap opportunity screening.</li>
            <li>Transport-cost sensitivity analysis.</li>
            <li>Normalized multi-product flow optimization.</li>
            <li>Route robustness and corridor prioritization.</li>
            <li>Spatial scenario analysis and stress testing.</li>
            <li>Validation and quality-control gates.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">03 · DATA GOVERNANCE</p>

        <h2>Evidence is not treated equally</h2>

        <div className="card">
          <p>
            BOI separates public secondary evidence, analytical derivatives
            and primary empirical observations. Source provenance and
            geographic level are preserved during integration.
          </p>

          <p>
            Province-level evidence is not automatically assigned to
            individual market locations, and missing empirical observations
            are not replaced with synthetic values.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">04 · VALIDATION BOUNDARY</p>

        <h2>What reproducibility does not mean</h2>

        <div className="notice">
          Reproducing the calculations does not constitute empirical
          validation. BOI must still obtain sufficient transaction-level
          observations, calibrate the relevant parameters and test the model
          against an independent holdout dataset before making empirical
          performance claims.
        </div>
      </section>

      <section className="section">
        <p className="ey
