import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: .3 },
    { url: `${siteConfig.url}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: .3 },
  ];
}
