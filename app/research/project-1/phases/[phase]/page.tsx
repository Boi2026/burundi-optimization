import { notFound } from "next/navigation";
import { getPhase, phases } from "@/data/phases";

export const dynamicParams = false;

export function generateStaticParams() {
  return phases.map((phase) => ({
    phase: String(phase.id).padStart(2, "0"),
  }));
}

export default async function PhasePage({
  params,
}: {
  params: Promise<{ phase: string }>;
}) {
  const { phase } = await params;

  const id = Number(phase);

  if (!Number.isInteger(id) || id < 1 || id > 44) {
    notFound();
  }

  const currentPhase = getPhase(id);

  if (!currentPhase) {
    notFound();
  }

  const previousPhase =
    id > 1 ? String(id - 1).padStart(2, "0") : null;

  const nextPhase =
    id < 44 ? String(id + 1).padStart(2, "0") : null;

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">
          BOI RESEARCH · PROJECT 1 · PHASE{" "}
          {String(id).padStart(2, "0")}
        </p>

        <h1>{currentPhase.title}</h1>

        <p className="lead">
          Research-process record for the Graph-Based Combinatorial
          Optimization for Agricultural Supply Networks project.
        </p>

        <div className="notice">
          <strong>Status:</strong> {currentPhase.status}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">RESEARCH PROCESS</p>

        <h2>Phase {String(id).padStart(2, "0")}</h2>

        <div className="card">
          <p>
            <strong>Research group:</strong>{" "}
            {currentPhase.group}
          </p>

          <p>
            <strong>Phase status:</strong>{" "}
            {currentPhase.status}
          </p>

          <p>
            <strong>Record:</strong>{" "}
            {currentPhase.detail}
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">SCIENTIFIC DISCLOSURE</p>

        <h2>Research status</h2>

        <div className="notice">
          This phase is presented as part of the documented BOI
          research process. The website does not upgrade analytical
          or secondary evidence into empirical validation.
        </div>
      </section>

      <section className="section">
        <div className="grid two">
          {previousPhase && (
            <a
              className="card"
              href={`/research/project-1/phases/${previousPhase}`}
            >
              ← Previous phase
            </a>
          )}

          {nextPhase && (
            <a
              className="card"
              href={`/research/project-1/phases/${nextPhase}`}
            >
              Next phase →
            </a>
          )}
        </div>
      </section>

      <section className="section">
        <a
          className="button"
          href="/research/project-1"
        >
          Back to Project 1
        </a>
      </section>
    </main>
  );
}
