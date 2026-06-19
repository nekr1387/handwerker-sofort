import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Handwerker Sofort | Handwerker Service & Kleinreparaturen in ${siteConfig.city}`,
  description:
    "Handwerker Sofort bietet schnelle Hilfe für Möbelmontage, Kleinreparaturen, Silikonfugen, Lampen, Regale, Hausmeisterservice und praktische Arbeiten rund um Haus und Wohnung.",
  keywords: ["Handwerker", "Kleinreparaturen", "Möbelmontage", "Hausmeisterservice", siteConfig.city],
  openGraph: {
    title: `Handwerker Sofort in ${siteConfig.city}`,
    description: "Schnelle, saubere und zuverlässige Hilfe rund um Haus und Wohnung.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Handwerker Sofort in ${siteConfig.city}`,
    description: "Montage, Kleinreparaturen und praktische Hilfe. Jetzt kostenlos anfragen.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
