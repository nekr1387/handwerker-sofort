"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
  ["Leistungen", "#leistungen"],
  ["Über uns", "#ueber-uns"],
  ["Ablauf", "#ablauf"],
  ["Preise", "#preise"],
  ["Kontakt", "#kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-[0_10px_30px_rgba(15,35,66,.05)] backdrop-blur-xl">
      <div className="container-site flex h-[82px] items-center justify-between">
        <a href="#start" className="flex items-center gap-3" aria-label="Zur Startseite">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <Image
              src="/logo.png"
              alt="Handwerker Sofort Logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="text-[1.32rem] font-extrabold tracking-[-.03em] text-[#10233f]">
            Handwerker <span className="text-[#1456a0]">Sofort</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-1.5 py-2 text-[0.96rem] font-semibold tracking-[.025em] text-slate-600 hover:text-[#2563eb]">
              {label}
            </a>
          ))}
        </nav>
        <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary hidden text-[0.96rem] lg:inline-flex">
          <Phone size={18} /> Jetzt anrufen
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm lg:hidden"
          aria-expanded={open}
          aria-label="Menü öffnen"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-site grid gap-1 border-t border-slate-100 py-4 lg:hidden" aria-label="Mobile Navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-semibold tracking-[.015em] text-slate-700 hover:bg-blue-50 hover:text-[#2563eb]"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
