import Image from "next/image";
import Link from "next/link";

const navigation = [
  ["Design system", "/design-system/"],
  ["Examples", "/examples/residential/"],
  ["Production reference", "/production-reference/"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link className="brand-link" href="/" aria-label="HailKing Public home">
          <Image
            src="/brand/hailking-primary.webp"
            alt="HailKing Professionals"
            width={900}
            height={483}
            priority
          />
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-row">
        <p>HailKing Professionals public codebase</p>
        <a href="https://hailkingpros.com/" rel="noopener noreferrer">
          hailkingpros.com
        </a>
      </div>
    </footer>
  );
}
