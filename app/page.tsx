import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, Bath, Check, CheckCircle2, ChevronRight,
  DoorOpen, Drill, Flower2, Hammer, House, Image as ImageIcon,
  LampCeiling, MapPin, MessageCircle, Paintbrush, Phone, Ruler, ShieldCheck,
  Sparkles, Tv, Users, Wrench,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GoogleMapConsent } from "@/components/GoogleMapConsent";
import { Header } from "@/components/Header";
import { MobileActions } from "@/components/MobileActions";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

type Service = { title: string; description: string; icon: LucideIcon };

const services: Service[] = [
  { title: "Möbelumbau und Anpassung", description: "Veränderung nach Ihren Wünschen.", icon: Ruler },
  { title: "Möbelreparatur", description: "Defekte Regale, Schränke und Türen schnell und fachgerecht repariert.", icon: Drill },
  { title: "Hausmeisterservice", description: "Regelmäßige Betreuung für Immobilien und kleine Betriebe.", icon: House },
  { title: "Kleinreparaturen", description: "Praktische Hilfe bei kleinen Defekten in Haus und Wohnung.", icon: Wrench },
  { title: "Möbelmontage", description: "Schränke, Betten, Kommoden und Möbel fachgerecht aufgebaut.", icon: Hammer },
  { title: "Küchenmontage", description: "Unterstützung beim Aufbau und bei Anpassungen Ihrer Küche.", icon: Ruler },
  { title: "Lampenmontage", description: "Lampen und Leuchten fachgerecht montiert.", icon: LampCeiling },
  { title: "Regale befestigen", description: "Regale stabil und passend an verschiedenen Wänden befestigt.", icon: Drill },
  { title: "Bilder aufhängen", description: "Bilder, Spiegel und Dekoration exakt ausgerichtet.", icon: ImageIcon },
  { title: "Türen & Scharniere", description: "Klemmende Türen und lockere Scharniere wieder in Ordnung.", icon: DoorOpen },
  { title: "Silikonfugen erneuern", description: "Alte Fugen entfernen und sauber neu versiegeln.", icon: Bath },
  { title: "Gardinenstangen", description: "Stangen, Schienen und Rollos zuverlässig montiert.", icon: Paintbrush },
  { title: "Umzugshilfe", description: "Tatkräftige Unterstützung beim Ab- und Aufbau.", icon: Users },
  { title: "TV-Halterungen", description: "Fernseher sicher und gerade an der Wand befestigt.", icon: Tv },
  { title: "Sonstige Arbeiten", description: "Viele weitere Aufgaben erledigen wir gerne nach Absprache.", icon: Sparkles },
];

