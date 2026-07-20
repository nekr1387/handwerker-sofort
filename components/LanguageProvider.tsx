"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, type AppTranslations, type Locale, translations } from "@/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: AppTranslations;
};

const storageKey = "handwerker-sofort-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

function updateMeta(name: string, value: string) {
  const selector = name.startsWith("og:") ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (name.startsWith("og:")) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }

  element.content = value;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "de" || saved === "fr") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    const seo = translations[locale].seo;
    const applySeo = () => {
      document.documentElement.lang = locale;
      document.title = seo.title;
      updateMeta("description", seo.description);
      updateMeta("og:title", seo.title);
      updateMeta("og:description", seo.description);
      updateMeta("twitter:title", seo.title);
      updateMeta("twitter:description", seo.description);
    };

    applySeo();
    window.requestAnimationFrame(applySeo);
    const timeoutId = window.setTimeout(applySeo, 500);

    return () => window.clearTimeout(timeoutId);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale(nextLocale) {
      window.localStorage.setItem(storageKey, nextLocale);
      setLocaleState(nextLocale);
    },
    t: translations[locale],
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
