import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { translations, type Locale } from "@/translations";

const productionUrl = "https://www.handwerkersofort.com";

export const languageAlternates = {
  "de-DE": `${productionUrl}/`,
  "fr-FR": `${productionUrl}/fr`,
  "x-default": `${productionUrl}/`,
};

export function homepageMetadata(locale: Locale): Metadata {
  const seo = translations[locale].seo;
  const canonical = locale === "fr" ? `${productionUrl}/fr` : `${productionUrl}/`;

  return {
    metadataBase: new URL(productionUrl),
    title: seo.title,
    description: seo.description,
    keywords: ["Handwerker", "Kleinreparaturen", "Möbelmontage", "Hausmeisterservice", siteConfig.city],
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    robots: { index: true, follow: true },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}
