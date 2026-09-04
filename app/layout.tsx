import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOI | Burundi Optimization & Intelligence",
  description: "Research, optimization, artificial intelligence and data-driven systems for complex problems.",
};

export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
