import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Datenschutz | Handwerker Sofort", robots: { index: true, follow: true } };

const headingClass = "text-xl font-bold text-[#0b2147]";

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <section>
        <h2 className={headingClass}>1. Verantwortlicher</h2>
        <p className="mt-3">
          Handwerker Sofort
          <br />
          Einsatzgebiet: {siteConfig.serviceArea}
          <br />
          Telefon: {siteConfig.phoneDisplay}
          <br />
          E-Mail: {siteConfig.email}
        </p>
      </section>

      <section>
        <h2 className={headingClass}>2. Allgemeine Hinweise</h2>
        <p className="mt-3">
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von
          Anfragen, zur Kommunikation mit Interessenten und Kunden oder zur Erfüllung gesetzlicher Pflichten erforderlich
          ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO, Art. 6 Abs. 1 lit. c DSGVO, Art. 6 Abs. 1
          lit. f DSGVO und, soweit eine Einwilligung eingeholt wird, Art. 6 Abs. 1 lit. a DSGVO sowie § 25 TDDDG.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>3. Vercel Hosting</h2>
        <p className="mt-3">
          Diese Website wird über Vercel gehostet. Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA
          91723, USA. Beim Aufruf der Website verarbeitet Vercel technisch erforderliche Daten, insbesondere IP-Adresse,
          Datum und Uhrzeit des Zugriffs, aufgerufene URL, Referrer, Browser- und Geräteinformationen sowie Server-Logdaten.
          Die Verarbeitung erfolgt zur sicheren und schnellen Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Unser berechtigtes Interesse liegt in einer stabilen, sicheren und performanten Website.
        </p>
        <p className="mt-3">
          Eine Übermittlung in Drittländer, insbesondere die USA, kann dabei nicht ausgeschlossen werden. Vercel stellt
          Informationen zu Datenschutz und Datenverarbeitung unter https://vercel.com/legal/privacy-notice bereit.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>4. Kontaktformular und E-Mail-Verarbeitung</h2>
        <p className="mt-3">
          Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten: Name, Telefonnummer,
          E-Mail-Adresse, Adresse, Beschreibung der Aufgabe sowie die Bestätigung der Datenschutzhinweise. Die Daten werden
          an unsere E-Mail-Adresse {siteConfig.email} gesendet und zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
        <p className="mt-3">
          Der Versand erfolgt serverseitig über Nodemailer und das IONOS-E-Mail-Postfach {siteConfig.email}. SMTP-Server:
          smtp.ionos.de. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Auftrag oder
          vorvertragliche Maßnahmen gerichtet ist. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der effizienten Bearbeitung von Kundenanfragen.
        </p>
        <p className="mt-3">
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen. Geschäfts- und steuerrechtliche Aufbewahrungspflichten bleiben unberührt.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>5. Kontakt per Telefon, E-Mail und WhatsApp</h2>
        <p className="mt-3">
          Wenn Sie uns telefonisch, per E-Mail oder über WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten
          Kontaktdaten und Inhalte Ihrer Nachricht zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p className="mt-3">
          Der WhatsApp-Link auf dieser Website führt zu https://wa.me/4915221591541. Anbieter von WhatsApp ist im
          Europäischen Wirtschaftsraum die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
          Irland. Bei der Nutzung von WhatsApp können insbesondere Telefonnummer, Profilinformationen, Kommunikationsdaten,
          Metadaten und technische Daten verarbeitet werden. Bitte senden Sie über WhatsApp keine besonders sensiblen Daten,
          keine Gesundheitsdaten, keine Ausweisdokumente und keine vertraulichen Informationen.
        </p>
        <p className="mt-3">
          Weitere Informationen finden Sie in den Datenschutzhinweisen von WhatsApp unter
          https://www.whatsapp.com/legal/privacy-policy-eea.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>6. Google Maps mit 2-Klick-Einwilligung</h2>
        <p className="mt-3">
          Im Kontaktbereich ist eine Karte von Google Maps eingebunden. Anbieter ist Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland. Die Karte wird nicht automatisch geladen. Erst wenn Sie aktiv auf „Karte laden“
          klicken, wird eine Verbindung zu Google hergestellt und die Karte geladen.
        </p>
        <p className="mt-3">
          Beim Laden der Karte können personenbezogene Daten wie IP-Adresse, Browser- und Geräteinformationen, Datum und
          Uhrzeit des Zugriffs sowie ggf. Standort- oder Nutzungsdaten an Google übermittelt werden. Dabei kann auch eine
          Übermittlung an Google LLC in die USA stattfinden. Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung
          gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Ohne Ihre Einwilligung wird keine Google-Maps-Verbindung
          aufgebaut.
        </p>
        <p className="mt-3">
          Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter https://policies.google.com/privacy.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>7. Cookies, lokale Speicher und Einwilligungen</h2>
        <p className="mt-3">
          Diese Website setzt derzeit keine eigenen Tracking-Cookies, kein Cookie-Banner und keine Analyse- oder
          Marketingtools ein. Die Google-Maps-Karte wird nur nach einem aktiven Klick geladen. Die Einwilligung zum Laden
          der Karte wird derzeit nicht dauerhaft gespeichert.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>8. Keine Analyse- und Trackingdienste</h2>
        <p className="mt-3">
          Auf dieser Website werden nach aktuellem Stand keine Dienste wie Google Analytics, Google Tag Manager, Meta Pixel,
          Hotjar, Plausible oder vergleichbare Analyse-, Tracking- oder Marketingdienste eingesetzt.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>9. Schriftarten, Bilder und Videos</h2>
        <p className="mt-3">
          Die Website verwendet eine lokale System-Font-Stack-Konfiguration mit Manrope als bevorzugter Schriftart. Es
          werden keine Google Fonts von Google-Servern geladen. Bilder, Logos und Videos werden lokal aus dem
          Website-Projekt bereitgestellt und nicht von externen Bild- oder Videoplattformen geladen.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>10. SSL- bzw. TLS-Verschlüsselung</h2>
        <p className="mt-3">
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers
          sowie am Schloss-Symbol in Ihrem Browser.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>11. Ihre Rechte</h2>
        <p className="mt-3">
          Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Soweit die
          Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
          Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
        </p>
        <p className="mt-3">
          Zuständige Datenschutzaufsichtsbehörde in Baden-Württemberg:
          <br />
          <br />
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)
          <br />
          Lautenschlagerstraße 20
          <br />
          70173 Stuttgart
          <br />
          Deutschland
          <br />
          <br />
          Weitere Informationen:
          <br />
          https://www.baden-wuerttemberg.datenschutz.de/
        </p>
      </section>

      <section>
        <h2 className={headingClass}>12. Speicherdauer</h2>
        <p className="mt-3">
          Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Längere
          Speicherungen erfolgen nur, wenn gesetzliche Aufbewahrungspflichten bestehen oder die Daten zur Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>13. Stand</h2>
        <p className="mt-3">Stand: Juni 2026</p>
      </section>
    </LegalPage>
  );
}
