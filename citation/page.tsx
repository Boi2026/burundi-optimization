export default function CitationPage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Project 1 · Citation</p>
        <h1>How to cite this research</h1>
        <p className="lede">
          Graph-Based Combinatorial Optimization for Agricultural Supply
          Networks.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Recommended citation</p>
          <h2>Burundi Optimization & Intelligence (BOI)</h2>
        </div>

        <article className="card">
          <h3>Project 1</h3>
          <p>
            Burundi Optimization & Intelligence (BOI). Graph-Based
            Combinatorial Optimization for Agricultural Supply Networks.
            Analytical research project, 2026.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research status</p>
          <h2>Scientific disclosure</h2>
        </div>

        <article className="card">
          <p>
            The published analytical results are reproducible and prepared
            for external review. Empirical validation and model recalibration
            remain pending sufficient independent primary observations.
          </p>
        </article>
      </section>
    </main>
  );
}
