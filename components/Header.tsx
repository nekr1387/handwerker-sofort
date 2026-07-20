"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

const links = [
  ["services", "#leistungen"],
  ["examples", "#beispiele"],
  ["about", "#ueber-uns"],
  ["processPricing", "#ablauf"],
  ["contact", "#kontakt"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-[0_10px_30px_rgba(15,35,66,.05)] backdrop-blur-xl">
      <div className="container-site flex h-[82px] items-center justify-between gap-2 lg:gap-4">
        <a href="#start" className="flex min-w-0 flex-1 items-center gap-2 lg:flex-none lg:gap-3" aria-label={t.nav.homeAria}>
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 sm:h-12 sm:w-12">
            <Image
              src="/logo.png"
              alt="Handwerker Sofort Logo"
              fill
              sizes="(max-width: 639px) 44px, 48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="min-w-0 whitespace-nowrap text-[1.08rem] font-extrabold tracking-[-.03em] text-[#10233f] sm:text-[1.32rem]">
            Handwerker <span className="text-[#1456a0]">Sofort</span>
          </span>
        </a>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-7" aria-label={t.nav.aria}>
          {links.map(([key, href]) => (
            <a key={href} href={href} className="rounded-full px-1 py-2 text-[0.9rem] font-semibold tracking-[.025em] text-slate-600 hover:text-[#2563eb] xl:px-1.5 xl:text-[0.96rem]">
              {t.nav.links[key]}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
        <div className="hidden lg:block">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary text-[0.96rem]">
            <Phone size={18} /> {t.nav.call}
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12 lg:hidden"
          aria-expanded={open}
          aria-label={t.nav.menuOpen}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-site grid gap-1 border-t border-slate-100 py-4 lg:hidden" aria-label={t.nav.mobileAria}>
          {links.map(([key, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-semibold tracking-[.015em] text-slate-700 hover:bg-blue-50 hover:text-[#2563eb]"
            >
              {t.nav.links[key]}
            </a>
          ))}
          <div className="px-4 pt-3">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
