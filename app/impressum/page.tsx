import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Impressum | Handwerker Sofort", robots: { index: true, follow: true } };

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <section><h2 className="text-xl font-black text-[#0b2147]">Angaben gemäß § 5 DDG</h2><p className="mt-3">Handwerker Sofort<br />Nikolai Kaminski<br />Bierkellerstr. 22<br />77694 Kehl<br />Deutschland</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Kontakt</h2><p className="mt-3">Telefon: +49 152 21591541<br />E-Mail: Info@handwerkersofort.com</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Umsatzsteuer-ID</h2><p className="mt-3">Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Berufsbezeichnung und Aufsicht</h2><p className="mt-3">Handwerkskammer Freiburg</p></section>
      <section><h2 className="text-xl font-black text-[#0b2147]">Verbraucherstreitbeilegung</h2><p className="mt-3">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></section>
    </LegalPage>
  );
}
