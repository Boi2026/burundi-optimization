import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BOI",
  description:
    "About Burundi Optimization & Intelligence (BOI), a research-focused organization developing computational methods in optimization, AI, data science, and spatial intelligence.",
  alternates: {
    canonical: "https://burundioptimization.com/about",
  },
  openGraph: {
    title: "About BOI | Burundi Optimization & Intelligence",
    description:
      "Research-focused computational methods in optimization, AI, data science, and spatial intelligence.",
    url: "https://burundioptimization.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <header className="site-nav">
        <div className="wrap nav">
          <Link className="brand" href="/">
            BOI<span>.</span>
          </Link>

          <nav className="links">
            <Link href="/research">Research</Link>
            <Link href="/about">About BOI</Link>
            <Link href="/research/project-1">Research 01</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">ABOUT BOI</p>

            <h1>Burundi Optimization &amp; Intelligence</h1>

            <p className="lede">
              A research-focused organization developing computational methods
              for complex problems in Burundi and emerging economies.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">IDENTITY</p>

              <h2>Research and technology, grounded in evidence.</h2>
            </div>

            <div className="grid two">
              <article className="card">
                <h3>What BOI does</h3>

                <p>
                  BOI develops computational research across optimization,
                  artificial intelligence, data science, graph-based modelling,
                  spatial intelligence, and operations research.
                </p>

                <p>
                  The work is organized as traceable research records with
                  documented methods, data provenance, analytical results, and
                  explicit validation boundaries.
                </p>
              </article>

              <article className="card">
                <h3>Where it applies</h3>

                <p>
                  BOI focuses on complex development problems where networks,
                  markets, geography, uncertainty, and constrained resources
                  interact.
                </p>

                <p>
                  Burundi is a primary application context, while the methods
                  are designed with broader emerging-economy applications in
                  mind.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">RESEARCH PRINCIPLES</p>

              <h2>Claims should remain proportional to the evidence.</h2>
            </div>

            <div className="grid">
              <article className="card">
                <h3>01 — Evidence provenance</h3>
                <p>
                  Important inputs are identified so they can be traced and
                  reviewed.
                </p>
              </article>

              <article className="card">
                <h3>02 — Reproducibility</h3>
                <p>
                  Methods, assumptions, analytical stages, and records are
                  documented to support independent reproduction.
                </p>
              </article>

              <article className="card">
                <h3>03 — Explicit limitations</h3>
                <p>
                  Analytical findings are separated from empirical validation.
                  Missing observations are not replaced with invented data.
                </p>
              </article>

              <article className="card">
                <h3>04 — Iterative research</h3>
                <p>
                  Research records are versioned so new evidence can lead to
                  recalibration, validation, or revised results.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">PUBLIC RESEARCH RECORD</p>

              <h2>
                Research 01 · Agricultural Supply Network Optimization in
                Burundi
              </h2>

              <p>
                BOI&apos;s flagship public research record develops a
                graph-based combinatorial optimization framework for market
                connectivity, transport sensitivity, corridor prioritization,
                and multi-product allocation.
              </p>
            </div>

            <article className="card">
              <p>
                The record distinguishes the finalized analytical baseline
                from empirical validation that remains incomplete. Results,
                methodology, data sources, validation checks, reproducibility
                materials, and research phases are publicly documented.
              </p>

              <div className="actions">
                <Link
                  className="button primary"
                  href="/research/project-1"
                >
                  Explore Research 01
                </Link>

                <Link
                  className="button secondary"
                  href="/research"
                >
                  View research portfolio
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section cta">
          <div className="wrap">
            <p className="eyebrow">COLLABORATION</p>

            <h2>Data, research and technology partnerships.</h2>

            <p>
              BOI welcomes collaboration with researchers, universities,
              technology organizations, development practitioners, and data
              partners whose contributions can strengthen the evidence base
              and practical value of computational research.
            </p>

            <div className="actions">
              <Link
                className="button secondary"
                href="/research"
              >
                Explore research
              </Link>

              <Link
                className="button secondary"
                href="/"
              >
                Return to BOI
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <span>
            © 2026 Burundi Optimization &amp; Intelligence (BOI)
          </span>

          <span>
            Research platform · Evidence-led · Reproducibility-first
          </span>
        </div>
      </footer>
    </>
  );
                                                         }
