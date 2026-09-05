export default function ValidationPage() {
  const gates = [
    {
      title: "Analytical validation",
      status: "PASSED",
      text: "Internal consistency, deterministic calculations and quantitative quality checks were completed across the analytical workflow.",
    },
    {
      title: "Reproducibility",
      status: "PASSED",
      text: "Methods, assumptions, scenarios, source registers and research packages are documented to support independent reproduction.",
    },
    {
      title: "Secondary evidence",
      status: "CONTROLLED",
      text: "World Bank RTFP, INSBU price bulletins and other public evidence are integrated through explicit source and crosswalk controls.",
    },
    {
      title: "Primary empirical validation",
      status: "PENDING",
      text: "Transaction-level freight, observed supply and demand, operating costs, logistics capacity and independent holdout observations are still required.",
    },
    {
      title: "Model recalibration",
      status: "BLOCKED",
      text: "Transport parameters and model outputs have not been recalibrated because the required independent empirical observations are not yet sufficient.",
    },
    {
      title: "Out-of-sample validation",
      status: "PENDING",
      text: "An independent holdout dataset must be populated and evaluated before BOI can claim empirical predictive validation.",
    },
  ];

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">BOI RESEARCH · PROJECT 1</p>
        <h1>Validation</h1>
        <p className="lead">
          Scientific validation status of the Graph-Based Combinatorial
          Optimization for Agricultural Supply Networks project.
        </p>

        <div className="notice">
          <strong>Current scientific status:</strong> analytically finalized
          and reproducible, but not yet empirically validated.
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">01 · VALIDATION FRAMEWORK</p>
        <h2>What has been validated?</h2>

        <div className="grid two">
          <article className="card">
            <span>Analytical layer</span>
            <strong>Completed</strong>
            <p>
              Network construction, price-gap calculations, transport
              scenarios, robustness analysis, corridor prioritization and
              normalized flow optimization were subjected to internal QA.
            </p>
          </article>

          <article className="card">
            <span>Scientific reproducibility</span>
            <strong>Completed</strong>
            <p>
              The analytical workflow is documented with assumptions,
              scenario definitions, source provenance and reproducibility
              packages.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">02 · VALIDATION GATES</p>
        <h2>Evidence gates</h2>

        <div className="grid two">
          {gates.map((gate) => (
            <article className="card" key={gate.title}>
              <span>{gate.title}</span>
              <strong>{gate.status}</strong>
              <p>{gate.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">03 · EMPIRICAL REQUIREMENTS</p>
        <h2>What is still required?</h2>

        <div className="card">
          <ul>
            <li>Observed transaction-level freight tariffs.</li>
            <li>Observed supply and demand quantities.</li>
            <li>Verified transport and operating cost components.</li>
            <li>Observed logistics and vehicle capacity.</li>
            <li>Verified road accessibility and condition observations.</li>
            <li>Independent holdout observations for out-of-sample testing.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">04 · SCIENTIFIC INTEGRITY</p>
        <h2>No unsupported empirical claim</h2>

        <div className="notice">
          BOI does not label the model as empirically validated until the
          required primary observations have been collected, quality
          controlled, integrated and evaluated against an independent
          holdout dataset.
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">05 · CURRENT DECISION</p>
        <h2>Validation gate: HOLD</h2>

        <div className="card">
          <p>
            The analytical baseline is preserved. Recalibration, empirical
            validation and out-of-sample performance claims remain on hold
            until the evidence requirements are satisfied.
          </p>

          <p>
            This distinction allows BOI to present a professional and
            scientifically transparent research platform without overstating
            the current evidence.
          </p>
        </div>
      </section>
    </main>
  );
              }
