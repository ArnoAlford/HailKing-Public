import Image from "next/image";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/section-heading";
import { manufacturerMarks } from "@/data/public-assets";

export default function DesignSystem() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="shell">
          <p className="eyebrow">Public design system</p>
          <h1>Brand foundations with a deliberately small surface.</h1>
          <p className="lede">Reusable visual primitives, approved marks, and accessibility behavior for this static showcase.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <SectionHeading eyebrow="01 / Foundations" title="Color, type, and interaction.">
            <p>High-contrast neutrals carry the interface. Red is reserved for emphasis, actions, and visible focus.</p>
          </SectionHeading>
          <div className="swatch-grid" aria-label="Color palette">
            {[["Paper", "#f4f1eb"], ["Ink", "#151515"], ["HailKing red", "#b32025"], ["Storm", "#202328"]].map(([name, value]) => (
              <div key={name} style={{ "--swatch": value } as CSSProperties}>
                <span aria-hidden="true" />
                <strong>{name}</strong><code>{value}</code>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section logo-section">
        <div className="shell">
          <SectionHeading eyebrow="02 / Marks" title="Approved brand and manufacturer references.">
            <p>These image files were re-encoded to remove source metadata. Manufacturer marks remain the property of their respective owners.</p>
          </SectionHeading>
          <div className="brand-showcase">
            <Image src="/brand/hailking-primary.webp" alt="HailKing Professionals primary logo" width={900} height={483} />
            <Image src="/brand/hailking-footer.png" alt="HailKing Professionals horizontal logo" width={1212} height={451} />
          </div>
          <div className="logo-wall">
            {manufacturerMarks.map((mark) => (
              <figure key={mark.name}>
                <Image src={mark.src} alt={`${mark.name} logo`} width={mark.width} height={mark.height} />
                <figcaption>{mark.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="legal-note">Identification and design reference only. Inclusion does not imply endorsement, affiliation, or a trademark license.</p>
        </div>
      </section>
    </main>
  );
}
