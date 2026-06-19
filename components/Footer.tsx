import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#081a33] pb-24 pt-20 text-slate-300 md:pb-10">
      <div className="container-site grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 text-2xl font-extrabold tracking-[-.03em] text-white">
            <Wrench /> Handwerker Sofort
          </div>
          <p className="mt-5 max-w-sm leading-8 text-slate-400">
            Ihr zuverlässiger Ansprechpartner für Montage, Reparaturen und praktische Hilfe rund um Haus und Wohnung.
          </p>
        </div>
        <div>
          <h3 className="font-bold tracking-[.01em] text-white">Schnellzugriff</h3>
          <div className="mt-5 grid gap-3">
            <a href="/#start">Startseite</a>
            <a href="/#leistungen">Leistungen</a>
            <a href="/#kontakt">Kontakt</a>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold tracking-[.01em] text-white">Kontakt</h3>
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
              <Clock3 size={18} /> Mo-Sa nach Vereinbarung
            </p>
          </div>
        </div>
      </div>
      <div className="container-site mt-14 border-t border-white/10 pt-7 text-sm text-slate-500">
        © 2026 Handwerker Sofort. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
