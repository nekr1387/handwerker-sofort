"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/translations";

const options: Array<{ locale: Locale; label: "german" | "french" }> = [
  { locale: "de", label: "german" },
  { locale: "fr", label: "french" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white/80 p-1.5 text-[13px] font-extrabold tracking-[.08em] text-slate-500 shadow-sm ${className}`}
      aria-label={t.language.label}
    >
      {options.map((option, index) => {
        const active = locale === option.locale;
        return (
          <span key={option.locale} className="inline-flex items-center">
            <button
              type="button"
              onClick={() => setLocale(option.locale)}
              className={`rounded-full px-3 py-2 transition ${active ? "bg-[#10233f] text-white shadow-sm" : "hover:bg-blue-50 hover:text-[#2563eb]"}`}
              aria-pressed={active}
            >
              {t.language[option.label]}
            </button>
            {index === 0 && <span className="px-1 text-slate-300" aria-hidden="true">|</span>}
          </span>
        );
      })}
    </div>
  );
}
