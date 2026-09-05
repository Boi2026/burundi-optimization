export default function Project1ResultsPage() {
  const transportScenarios = [
    { cost: "500", candidates: "22,992", selected: "354", margin: "446,682.36" },
    { cost: "750", candidates: "22,084", selected: "350", margin: "441,679.13" },
    { cost: "811.331", candidates: "21,848", selected: "349", margin: "440,458.54" },
    { cost: "1,000", candidates: "21,226", selected: "345", margin: "436,811.97" },
    { cost: "1,250", candidates: "20,373", selected: "345", margin: "432,191.97" },
    { cost: "1,500", candidates: "19,505", selected: "345", margin: "427,724.36" },
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
        <p className="eyebrow">BOI RESEARCH · PROJECT 1</p>
        <h1>Results</h1>
        <p className="lead">
          Quantitative results from the analytical optimization framework
          for agricultural supply networks in Burundi.
        </p>

        <div className="notice">
          <strong>Scientific status:</strong> the results below are
          analytically reproducible. They do not constitute empirical
          validation of the model because independent transaction-level
          freight, supply, demand and cost observations are still required.
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
          <span>Road distance</span>
          <strong>37,981.7 km</strong>
          <p>Retained OSM road network length.</p>
        </article>

        <article className="card">
          <span>Optimization</span>
          <strong>6</strong>
          <p>Transport-cost scenarios evaluated.</p>
        </article>
      </section>

      <section className="section">
        <p className="eyebrow">01 · NETWORK STRUCTURE</p>
        <h2>Road-network and corridor results</h2>

        <p>
          The routing layer contains 65,566 nodes and 86,205 edges after
          network preparation. All 72 markets were snapped to the network,
          producing a complete 72×72 market distance matrix with 2,556
          unique unordered corridors and no unreachable market pairs in the
          analytical network.
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
          The price-gap layer evaluates ordered origin–destination pairs
          using the latest available product-market prices. At the
          illustrative transport-cost scenarios, thousands of route-product
          combinations remain above the modeled break-even threshold. These
          are opportunity signals, not observed transactions or realized
          profits.
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
              {transportScenarios.map((r) => (
                <tr key={r.cost}>
                  <td>{r.cost}</td>
                  <td>{r.candidates}</td>
                  <td>{r.selected}</td>
                  <td>{r.margin} BIF</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="caption">
          The 811.331 BIF/t-km value is a literature-derived benchmark
          converted using the BRB exchange rate; it is not a current
          observed domestic agricultural freight tariff.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">03 · ROBUSTNESS</p>
        <h2>Product-level robustness across transport scenarios</h2>

        <p>
          Robustness measures the share of screened route-product
          opportunities that remain profitable across the six modeled
          transport-cost scenarios. Higher values indicate lower sensitivity
          to the assumed transport-cost range.
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
          The multi-product model jointly allocates normalized flows subject
          to product-level supply and demand bounds and shared
          corridor-capacity constraints. Under the 811.331 BIF/t-km
          benchmark with a corridor capacity of three normalized units, the
          model selects 349 positive flow arcs with a total normalized
          objective value of 440,398.14 BIF.
        </p>

        <div className="grid two">
          <article className="card">
            <span>Benchmark scenario</span>
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
          “Normalized unit” is a modeling unit and must not be interpreted
          as a tonne, truckload, or observed shipment volume.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">05 · SPATIAL PRIORITIZATION</p>
        <h2>Priority corridors</h2>

        <p>
          Spatial prioritization combines corridor priority, persistence in
          the optimization scenarios, robustness and product breadth. The
          spatial tiering identifies 96 A-tier, 534 B-tier, 1,804 C-tier and
          122 D-tier corridors.
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
        <p className="eyebrow">06 · VALIDATION STATUS</p>
        <h2>What these results establish — and what they do not</h2>

        <div className="grid two">
          <article className="card">
            <span>Analytical validation</span>
            <strong>Completed</strong>
            <p>
              Deterministic checks and internal consistency controls passed.
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
            <span>External secondary evidence</span>
            <strong>Ongoing</strong>
            <p>
              Public INSBU and World Bank evidence is being integrated under
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
          BOI will only label the model empirically validated after
          independent observations are used for calibration and
          out-of-sample testing, with transparent error metrics and
          documented acceptance criteria.
        </p>
      </section>

      <section className="section cta">
        <p className="eyebrow">NEXT</p>
        <h2>Explore the research evidence</h2>

        <p>
          Review the methodology, data sources,
