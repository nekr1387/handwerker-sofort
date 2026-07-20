"use client";

import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-site flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-black text-[#0b2147]"><Wrench className="text-[#1456a0]" /> Handwerker Sofort</Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-[#1456a0]"><ArrowLeft size={17} /> {t.legal.home}</Link>
        </div>
      </header>
      <article className="container-site max-w-4xl py-16">
        <h1 className="section-title">{title}</h1>
        <div className="card mt-8 space-y-7 p-6 leading-7 text-slate-700 sm:p-10">{children}</div>
      </article>
    </main>
  );
}
