import Link from "next/link";

const sections = [
  ["Results", "/research/project-1/results"],
  ["Methodology", "/research/project-1/methodology"],
  ["Data & Sources", "/research/project-1/data-sources"],
  ["Validation", "/research/project-1/validation"],
  ["Reproducibility", "/research/project-1/reproducibility"],
  ["Citation", "/research/project-1/citation"],
];

export default function ProjectOnePage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">BOI Research · 01</p>

        <h1>Agricultural Supply Network Optimization in Burundi</h1>

        <p className="lede">
          A graph-based combinatorial optimization framework for market
          connectivity, transport sensitivity, corridor prioritization, and
          multi-product allocation in Burundi.
        </p>

        <div className="actions">
          <Link className="button primary" href="/research/project-1/results">
            Explore results
          </Link>

          <Link className="button" href="/research/project-1/methodology">
            View methodology
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research status</p>
          <h2>Analytical baseline finalized</h2>
        </div>

        <div className="card">
          <p>
            The project integrates market-price evidence, road-network
            accessibility, transport-cost sensitivity, corridor
            prioritization, and normalized multi-product flow allocation.
          </p>

          <p>
            The analytical baseline is reproducible and prepared for external
            review. Empirical validation and recalibration remain conditional
            on sufficient independent primary observations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research architecture</p>
          <h2>Explore the research</h2>
        </div>

        <div className="grid">
          {sections.map(([label, href]) => (
            <Link key={href} className="card" href={href}>
              <h3>{label}</h3>
              <p>Open the {label.toLowerCase()} section.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research process</p>
          <h2>Controlled research record · 44 phases</h2>
        </div>

        <div className="card">
          <p>
            The research record is organized into 44 controlled phases,
            covering optimization, spatial analysis, validation frameworks,
            public-data integration, historical INSBU evidence, and final
            scientific audit.
          </p>

          <Link className="button" href="/research/project-1/phases/01">
            Open research phases
          </Link>
        </div>
      </section>
    </main>
  );
}
