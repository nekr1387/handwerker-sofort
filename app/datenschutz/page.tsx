import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

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
          Telefon: +49 152 21591541
          <br />
          E-Mail: <a href="mailto:Info@handwerkersofort.com">Info@handwerkersofort.com</a>
        </p>
      </section>

      <section>
        <h2 className={headingClass}>2. Allgemeine Hinweise</h2>
        <h3 className="mt-5 font-bold text-[#0b2147]">A)</h3>
        <p className="mt-3">
          Nachfolgend möchten wir Sie über unsere Datenschutzerklärung informieren. Sie finden hier Informationen über die
          Erhebung und Verwendung personenbezogener Daten bei der Nutzung unserer Website. Wir beachten dabei das für
          Deutschland geltende Datenschutzrecht. Sie können diese Erklärung jederzeit auf unserer Website abrufen.
        </p>
        <p className="mt-3">
          Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.
        </p>
        <p className="mt-3">
          Die Verwendung der Kontaktdaten unseres Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es
          sei denn, wir haben zuvor unsere schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung.
          Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung
          und Weitergabe ihrer Daten.
        </p>
        <h3 className="mt-5 font-bold text-[#0b2147]">B)</h3>
        <p className="mt-3">
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von
          Anfragen, zur Kommunikation mit Interessenten und Kunden oder zur Erfüllung gesetzlicher Pflichten erforderlich
          ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b DSGVO, Art. 6 Abs. 1 lit. c DSGVO, Art. 6 Abs. 1 lit.
          f DSGVO und – soweit eine Einwilligung eingeholt wird – Art. 6 Abs. 1 lit. a DSGVO sowie § 25 TDDDG.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>3. Vercel Hosting</h2>
        <p className="mt-3">
          Diese Website wird über Vercel gehostet. Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
          USA.
        </p>
        <p className="mt-3">
          Beim Aufruf der Website verarbeitet Vercel technisch erforderliche Daten, insbesondere IP-Adresse, Datum und
          Uhrzeit des Zugriffs, aufgerufene URL, Referrer, Browser- und Geräteinformationen sowie Server-Logdaten. Die
          Verarbeitung erfolgt zur sicheren und schnellen Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Unser berechtigtes Interesse liegt in einer stabilen, sicheren und performanten Bereitstellung unserer
          Website.
        </p>
        <p className="mt-3">
          Eine Verarbeitung personenbezogener Daten kann dabei auch auf Servern außerhalb der Europäischen Union,
          insbesondere in den USA, erfolgen.
        </p>
        <p className="mt-3">
          Vercel stellt Informationen zum Datenschutz unter:
          <br />
          <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">
            https://vercel.com/legal/privacy-notice
          </a>
          <br />
          bereit.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>4. Kontaktformular, Zweck und E-Mail-Verarbeitung</h2>
        <p className="mt-3">
          Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten: Name, Telefonnummer,
          E-Mail-Adresse, Adresse, Beschreibung der Aufgabe sowie die Bestätigung der Datenschutzhinweise.
        </p>
        <p className="mt-3">
          Die Daten werden an unsere E-Mail-Adresse{" "}
          <strong>
            <a href="mailto:Info@handwerkersofort.com">Info@handwerkersofort.com</a>
          </strong>{" "}
          gesendet und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
        <p className="mt-3">
          Der Versand erfolgt serverseitig über Nodemailer und das IONOS-E-Mail-Postfach{" "}
          <strong>
            <a href="mailto:Info@handwerkersofort.com">Info@handwerkersofort.com</a>
          </strong>
          . SMTP-Server: <strong>smtp.ionos.de</strong>.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Auftrag oder vorvertragliche
          Maßnahmen gerichtet ist. In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Unser berechtigtes Interesse liegt in der effizienten Bearbeitung von Kundenanfragen.
        </p>
        <p className="mt-3">
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>5. Kontakt per Telefon, E-Mail und WhatsApp</h2>
        <p className="mt-3">
          Wenn Sie uns telefonisch, per E-Mail oder über WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten
          Kontaktdaten und Inhalte Ihrer Nachricht zur Bearbeitung Ihres Anliegens.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p className="mt-3">
          Der WhatsApp-Link auf dieser Website führt zu:
          <br />
          <br />
          <a href="https://wa.me/4915221591541" target="_blank" rel="noopener noreferrer">
            https://wa.me/4915221591541
          </a>
        </p>
        <p className="mt-3">
          Anbieter von WhatsApp ist im Europäischen Wirtschaftsraum die WhatsApp Ireland Limited, 4 Grand Canal Square,
          Grand Canal Harbour, Dublin 2, Irland.
        </p>
        <p className="mt-3">
          Bei der Nutzung von WhatsApp können insbesondere Telefonnummer, Profilinformationen, Kommunikationsdaten,
          Metadaten und technische Daten verarbeitet werden. Bitte senden Sie über WhatsApp keine besonders sensiblen Daten,
          keine Gesundheitsdaten, keine Ausweisdokumente und keine vertraulichen Informationen.
        </p>
        <p className="mt-3">
          Weitere Informationen:
          <br />
          <br />
          <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
            https://www.whatsapp.com/legal/privacy-policy-eea
          </a>
        </p>
      </section>

      <section>
        <h2 className={headingClass}>6. Google Maps mit 2-Klick-Einwilligung</h2>
        <p className="mt-3">
          Im Kontaktbereich ist eine Karte von Google Maps eingebunden. Anbieter ist Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-3">
          Die Karte wird nicht automatisch geladen. Erst nachdem Sie aktiv auf die Schaltfläche{" "}
          <strong>„Karte laden“</strong> geklickt haben, wird eine Verbindung zu den Servern von Google hergestellt und die
          Karte geladen.
        </p>
        <p className="mt-3">
          Dabei können personenbezogene Daten, insbesondere Ihre IP-Adresse, Browser- und Geräteinformationen sowie Datum
          und Uhrzeit des Zugriffs, an Google übermittelt werden. Dabei kann auch eine Übermittlung an Google LLC in die USA
          erfolgen.
        </p>
        <p className="mt-3">
          Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1
          TDDDG.
        </p>
        <p className="mt-3">Ohne Ihre Einwilligung wird keine Verbindung zu Google Maps hergestellt.</p>
        <p className="mt-3">
          Weitere Informationen:
          <br />
          <br />
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
        </p>
      </section>

      <section>
        <h2 className={headingClass}>7. Cookies, lokale Speicher und Einwilligungen</h2>
        <p className="mt-3">
          Diese Website setzt derzeit keine eigenen Tracking-Cookies, kein Cookie-Banner und keine Analyse- oder
          Marketingtools ein.
        </p>
        <p className="mt-3">Die Google-Maps-Karte wird ausschließlich nach einem aktiven Klick geladen.</p>
        <p className="mt-3">Die Einwilligung zum Laden der Karte wird derzeit nicht dauerhaft gespeichert.</p>
      </section>

      <section>
        <h2 className={headingClass}>8. Keine Analyse- und Trackingdienste</h2>
        <p className="mt-3">
          Auf dieser Website werden derzeit keine Dienste wie Google Analytics, Google Tag Manager, Meta Pixel, Hotjar,
          Plausible oder vergleichbare Analyse-, Tracking- oder Marketingdienste eingesetzt.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>9. Schriftarten, Bilder und Videos</h2>
        <p className="mt-3">
          Die Website verwendet lokale bzw. systemseitig verfügbare Schriftarten. Es werden keine Google Fonts von
          Google-Servern geladen.
        </p>
        <p className="mt-3">
          Bilder, Logos und Videos werden lokal aus dem Website-Projekt bereitgestellt und nicht von externen Bild- oder
          Videoplattformen geladen.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>10. SSL- bzw. TLS-Verschlüsselung</h2>
        <p className="mt-3">
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
          TLS-Verschlüsselung.
        </p>
        <p className="mt-3">
          Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers sowie am Schloss-Symbol
          Ihres Browsers.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>11. Ihre Rechte</h2>
        <p className="mt-3">
          Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.
        </p>
        <p className="mt-3">
          Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft
          widerrufen.
        </p>
        <p className="mt-3">
          Außerdem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
        </p>
        <p className="mt-3">
          <strong>Zuständige Datenschutzaufsichtsbehörde in Baden-Württemberg:</strong>
        </p>
        <p className="mt-3">
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)
        </p>
        <p className="mt-3">
          Lautenschlagerstraße 20
          <br />
          70173 Stuttgart
          <br />
          Deutschland
        </p>
        <p className="mt-3">
          Weitere Informationen:
          <br />
          <br />
          <a
            href="https://www.baden-wuerttemberg.datenschutz.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.baden-wuerttemberg.datenschutz.de/
          </a>
        </p>
      </section>

      <section>
        <h2 className={headingClass}>12. Speicherdauer</h2>
        <p className="mt-3">
          Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Eine
          längere Speicherung erfolgt nur, soweit gesetzliche Aufbewahrungspflichten bestehen oder die Daten zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden.
        </p>
      </section>

      <section>
        <h2 className={headingClass}>13. Stand</h2>
        <p className="mt-3">Stand: 29. Juni 2026</p>
      </section>
    </LegalPage>
  );
}
