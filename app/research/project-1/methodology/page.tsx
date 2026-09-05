export default function MethodologyPage() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Project 1 · Methodology</p>
        <h1>Methodology</h1>
        <p className="lede">
          A reproducible analytical framework for graph-based combinatorial
          optimization of agricultural supply networks in Burundi.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Research design</p>
          <h2>From market prices to network optimization</h2>
        </div>

        <div className="grid">
          <article className="card">
            <h3>1. Market price layer</h3>
            <p>
              The analytical system uses agricultural market-price observations
              to identify potential price differentials between market pairs.
            </p>
          </article>

          <article className="card">
            <h3>2. Road-network layer</h3>
            <p>
              OpenStreetMap road data are transformed into a routable analytical
              network and used to estimate road distance between market nodes.
            </p>
          </article>

          <article className="card">
            <h3>3. Opportunity screening</h3>
            <p>
              Ordered origin-destination pairs are evaluated using gross price
              gaps and transport-cost scenarios.
            </p>
          </article>

          <article className="card">
            <h3>4. Flow optimization</h3>
            <p>
              Linear programming is used to maximize normalized net margins
              subject to product-level supply, demand and shared-corridor
              constraints.
            </p>
          </article>

          <article className="card">
            <h3>5. Robustness analysis</h3>
            <p>
              Candidate routes are evaluated across multiple transport-cost
              scenarios to distinguish robust, strong, moderate and sensitive
              opportunities.
            </p>
          </article>

          <article className="card">
            <h3>6. Spatial prioritization</h3>
            <p>
              Corridor-level indicators combine robustness, product breadth,
              optimization persistence and spatial efficiency to produce a
              research-priority hierarchy.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Optimization model</p>
          <h2>Constrained network allocation</h2>
        </div>

        <div className="card">
          <p>
            The core allocation problem is solved with linear programming.
            Decision variables represent normalized flows on profitable
            product-specific origin-destination arcs.
          </p>

          <p>
            Constraints include normalized origin supply limits, destination
            demand limits and shared corridor-capacity scenarios. The objective
            is to maximize total normalized net margin after transport costs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Reproducibility</p>
          <h2>Controlled analytical workflow</h2>
        </div>

        <div className="card">
          <p>
            The project records data preparation, network construction,
            optimization, sensitivity analysis, corridor prioritization,
            validation checks and research limitations as separate stages.
          </p>

          <p>
            All normalized optimization quantities are analytical units and
            should not be interpreted as observed tonnes or transaction
            volumes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Scientific status</p>
          <h2>What the methodology does — and does not — establish</h2>
        </div>

        <div className="notice">
          <strong>Important:</strong> The analytical model is finalized and
          reproducible, but it has not been empirically validated with a
          sufficient independent set of primary freight, supply, demand,
          transaction-cost and holdout observations. Recalibration therefore
          remains blocked pending empirical evidence.
        </div>
      </section>
    </main>
  );
}
