import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="section-number">{eyebrow}</p>
      <div className="section-heading">
        <h2>{title}</h2>
        <div className="section-copy">{children}</div>
      </div>
    </div>
  );
}
