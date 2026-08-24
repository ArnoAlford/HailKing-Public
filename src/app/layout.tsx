import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HailKing Professionals | Public Codebase",
  description:
    "A sanitized, static reference implementation for the HailKing Professionals web experience.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
