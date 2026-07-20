import type { MetadataRoute } from "next";
import { languageAlternates } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languageAlternates },
    },
    {
      url: `${siteConfig.url}/fr`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: .9,
      alternates: { languages: languageAlternates },
    },
    { url: `${siteConfig.url}/impressum`, lastModified: now, changeFrequency: "yearly", priority: .3 },
    { url: `${siteConfig.url}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: .3 },
  ];
}
