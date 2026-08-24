import Link from "next/link";
import { examples } from "@/data/synthetic-examples";

export function ExamplePage({ kind }: { kind: keyof typeof examples }) {
  const example = examples[kind];
  return (
    <main id="main-content">
      <section className={`example-hero ${kind}`}>
        <div className="shell example-copy">
          <p className="eyebrow">{example.label}</p>
          <h1>{example.title}</h1>
          <p className="lede">{example.summary}</p>
          <p className="synthetic-notice">Fictional content · No production data</p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <div className="step-grid">
            {example.steps.map((step, index) => (
              <article key={step}>
                <span>0{index + 1}</span>
                <h2>{step}</h2>
                <p>Sample presentation copy intentionally omits real processes and promises.</p>
              </article>
            ))}
          </div>
          <div className="example-switcher">
            <Link href={kind === "residential" ? "/examples/commercial/" : "/examples/residential/"}>
              View the {kind === "residential" ? "commercial" : "residential"} example
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
