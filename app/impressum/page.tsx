import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Impressum | Handwerker Sofort", robots: { index: true, follow: true } };

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <section><h2 className="text-xl font-black text-[#0b2147]">Angaben gemäß § 5 DDG</h2><p className="mt-3">[Vollständiger Firmenname]<br />[Vor- und Nachname des Inhabers]<br />{siteConfig.address}<br />Deutschland</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Kontakt</h2><p className="mt-3">Telefon: {siteConfig.phoneDisplay}<br />E-Mail: {siteConfig.email}</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Umsatzsteuer-ID</h2><p className="mt-3">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />[USt-IdNr.]</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Berufsbezeichnung und Aufsicht</h2><p className="mt-3">[Zuständige Handwerkskammer / Berufsbezeichnung / Staat der Verleihung, soweit zutreffend]</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Verbraucherstreitbeilegung</h2><p className="mt-3">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section>
      <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900"><strong>Hinweis:</strong> Bitte ersetzen Sie alle Platzhalter und lassen Sie das Impressum vor Veröffentlichung rechtlich prüfen.</p>
    </LegalPage>
  );
}
