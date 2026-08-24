import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export default function ProductionReference() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Production reference</p>
          <h1>Public-page captures, isolated from production systems.</h1>
          <p className="lede">Two viewport screenshots document the public homepage presentation. They are reference images, not source parity or operational evidence.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <SectionHeading eyebrow="Captured 2026-08-23" title="Desktop and mobile views.">
            <p>The browser-created PNG files contain no embedded location data and were captured only from the publicly accessible homepage.</p>
          </SectionHeading>
          <div className="screenshot-grid">
            <figure className="desktop-shot">
              <Image src="/screenshots/hailking-home-desktop-1440x900.png" alt="HailKing production homepage at desktop width" width={1440} height={900} />
              <figcaption>Desktop · 1440 × 900</figcaption>
            </figure>
            <figure className="mobile-shot">
              <Image src="/screenshots/hailking-home-mobile-390x844.png" alt="HailKing production homepage at mobile width" width={390} height={844} />
              <figcaption>Mobile · 390 × 844</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
