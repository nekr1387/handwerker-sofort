"use client";

import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { routePrefix, t } = useLanguage();
  const sectionHref = (hash: string) => `${routePrefix}${hash}`;

  return (
    <footer className="bg-[#081a33] pb-24 pt-20 text-slate-300 md:pb-10">
      <div className="container-site grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-2xl font-extrabold tracking-[-.03em] text-white">
            <Wrench /> Handwerker Sofort
          </div>
          <p className="mt-5 max-w-sm leading-8 text-slate-400">
            {t.footer.description}
          </p>
        </div>
        <div>
          <h3 className="font-bold tracking-[.01em] text-white">{t.footer.quickLinks}</h3>
          <div className="mt-5 grid gap-3">
            <a href={sectionHref("#start")}>{t.footer.home}</a>
            <a href={sectionHref("#leistungen")}>{t.footer.services}</a>
            <a href={sectionHref("#kontakt")}>{t.footer.contact}</a>
            <Link href="/impressum">{t.footer.imprint}</Link>
            <Link href="/datenschutz">{t.footer.privacy}</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold tracking-[.01em] text-white">{t.footer.contactTitle}</h3>
          <div className="mt-5 grid gap-4 text-sm">
            <a href={`tel:${siteConfig.phoneHref}`} className="flex gap-3">
              <Phone size={18} /> {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex gap-3">
              <Mail size={18} /> {siteConfig.email}
            </a>
            <p className="flex gap-3">
              <MapPin size={18} /> {siteConfig.serviceArea}
            </p>
            <p className="flex gap-3">
              <Clock3 size={18} /> {t.footer.hours}
            </p>
          </div>
        </div>
      </div>
      <div className="container-site mt-14 border-t border-white/10 pt-7 text-sm text-slate-500">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
