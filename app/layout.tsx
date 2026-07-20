import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

const previewTitle = "Handwerker Sofort in Offenburg und Kehl";
const previewDescription = "Schnelle, saubere und zuverlässige Hilfe rund um Haus und Wohnung.";
const previewUrl = "https://www.handwerkersofort.com";

export const metadata: Metadata = {
  metadataBase: new URL(previewUrl),
  title: previewTitle,
  description: previewDescription,
  keywords: ["Handwerker", "Kleinreparaturen", "Möbelmontage", "Hausmeisterservice", siteConfig.city],
  openGraph: {
    title: previewTitle,
    description: previewDescription,
    url: previewUrl,
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: previewTitle,
    description: previewDescription,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
