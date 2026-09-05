import Link from "next/link";

export const metadata = {
  title: "Citation | BOI Project 1",
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
            <Link href="/research/project-1">Project 1</Link>
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
              ← Project 1
            </Link>

            <span className="eyebrow">Citation</span>

            <h1>How to reference this research</h1>

            <p>
              Use the project title, organization and version/date when
              referencing the public research record.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="card">
              <h3>Recommended reference</h3>

              <p>
                Burundi Optimization & Intelligence (BOI).{" "}
                <em>
                  Graph-Based Combinatorial Optimization for Agricultural
                  Supply Networks
                </em>
                . BOI Project 1 research record, 2026.
              </p>

              <div className="note" style={{ marginTop: 18 }}>
                Versioned repository materials should be cited alongside the
                research record when reproducing a specific result.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">BOI Project 1 · Citation</div>
      </footer>
    </>
  );
}
