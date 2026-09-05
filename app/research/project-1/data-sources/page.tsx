export default function DataSourcesPage() {
  const sources = [
    {
      name: "World Bank — Real-Time Food Prices",
      type: "Secondary / public",
      role: "Market-level food price evidence",
      details:
        "The current Burundi RTFP dataset covers 74 markets and approximately 17,700 observations across ten food commodities. The dataset combines direct price measurements and model-based estimates and is subject to revision.",
      status: "Integrated as the principal market-price reference layer",
    },
    {
      name: "INSBU — Monthly Price Bulletins",
      type: "Secondary / official",
      role: "Official Burundi price evidence",
      details:
        "INSBU monthly bulletins provide commodity-price information at province level. Historical bulletins from the 18-province administrative system were reviewed, together with the five-province system used from July 2025.",
      status: "Controlled secondary evidence",
    },
    {
      name: "INSBU — Agricultural Statistics",
      type: "Secondary / official",
      role: "Agricultural structure and production context",
      details:
        "RGPHAE agricultural modules, agricultural producer-price statistics and related INSBU publications provide official evidence on agricultural households, production systems and agricultural markets.",
      status: "Registered for controlled integration",
    },
    {
      name: "OpenStreetMap",
      type: "Open geospatial data",
      role: "Road-network and accessibility layer",
      details:
        "The BOI analytical network was constructed from OpenStreetMap road data. The retained network contains approximately 37,981.7 km of roads and supports market-to-market routing.",
      status: "Integrated into the analytical baseline",
    },
    {
      name: "BOI Price and Market Processing",
      type: "Derived analytical layer",
      role: "Normalization, crosswalks and optimization inputs",
      details:
        "BOI processing harmonizes commodities, dates, units and market identifiers before applying the optimization framework. Province-level evidence is not automatically assigned to individual markets.",
      status: "Controlled and reproducible",
    },
    {
      name: "External Freight Evidence",
      type: "Secondary / acquisition targets",
      role: "Transport-cost calibration",
      details:
        "Public evidence confirms the importance of domestic freight costs, but transaction-level agricultural freight tariffs remain insufficient for empirical recalibration. A literature benchmark of 811.331 BIF per tonne-kilometre is therefore retained only as an external benchmark.",
      status: "Empirical acquisition pending",
    },
  ];

  return (
    <main className="container">
      <section className="section">
        <p className="eyebrow">PROJECT 1 · DATA</p>

        <h1>Data &amp; Sources</h1>

        <p className="lead">
          BOI combines public agricultural price data, official Burundian
          statistics and open geospatial data to construct a reproducible
          analytical evidence base for agricultural supply-network
          optimization.
        </p>

        <div className="notice">
          <strong>Scientific data-status note</strong>
          <p>
            Public and secondary datasets have been integrated under explicit
            provenance controls. Primary empirical observations required for
            freight-cost calibration, supply, demand, cost, logistics capacity
            and independent holdout validation have not yet reached the
            threshold required for empirical model validation.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">SOURCE REGISTER</p>
        <h2>Evidence architecture</h2>

        <div className="grid">
          {sources.map((source) => (
            <article className="card" key={source.name}>
              <span className="tag">{source.type}</span>
              <h3>{source.name}</h3>

              <p>
                <strong>Role:</strong> {source.role}
              </p>

              <p>{source.details}</p>

              <p>
                <strong>Status:</strong> {source.status}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">DATA GOVERNANCE</p>
        <h2>How BOI controls the evidence</h2>

        <div className="grid">
          <article className="card">
            <h3>Provenance</h3>
            <p>
              Each integrated source is classified according to origin,
              observation type and scientific role. Secondary evidence is not
              presented as primary field observation.
            </p>
          </article>

          <article className="card">
            <h3>Normalization</h3>
            <p>
              Commodity names, measurement units, dates and geographic
              identifiers are harmonized before analytical processing.
            </p>
          </article>

          <article className="card">
            <h3>Geographic integrity</h3>
            <p>
              Province-level INSBU observations are not silently converted
              into market-level observations. Geographic crosswalks require
              explicit evidence.
            </p>
          </article>

          <article className="card">
            <h3>Reproducibility</h3>
            <p>
              Data dictionaries, source registers, quality-control files and
              processing specifications are maintained as part of the BOI
              research record.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">EMPIRICAL VALIDATION</p>
        <h2>What is still required?</h2>

        <div className="card">
          <p>
            A professional research platform must distinguish an analytical
            result from an empirically validated result. BOI therefore keeps
            the following acquisition gates explicit:
          </p>

          <ul>
            <li>Transaction-level freight observations</li>
            <li>Observed supply and demand quantities</li>
            <li>Transport and operating cost components</li>
            <li>Verified logistics and corridor capacity</li>
            <li>Observed accessibility and road-condition evidence</li>
            <li>Independent holdout observations for out-of-sample testing</li>
          </ul>

          <p>
            Once sufficient independent observations are acquired, the
            recalibration protocol can be executed and the model evaluated
            against out-of-sample evidence.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">TRANSPARENCY</p>
        <h2>Data limitations</h2>

        <p className="lead">
          The current Project 1 baseline is analytically finalized and
          reproducible, but it should not be described as empirically
          validated. This distinction is part of BOI's scientific disclosure
          standard.
        </p>

        <a className="button" href="/research/project-1/validation">
          View validation status →
        </a>
      </section>
    </main>
  );
      }
