const included = [
  "A static App Router foundation",
  "Responsive layout and typography patterns",
  "Accessible navigation and focus states",
  "A documented public-source boundary",
];

const excluded = [
  "Production APIs, forms, and server actions",
  "Advertising, analytics, or account identifiers",
  "Customer, reviewer, employee, or property data",
  "Operational runbooks, credentials, and deployment configuration",
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">HailKing Professionals</p>
            <h1 id="hero-title">Public by design. Private by default.</h1>
            <p className="lede">
              This repository is a deliberately sanitized, static reference for the
              HailKing web experience. The production application and its operational
              systems remain private.
            </p>
            <div className="actions">
              <a
                className="primary-action"
                href="https://hailkingpros.com/"
                rel="noopener noreferrer"
              >
                Visit HailKing Professionals
              </a>
              <a className="text-action" href="#scope">
                Review the public scope
              </a>
            </div>
          </div>

          <aside className="system-card" aria-label="Public repository architecture">
            <p className="card-label">Repository mode</p>
            <p className="card-value">Static export</p>
            <div className="system-line" />
            <dl>
              <div>
                <dt>Runtime secrets</dt>
                <dd>None</dd>
              </div>
              <div>
                <dt>API routes</dt>
                <dd>None</dd>
              </div>
              <div>
                <dt>Production traffic</dt>
                <dd>Not served</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <div className="shell">
          <p className="section-number">01 / Approach</p>
          <div className="section-heading">
            <h2 id="principles-title">A small surface is a safer surface.</h2>
            <p>
              The public project demonstrates structure and presentation without
              reproducing production data, integrations, media libraries, or internal
              implementation details.
            </p>
          </div>

          <div className="principle-grid">
            <article>
              <span aria-hidden="true">A</span>
              <h3>Static first</h3>
              <p>No backend, database, authentication layer, or external service is required.</p>
            </article>
            <article>
              <span aria-hidden="true">B</span>
              <h3>Minimal dependencies</h3>
              <p>The project uses only the framework and React at runtime.</p>
            </article>
            <article>
              <span aria-hidden="true">C</span>
              <h3>Explicit boundaries</h3>
              <p>Anything with unclear ownership or sensitivity is excluded.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="scope" id="scope" aria-labelledby="scope-title">
        <div className="shell">
          <p className="section-number light">02 / Public scope</p>
          <div className="section-heading light-heading">
            <h2 id="scope-title">The boundary is part of the codebase.</h2>
            <p>
              Every contribution should preserve this separation. The public project is
              intentionally incapable of operating HailKing production systems.
            </p>
          </div>

          <div className="scope-grid">
            <article>
              <p className="scope-label">Included</p>
              <ul>
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="excluded-card">
              <p className="scope-label">Excluded</p>
              <ul>
                {excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-row">
          <p>HailKing Professionals public codebase</p>
          <a href="https://hailkingpros.com/" rel="noopener noreferrer">
            hailkingpros.com
          </a>
        </div>
      </footer>
    </main>
  );
}
