import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://burundioptimization.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BOI | Burundi Optimization & Intelligence",
    template: "%s | BOI",
  },
  description:
    "Burundi Optimization & Intelligence (BOI) is a research-focused organization developing computational methods in optimization, artificial intelligence, data science, and spatial intelligence for complex development problems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Burundi Optimization & Intelligence",
    title: "BOI | Burundi Optimization & Intelligence",
    description:
      "Research-focused computational methods in optimization, AI, data science, and spatial intelligence, with applications in Burundi and emerging economies.",
  },
  twitter: {
    card: "summary",
    title: "BOI | Burundi Optimization & Intelligence",
    description:
      "Research-focused computational methods in optimization, AI, data science, and spatial intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
