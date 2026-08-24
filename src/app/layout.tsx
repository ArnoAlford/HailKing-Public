import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "HailKing Professionals | Public Codebase",
  description:
    "A sanitized, static reference implementation for the HailKing Professionals web experience.",
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
