export default function Project1ResultsPage() {
  const transportScenarios = [
    ["500", "22,992", "354", "446,682.36"],
    ["750", "22,084", "350", "441,679.13"],
    ["811.331", "21,848", "349", "440,398.14"],
    ["1,000", "21,226", "345", "436,811.97"],
    ["1,250", "20,373", "345", "432,191.97"],
    ["1,500", "19,505", "345", "427,724.36"],
  ];

  const robustness = [
    ["Goat meat", "98.2%"],
    ["Onions", "87.8%"],
    ["Tomatoes", "87.1%"],
    ["Rice", "84.6%"],
    ["Bananas", "84.4%"],
    ["Potatoes", "82.4%"],
    ["Beans", "75.2%"],
    ["Maize flour", "65.6%"],
    ["Cassava flour", "64.2%"],
    ["Maize", "61.1%"],
  ];

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">BOI RESEARCH · 01 · RESULTS</p>

        <h1>Results</h1>

        <p className="lead">
          Quantitative results from the analytical optimization framework for
          agricultural supply networks in Burundi.
        </p>

        <div className="notice">
          <strong>Scientific status:</strong> analytically reproducible, but
          not yet empirically validated. Independent transaction-level
          observations remain required for calibration and out-of-sample
          testing.
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <span>Markets</span>
          <strong>72</strong>
          <p>Markets linked to the BOI road-routing layer.</p>
        </article>

        <article className="card">
          <span>Corridors</span>
          <strong>2,556</strong>
          <p>Unique unordered market corridors evaluated.</p>
        </article>

        <article className="card">
          <span>Road network</span>
          <strong>37,981.7 km</strong>
          <p>Retained OSM road-network length.</p>
        </article>

        <article className="card">
          <span>Scenarios</span>
          <strong>6</strong>
          <p>Transport-cost scenarios evaluated.</p>
        </article>
      </section>

      <section className="section">
        <p className="eyebrow">01 · NETWORK STRUCTURE</p>

        <h2>Road-network and corridor results</h2>

        <p>
          The prepared routing layer contains 65,566 nodes and 86,205 edges.
          All 72 BOI markets were snapped to the network, producing a complete
          72×72 market distance matrix with 2,556 unique unordered corridors.
        </p>

        <div className="grid two">
          <article className="card">
            <span>Median corridor distance</span>
            <strong>112.674 km</strong>
          </article>

          <article className="card">
            <span>Mean corridor distance</span>
            <strong>115.385 km</strong>
          </article>

          <article className="card">
            <span>Median road / straight-line ratio</span>
            <strong>1.347</strong>
          </article>

          <article className="card">
            <span>Maximum ratio</span>
            <strong>5.481</strong>
          </article>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">02 · PRICE-GAP SCREENING</p>

        <h2>Potential arbitrage opportunities</h2>

        <p>
          Ordered origin–destination pairs were screened using the latest
          available product-market prices. The resulting opportunities are
          modeled signals, not observed transactions or realized profits.
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Transport cost (BIF/t-km)</th>
                <th>Candidate routes</th>
                <th>Selected normalized routes</th>
                <th>Normalized margin</th>
              </tr>
            </thead>

            <tbody>
              {transportScenarios.map(
                ([cost, candidates, selected, margin]) => (
                  <tr key={cost}>
                    <td>{cost}</td>
                    <td>{candidates}</td>
                    <td>{selected}</td>
                    <td>{margin} BIF</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <p className="caption">
          The 811.331 BIF/t-km value is a literature-derived benchmark
          converted using the BRB exchange rate; it is not a current observed
          domestic agricultural freight tariff.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">03 · ROBUSTNESS</p>

        <h2>Product-level robustness across transport scenarios</h2>

        <p>
          Robustness is the share of screened route-product opportunities that
          remain profitable across all six modeled transport-cost scenarios.
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Robust share</th>
              </tr>
            </thead>

            <tbody>
              {robustness.map(([product, share]) => (
                <tr key={product}>
                  <td>{product}</td>
                  <td>{share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">04 · MULTI-PRODUCT ALLOCATION</p>

        <h2>Coupled flow optimization</h2>

        <p>
          The multi-product model jointly allocates normalized flows subject to
          product-level supply and demand bounds and shared corridor-capacity
          constraints. At 811.331 BIF/t-km with a capacity of three normalized
          units, the model selects 349 positive flow arcs and a total
          normalized objective value of 440,398.14 BIF.
        </p>

        <div className="grid two">
          <article className="card">
            <span>Benchmark</span>
            <strong>811.331 BIF/t-km</strong>
          </article>

          <article className="card">
            <span>Shared corridor capacity</span>
            <strong>3 units</strong>
          </article>

          <article className="card">
            <span>Positive flow arcs</span>
            <strong>349</strong>
          </article>

          <article className="card">
            <span>Mean normalized margin</span>
            <strong>1,261.89 BIF/kg</strong>
          </article>
        </div>

        <p className="caption">
          A normalized unit is a modeling unit, not a tonne, truckload, or
          observed shipment volume.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">05 · SPATIAL PRIORITIZATION</p>

        <h2>Priority corridors</h2>

        <p>
          Spatial prioritization combines corridor priority, optimization-flow
          persistence, robustness and product breadth. The resulting tiers are
          96 A, 534 B, 1,804 C and 122 D corridors.
        </p>

        <div className="grid four">
          <article className="card">
            <span>A · Strategic</span>
            <strong>96</strong>
          </article>

          <article className="card">
            <span>B · Priority</span>
            <strong>534</strong>
          </article>

          <article className="card">
            <span>C · Secondary</span>
            <strong>1,804</strong>
          </article>

          <article className="card">
            <span>D · Surveillance</span>
            <strong>122</strong>
          </article>
        </div>

        <div className="highlight">
          <strong>Top spatial corridor</strong>
          <span>Bukirasazi — Gitega</span>
          <small>Spatial priority score: 99.0833</small>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">06 · VALIDATION</p>

        <h2>Validation status</h2>

        <div className="grid two">
          <article className="card">
            <span>Analytical validation</span>
            <strong>Completed</strong>
            <p>
              Internal consistency and deterministic QA checks passed.
            </p>
          </article>

          <article className="card">
            <span>Reproducibility</span>
            <strong>Completed</strong>
            <p>
              Methods, assumptions and research packages are documented.
            </p>
          </article>

          <article className="card">
            <span>Secondary evidence</span>
            <strong>Controlled</strong>
            <p>
              Official INSBU and World Bank evidence is integrated under
              controlled crosswalks.
            </p>
          </article>

          <article className="card">
            <span>Primary empirical validation</span>
            <strong>Pending</strong>
            <p>
              Independent freight, cost, supply, demand and holdout
              observations remain required.
            </p>
          </article>
        </div>

        <p>
          BOI will label the model empirically validated only after independent
          observations are used for calibration and out-of-sample testing, with
          transparent error metrics and documented acceptance criteria.
        </p>
      </section>

      <section className="section cta">
        <p className="eyebrow">RESEARCH INTEGRITY</p>

        <h2>
          Analytical results are presented separately from empirical evidence.
        </h2>

        <p>
          This distinction is intentional: professional research must not
          present modeled assumptions as observed facts. The validation pathway
          remains open for future primary data acquisition and recalibration.
        </p>
      </section>
    </main>
  );
      
