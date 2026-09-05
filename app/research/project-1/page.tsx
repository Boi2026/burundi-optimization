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
        <p className="eyebrow">BOI Research · Project 01</p>

        <h1>
          Graph-Based Combinatorial Optimization for Agricultural Supply
          Networks
        </h1>

        <p className="lede">
          A reproducible analytical framework for understanding agricultural
          market connectivity, transport sensitivity, corridor priorities, and
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
          <h2>Explore the project</h2>
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
          <h2>Phases 01–44</h2>
        </div>

        <div className="card">
          <p>
            The project research record is organized into 44 controlled
            phases, covering optimization, spatial analysis, validation
            frameworks, public-data integration, historical INSBU evidence,
            and final scientific audit.
          </p>

          <Link className="button" href="/research/project-1/phases/01">
            Open research phases
          </Link>
        </div>
      </section>
    </main>
  );
}
