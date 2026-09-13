import Link from "next/link";

export default function EvidencePage(){
  const items = [
    ["01","Organization","BOI public identity, mission and research scope.","/about"],
    ["02","Research record","Flagship Project 1 and its documented research phases.","/research/project-1"],
    ["03","Methodology","Methods, modelling choices and analytical pipeline.","/research/project-1/methodology"],
    ["04","Data & sources","Data provenance and source documentation.","/research/project-1/data-sources"],
    ["05","Validation","Quality controls, validation gates and limitations.","/research/project-1/validation"],
    ["06","Reproducibility","Code, records and reproducibility materials.","/research/project-1/reproducibility"],
    ["07","Citation","How the BOI research record can be cited.","/research/project-1/citation"],
  ];
  return <main className="section"><div className="wrap">
    <span className="eyebrow">Public evidence</span>
    <h1>How to verify BOI</h1>
    <p className="lead">This page is the public verification map for Burundi Optimization & Intelligence. It separates organizational identity from research evidence and makes the research record easy to inspect.</p>
    <div className="grid">
      {items.map(([n,t,d,u])=><article className="card" key={n}>
        <span className="eyebrow">{n}</span><h2>{t}</h2><p>{d}</p>
        <Link className="btn secondary" href={u}>Open record →</Link>
      </article>)}
    </div>
    <section className="section">
      <div className="project">
        <span className="eyebrow">Evidence standard</span>
        <h2>Claims stay proportional to the evidence.</h2>
        <p>BOI distinguishes computational modelling, analytical results, public/secondary evidence and empirical validation. Where validation is incomplete, that limitation remains visible in the public record.</p>
      </div>
    </section>
  </div></main>
}
