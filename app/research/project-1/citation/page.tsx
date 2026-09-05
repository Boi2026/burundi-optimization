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
              <h3>Recommended reference</h3>

              <p>
                Burundi Optimization & Intelligence (BOI). (2026).{" "}
                <em>
                  Agricultural Supply Network Optimization in Burundi: A
                  Graph-Based Combinatorial Optimization Framework
                </em>
                . BOI Research Record, Version 1.0.
              </p>

              <div className="note" style={{ marginTop: 18 }}>
                <strong>Version and reproducibility.</strong> This research
                record is maintained as a versioned public research record.
                When reproducing a specific result, cite the corresponding
                repository version or commit in addition to this research
                record.
              </div>
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
