import Link from "next/link";

export const metadata = {
  title: "Citation | Agricultural Supply Network Optimization in Burundi",
};

export default function Citation() {
  return (
    <>
      <header className="site-nav">
        <div className="wrap nav">
          <Link className="brand" href="/">
            BOI<span>.</span>
          </Link>

          <nav className="links">
            <Link href="/research/project-1">Research 01</Link>
            <Link href="/research/project-1/reproducibility">
              Reproducibility
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <div className="wrap">
            <Link className="back" href="/research/project-1">
              ← Research 01
            </Link>

            <span className="eyebrow">Citation</span>

            <h1>How to reference this research</h1>

            <p>
              Use the research title, organization, year, and version when
              referencing the public BOI research record.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="card">
              <p className="eyebrow">Recommended citation</p>

              <h2>Research record</h2>

              <p>
                Burundi Optimization & Intelligence (BOI). (2026).{" "}
                <em>
                  Agricultural Supply Network Optimization in Burundi: A
                  Graph-Based Combinatorial Optimization Framework
                </em>
                . BOI Research Record, Version 1.0.
              </p>

              <div className="note" style={{ marginTop: 24 }}>
                <strong>Version and reproducibility</strong>
                <p>
                  This research record is maintained as a versioned public
                  research record. When reproducing a specific result, cite
                  the corresponding repository version or commit in addition
                  to this research record.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="card">
              <p className="eyebrow">Research record</p>

              <h2>Publication status</h2>

              <p>
                Version 1.0 documents the analytical research baseline,
                methodology, data sources, validation framework, and
                reproducibility boundary of this study.
              </p>

              <p>
                Empirical validation and model recalibration remain pending
                until sufficient independent primary observations are
                available.
              </p>

              <Link className="button" href="/research/project-1/reproducibility">
                View reproducibility record
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          BOI Research 01 · Citation · Version 1.0
        </div>
      </footer>
    </>
  );
}
