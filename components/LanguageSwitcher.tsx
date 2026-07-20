"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/translations";

const options: Array<{ locale: Locale; label: "german" | "french" }> = [
  { locale: "de", label: "german" },
  { locale: "fr", label: "french" },
];

export function LanguageSwitcher({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const wrapperSize = compact ? "p-0.5 text-[11px]" : "p-1.5 text-[13px]";
  const buttonSize = compact ? "px-1.5 py-1" : "px-3 py-2";
  const separatorSize = compact ? "px-0.5" : "px-1";

  return (
    <div
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white/80 ${wrapperSize} font-extrabold tracking-[.08em] text-slate-500 shadow-sm ${className}`}
      aria-label={t.language.label}
    >
      {options.map((option, index) => {
        const active = locale === option.locale;
        return (
          <span key={option.locale} className="inline-flex items-center">
            <button
              type="button"
              onClick={() => setLocale(option.locale)}
              className={`rounded-full ${buttonSize} transition ${active ? "bg-[#10233f] text-white shadow-sm" : "hover:bg-blue-50 hover:text-[#2563eb]"}`}
              aria-pressed={active}
            >
              {t.language[option.label]}
            </button>
            {index === 0 && <span className={`${separatorSize} text-slate-300`} aria-hidden="true">|</span>}
          </span>
        );
      })}
    </div>
  );
}
