import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { homepageMetadata } from "@/lib/seo";

export const metadata: Metadata = homepageMetadata("de");

export default function Page() {
  return <HomePage />;
}
