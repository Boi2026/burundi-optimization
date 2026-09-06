import Link from "next/link";

export default function ResearchPage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">BOI RESEARCH</p>

        <h1>Research Portfolio</h1>

        <p className="lede">
          Applied research in optimization, data science, spatial intelligence,
          artificial intelligence, and complex development problems.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">RESEARCH 01 · FLAGSHIP</p>

          <h2>
            Agricultural Supply Network Optimization in Burundi
          </h2>
        </div>

        <article className="card">
          <p className="eyebrow">
            Graph-based optimization
          </p>

          <h3>
            Agricultural Supply Network Optimization in Burundi
          </h3>

          <p>
            A graph-based combinatorial optimization framework for market
            connectivity, transport sensitivity, corridor prioritization,
            and multi-product allocation in Burundi.
          </p>

          <p>
            The research combines market-price evidence, road-network
            accessibility, transport-cost scenarios, price-gap screening,
            robustness analysis, spatial prioritization, and coupled
            multi-product flow optimization.
          </p>

          <div className="actions">
            <Link
              className="button primary"
              href="/research/project-1"
            >
              Explore Research 01
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">RESEARCH DIRECTIONS</p>

          <h2>Additional research programs</h2>

          <p>
            BOI develops additional analytical directions that extend its
            research infrastructure across agricultural markets, spatial
            systems, artificial intelligence, and complex development
            problems.
          </p>
        </div>

        <div className="grid two">
          <article className="card">
            <p className="eyebrow">RESEARCH 02</p>

            <h3>
              Spatial Intelligence for Agricultural Market Prices
            </h3>

            <p>
              Spatial and temporal analysis of agricultural price signals,
              market connectivity, geographic variation, and decision
              intelligence.
            </p>
          </article>

          <article className="card">
            <p className="eyebrow">RESEARCH 03</p>

            <h3>
              Burundi Road Network &amp; Accessibility Analysis
            </h3>

            <p>
              Computational analysis of road networks, accessibility,
              connectivity, travel distances, and spatial constraints
              affecting economic activity.
            </p>
          </article>

          <article className="card">
            <p className="eyebrow">RESEARCH 04</p>

            <h3>
              AI &amp; Optimization for Complex Development Problems
            </h3>

            <p>
              Research directions combining artificial intelligence,
              optimization, data science, and operations research to address
              complex development challenges.
            </p>
          </article>
        </div>
      </section>

      <section className="section cta">
        <p className="eyebrow">RESEARCH STANDARD</p>

        <h2>
          Reproducible research with explicit scientific boundaries.
        </h2>

        <p>
          BOI distinguishes analytical results from empirical validation,
          documents assumptions and data provenance, and maintains a
          reproducible research record for its published work.
        </p>

        <div className="actions">
          <Link
            className="button secondary"
            href="/research/project-1/methodology"
          >
            Research methodology
          </Link>

          <Link
            className="button secondary"
            href="/research/project-1/reproducibility"
          >
            Reproducibility
          </Link>
        </div>
      </section>
    </main>
  );
}
