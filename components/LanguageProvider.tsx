"use client";

import { createContext, useContext, useMemo } from "react";
import { type AppTranslations, type Locale, translations } from "@/translations";

type LanguageContextValue = {
  locale: Locale;
  t: AppTranslations;
  routePrefix: "/" | "/fr";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    t: translations[locale],
    routePrefix: locale === "fr" ? "/fr" : "/",
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