const faqs = [
  ["Welche Arbeiten übernehmen Sie?", "Wir übernehmen Montagearbeiten, Kleinreparaturen, Ausbesserungen und viele praktische Aufgaben rund um Haus, Wohnung und Gewerbeobjekte. Fragen Sie uns einfach unverbindlich an. Elektroinstallationen, Wasseranschlüsse sowie komplette Malerarbeiten werden ausschließlich in Zusammenarbeit mit qualifizierten Meisterbetrieben ausgeführt."],
  ["Wie schnell können Sie kommen?", "Je nach Auslastung und Einsatzort sind oft kurzfristige Termine möglich. Senden Sie uns am besten eine kurze Beschreibung und Fotos per WhatsApp, damit wir den Aufwand schnell einschätzen können. Heute oder morgen!"],
  ["Gibt es einen Mindestauftragswert?", "Ein möglicher Mindestauftragswert hängt von Anfahrt, Einsatzort und Aufgabe ab. Auch kleine Aufträge sind ausdrücklich willkommen. Sie erhalten vorab eine transparente Einschätzung."],
  ["Wie erfolgt die Bezahlung?", "Die Bezahlung ist nach Abschluss der Arbeiten per Überweisung oder nach individueller Vereinbarung möglich. Sie erhalten selbstverständlich eine ordentliche Rechnung."],
  ["Arbeiten Sie auch am Wochenende?", "Termine am Samstag und in dringenden Fällen auch außerhalb der üblichen Zeiten sind nach Absprache möglich. Eventuelle Zuschläge werden vorab transparent kommuniziert."],
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "DE" },
  areaServed: siteConfig.serviceArea,
  priceRange: "€€",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto mb-3 mt-0 grid h-[140px] w-full max-w-[1400px] overflow-hidden rounded-[24px] bg-[#f5f5f5] md:h-[220px] md:grid-cols-[25%_50%_25%]">
          <div className="hidden h-full w-full overflow-hidden md:block" aria-hidden="true">
            <img
              src="/hero-left.png"
              alt=""
              className="h-[125%] w-full -translate-y-[18%] object-cover"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <video
            className="block h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <img
            src="/hero-right.png"
            alt=""
            className="hidden h-full w-full object-cover md:block"
            aria-hidden="true"
          />
        </section>

        <section id="start" className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6ff] pb-20 pt-4 sm:pb-28 sm:pt-4 lg:pb-32 lg:pt-4">
          <div className="absolute -right-32 -top-44 h-[560px] w-[560px] rounded-full bg-blue-200/35 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-slate-200/40 blur-3xl" />
          <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div className="reveal">
              <div className="eyebrow mb-5 flex items-center gap-2"><ShieldCheck size={18} /> IHR HANDWERKER IN OFFENBURG UND KEHL</div>
              <h1 className="max-w-3xl text-[clamp(2.35rem,5.2vw,4.45rem)] font-extrabold leading-[1.05] tracking-[-.04em] text-[#0d1b2f]">
                Handwerker Sofort – <span className="text-[#1456a0]">schnelle Hilfe</span> rund um Haus und Wohnung
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
                Zuverlässige Unterstützung für Reparaturen, Montagearbeiten und praktische Aufgaben. Schnell, sauber und professionell.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="btn-primary"><ArrowRight size={19} /> Jetzt anfragen</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={19} /> WhatsApp schreiben</a>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700 sm:grid-cols-4">
                {["Schnell verfügbar", "Faire Preise", "Zuverlässiger Service", "Kostenlose Anfrage"].map((item) => (
                  <div key={item} className="flex items-center gap-2"><Check className="text-emerald-600" size={18} /> {item}</div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-[28px] border border-[rgba(15,23,42,0.06)] bg-white p-8 text-[#0d1b2f] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-3xl font-bold tracking-[-.03em]">Schnelle Hilfe vor Ort</h2>
                      <p className="mt-3 text-base leading-7 text-slate-600">Wir sind schnell für Sie da.</p>
                    </div>
                    <img
                      src="/logo.png"
                      alt="Handwerker Sofort Logo"
                      className="h-auto w-[130px] shrink-0 object-contain"
                    />
                  </div>
                  <div className="mt-8 grid gap-4">
                    {[
                      "Kurzfristige Termine möglich",
                      "WhatsApp-Anfrage mit Fotos",
                      "Transparente Preise",
                      "Zuverlässige Ausführung",
                      "Privat & Gewerbe",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="shrink-0 text-[#2563eb]" size={19} strokeWidth={1.9} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-7 h-px bg-slate-200/80" />
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <MapPin className="shrink-0 text-[#2563eb]" size={20} strokeWidth={1.8} />
                    <span>Offenburg · Kehl · Ortenaukreis</span>
                  </div>
                  <div className="my-7 h-px bg-slate-200/80" />
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-500">Direkt erreichbar</p>
                    <p className="mt-1 text-2xl font-bold tracking-[-.03em] text-[#0d1b2f]">+49 152 21591541</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="section">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Alles aus einer Hand</p>
              <h2 className="section-title mt-3 max-md:text-[1.625rem]">Unsere Leistungen</h2>
              <p className="section-copy mt-4 text-[15px] leading-7 md:mt-5 md:text-[clamp(1.05rem,1.6vw,1.18rem)] md:leading-[1.85]">Von der kleinen Reparatur bis zur kompletten Montage: Wir packen dort an, wo Sie Unterstützung brauchen.</p>
            </div>
            <div className="mt-9 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {services.map(({ title, description, icon: Icon }) => (
                <article key={title} className="card group grid min-h-[150px] w-full min-w-0 content-start rounded-[18px] p-3.5 hover:-translate-y-1 hover:border-blue-200 md:flex md:min-h-0 md:flex-col md:rounded-[24px] md:p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white md:h-[52px] md:w-[52px]"><Icon size={22} className="md:h-6 md:w-6" /></div>
                  <h3 className="mt-3 text-[17px] font-bold leading-[1.2] text-[#0d1b2f] md:mt-5 md:text-lg md:leading-normal">{title}</h3>
                  <p className="mt-2 hidden flex-1 text-sm leading-6 text-slate-600 md:block">{description}</p>
                  <a href="#kontakt" className="mt-3 flex items-center gap-1 text-[13px] font-bold tracking-[.01em] text-[#2563eb] md:mt-5 md:text-sm">Anfragen <ChevronRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beispiele" className="section">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Saubere Ergebnisse</p><h2 className="section-title mt-3">Beispiele unserer Arbeiten</h2></div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "/1.JPG",
                "/2.JPG",
                "/3.JPEG",
                "/4.png",
                "/5.JPG",
                "/6.png",
                "/7.png",
                "/8.png",
                "/9.png",
                "/10.png",
                "/11.png",
                "/12.png",
              ].map((src, index) => {
                const isPortraitImage = index >= 1 && index <= 4;

                return (
                  <div key={src} className="card grid aspect-[4/3] place-items-center overflow-hidden bg-slate-50 p-3">
                    <img
                      src={src}
                      alt={`Beispiel unserer Arbeit ${index + 1}`}
                      className={`h-full w-full rounded-2xl ${isPortraitImage ? "bg-slate-100 object-contain object-center" : "object-contain"}`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ueber-uns" className="section bg-[#f7f9fc]">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2">
            <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0b1220] via-[#10233f] to-[#0f3b4c] p-8 text-white sm:p-12">
              <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#1456a0]" />
              <div className="relative grid h-full content-between">
                <Wrench size={64} className="text-blue-300" />
                <div className="mt-24">
                  <p className="text-6xl font-extrabold tracking-[-.05em]">100%</p>
                  <p className="mt-2 text-lg font-bold text-blue-100">Einsatz für Ihr Zuhause</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4"><strong className="block text-xl">Schnell</strong><span className="text-sm text-blue-200">Termine nach Absprache</span></div>
                  <div className="rounded-xl bg-white/10 p-4"><strong className="block text-xl">Sauber</strong><span className="text-sm text-blue-200">Sorgfältige Ausführung</span></div>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Persönlich. Praktisch. Professionell.</p>
              <h2 className="section-title mt-3">Über Handwerker Sofort</h2>
              <p className="section-copy mt-6">Handwerker Sofort unterstützt Privatkunden und Unternehmen bei alltäglichen Reparaturen, Montagearbeiten und praktischen Aufgaben rund um Haus und Wohnung.</p>
              <p className="section-copy mt-4">Unser Ziel ist es, schnelle Hilfe, saubere Arbeit und transparente Preise anzubieten. Auch kleine Aufträge sind bei uns willkommen.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Unverbindliche Anfrage", "Klare Kommunikation", "Flexible Terminplanung", "Regionale Betreuung"].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-bold text-[#0b2147]"><CheckCircle2 size={20} className="text-emerald-600" /> {item}</div>
                ))}
              </div>
              <a href="#kontakt" className="btn-primary mt-8">Projekt besprechen <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="ablauf" className="section bg-gradient-to-br from-[#07111f] via-[#0d1b2f] to-[#0f3b4c] text-white">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow !text-blue-300">Ohne Umwege</p><h2 className="section-title mt-3 !text-white">So einfach funktioniert es</h2></div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                ["01", "Anfrage senden", "Kontaktformular ausfüllen oder direkt per WhatsApp schreiben."],
                ["02", "Kurze Abstimmung", "Aufgabe, Fotos, Einsatzort und offenen Fragen besprechen."],
                ["03", "Termin vereinbaren", "Gemeinsam einen passenden Termin und Preisrahmen festlegen."],
                ["04", "Arbeit erledigt", "Wir kommen pünktlich und führen die Arbeit sauber aus."],
              ].map(([num, title, text]) => (
                <div key={num} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="text-4xl font-extrabold tracking-[-.04em] text-blue-300">{num}</span>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preise" className="section">
          <div className="container-site grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div><p className="eyebrow">Planbar & verständlich</p><h2 className="section-title mt-3">Transparente Preise</h2><p className="section-copy mt-5">Sie erfahren vor Beginn, wie sich die Kosten zusammensetzen. Keine versteckten Überraschungen.</p></div>
            <div className="card overflow-hidden">
              {[
                ["Stundenpreis", `ab ${siteConfig.pricePerHour}`],
                ["Materialkosten", "nach Aufwand"],
                ["Festpreise", "nach Vereinbarung"],
              ].map(([label, value], i) => (
                <div key={label} className={`flex items-center justify-between gap-4 px-6 py-5 ${i < 3 ? "border-b border-slate-100" : ""}`}>
                  <span className="font-bold text-slate-600">{label}</span><strong className="text-lg text-[#0b2147]">{value}</strong>
                </div>
              ))}
              <div className="bg-blue-50 p-5 text-sm leading-6 text-[#1456a0]"><strong>Hinweis:</strong> Jeder Auftrag wird individuell bewertet. Gerne erstellen wir ein unverbindliches Angebot.</div>
            </div>
          </div>
        </section>

        <section className="section bg-[#f7f9fc]">
          <div className="container-site max-w-4xl">
            <div className="text-center"><p className="eyebrow">Gut zu wissen</p><h2 className="section-title mt-3">Häufige Fragen</h2></div>
            <div className="mt-10 grid gap-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="card group p-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-[#0d1b2f]">
                    {question}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#1456a0] group-open:rotate-90"><ChevronRight size={18} /></span>
                  </summary>
                  <p className="px-5 pb-5 pr-16 leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Kostenlos & unverbindlich</p><h2 className="section-title mt-3">Kontakt aufnehmen</h2><p className="section-copy mt-5">Beschreiben Sie kurz Ihre Aufgabe. Fotos können gerne per WhatsApp gesendet werden.</p></div>
            <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="rounded-[24px] bg-gradient-to-br from-[#07111f] via-[#0d1b2f] to-[#0f3b4c] p-7 text-white sm:p-9">
                <h3 className="text-2xl font-bold tracking-[-.03em]">Direkter Kontakt</h3><p className="mt-3 leading-7 text-blue-100">Sie möchten lieber persönlich sprechen? Rufen Sie uns an oder schreiben Sie bequem per WhatsApp.</p>
                <div className="mt-8 grid gap-4">
                  <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Phone /><span><small className="block text-blue-200">Telefon</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/15"><MessageCircle /><span><small className="block text-blue-200">WhatsApp</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4"><MapPin /><span><small className="block text-blue-200">Einsatzgebiet</small><strong>{siteConfig.serviceArea}</strong></span></div>
                </div>
                <div className="mt-8 grid min-h-44 place-items-center rounded-xl border border-dashed border-blue-300/50 bg-white/5 text-center text-blue-200">
                  <GoogleMapConsent />
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] py-14 text-white">
          <div className="container-site flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div><h2 className="text-3xl font-bold tracking-[-.03em]">Ihre Aufgabe wartet nicht?</h2><p className="mt-2 text-blue-100">Schildern Sie uns kurz, wobei Sie Hilfe benötigen.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><a href={`tel:${siteConfig.phoneHref}`} className="btn-secondary"><Phone size={19} /> Jetzt anrufen</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={19} /> WhatsApp schreiben</a></div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
