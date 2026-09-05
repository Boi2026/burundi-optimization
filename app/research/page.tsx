import Link from "next/link";

export default function ResearchPage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">BOI Research</p>
        <h1>Research Portfolio</h1>
        <p className="lede">
          Applied research in optimization, data science, spatial intelligence,
          and complex development problems.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Flagship research</p>
          <h2>Project 1</h2>
        </div>

        <article className="card">
          <p className="eyebrow">Agricultural supply networks</p>
          <h3>Graph-Based Combinatorial Optimization for Agricultural Supply Networks</h3>
          <p>
            A reproducible analytical framework combining market-price evidence,
            road-network accessibility, transport sensitivity, corridor
            prioritization, and multi-product flow allocation.
          </p>

          <div className="actions">
            <Link className="button primary" href="/research/project-1">
              Explore Project 1
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
