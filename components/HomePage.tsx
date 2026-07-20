"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, Bath, Check, CheckCircle2, ChevronRight,
  DoorOpen, Drill, Hammer, House, Image as ImageIcon,
  LampCeiling, MapPin, MessageCircle, Paintbrush, Phone, Ruler, ShieldCheck,
  Sparkles, Tv, Users, Wrench,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { GoogleMapConsent } from "@/components/GoogleMapConsent";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import { MobileActions } from "@/components/MobileActions";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

type ServiceIcon = { icon: LucideIcon };

const serviceIcons: ServiceIcon[] = [
  { icon: Ruler },
  { icon: Drill },
  { icon: House },
  { icon: Wrench },
  { icon: ShieldCheck },
  { icon: Hammer },
  { icon: Ruler },
  { icon: LampCeiling },
  { icon: Drill },
  { icon: ImageIcon },
  { icon: DoorOpen },
  { icon: Bath },
  { icon: Paintbrush },
  { icon: Users },
  { icon: Tv },
  { icon: Sparkles },
];

export function HomePage() {
  const { locale, routePrefix, t } = useLanguage();
  const sectionHref = (hash: string) => `${routePrefix}${hash}`;
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
    inLanguage: locale,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: t.faq.items.map(([question, answer]) => ({
      "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

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
              <div className="eyebrow mb-5 flex items-center gap-2"><ShieldCheck size={18} /> {t.hero.eyebrow}</div>
              <h1 className="max-w-3xl text-[clamp(2.35rem,5.2vw,4.45rem)] font-extrabold leading-[1.05] tracking-[-.04em] text-[#0d1b2f]">
                {t.hero.titlePrefix} <span className="text-[#1456a0]">{t.hero.titleAccent}</span> {t.hero.titleSuffix}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
                {t.hero.subheadline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={sectionHref("#kontakt")} className="btn-primary"><ArrowRight size={19} /> {t.hero.requestCta}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={19} /> {t.hero.whatsappCta}</a>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700 sm:grid-cols-4">
                {t.hero.badges.map((item) => (
                  <div key={item} className="flex items-center gap-2"><Check className="text-emerald-600" size={18} /> {item}</div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-[28px] border border-[rgba(15,23,42,0.06)] bg-white p-8 text-[#0d1b2f] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-3xl font-bold tracking-[-.03em]">{t.hero.card.title}</h2>
                      <p className="mt-3 text-base leading-7 text-slate-600">{t.hero.card.subtitle}</p>
                    </div>
                    <img
                      src="/logo.png"
                      alt={t.hero.card.logoAlt}
                      className="h-auto w-[130px] shrink-0 object-contain"
                    />
                  </div>
                  <div className="mt-8 grid gap-4">
                    {t.hero.card.benefits.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="shrink-0 text-[#2563eb]" size={19} strokeWidth={1.9} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-7 h-px bg-slate-200/80" />
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <MapPin className="shrink-0 text-[#2563eb]" size={20} strokeWidth={1.8} />
                    <span>{t.hero.card.area}</span>
                  </div>
                  <div className="my-7 h-px bg-slate-200/80" />
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-500">{t.hero.card.contactLabel}</p>
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
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 className="section-title mt-3 max-md:text-[1.625rem]">{t.services.title}</h2>
              <p className="section-copy mt-4 text-[15px] leading-7 md:mt-5 md:text-[clamp(1.05rem,1.6vw,1.18rem)] md:leading-[1.85]">{t.services.intro}</p>
            </div>
            <div className="mt-9 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {t.services.cards.map(({ title, description }, index) => {
                const Icon = serviceIcons[index].icon;
                return (
                <article key={title} className="card group grid h-[160px] w-full min-w-0 content-start rounded-[18px] px-1 py-2.5 hover:-translate-y-1 hover:border-blue-200 md:flex md:h-auto md:min-h-0 md:flex-col md:rounded-[24px] md:p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white md:h-[52px] md:w-[52px]"><Icon size={22} className="md:h-6 md:w-6" /></div>
                  <h3 className="mt-3 min-w-0 text-left text-[17px] font-bold leading-[1.2] text-[#0d1b2f] md:mt-5 md:text-lg md:leading-normal" lang={locale}>{title}</h3>
                  <p className="mt-2 hidden flex-1 text-sm leading-6 text-slate-600 md:block">{description}</p>
                  <a href={sectionHref("#kontakt")} className="mt-3 flex items-center gap-1 text-[13px] font-bold tracking-[.01em] text-[#2563eb] md:mt-5 md:text-sm">{t.services.cta} <ChevronRight size={16} /></a>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="beispiele" className="section">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">{t.examples.eyebrow}</p><h2 className="section-title mt-3">{t.examples.title}</h2></div>
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
                      alt={`${t.examples.imageAlt} ${index + 1}`}
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
                  <p className="mt-2 text-lg font-bold text-blue-100">{t.about.statLabel}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4"><strong className="block text-xl">{t.about.fastTitle}</strong><span className="text-sm text-blue-200">{t.about.fastText}</span></div>
                  <div className="rounded-xl bg-white/10 p-4"><strong className="block text-xl">{t.about.cleanTitle}</strong><span className="text-sm text-blue-200">{t.about.cleanText}</span></div>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2 className="section-title mt-3">{t.about.title}</h2>
              <p className="section-copy mt-6">{t.about.text1}</p>
              <p className="section-copy mt-4">{t.about.text2}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {t.about.bullets.map((item) => (
                  <div key={item} className="flex items-center gap-2 font-bold text-[#0b2147]"><CheckCircle2 size={20} className="text-emerald-600" /> {item}</div>
                ))}
              </div>
              <a href={sectionHref("#kontakt")} className="btn-primary mt-8">{t.about.cta} <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="ablauf" className="section bg-gradient-to-br from-[#07111f] via-[#0d1b2f] to-[#0f3b4c] text-white">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow !text-blue-300">{t.process.eyebrow}</p><h2 className="section-title mt-3 !text-white">{t.process.title}</h2></div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {t.process.steps.map(([num, title, text]) => (
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
            <div><p className="eyebrow">{t.pricing.eyebrow}</p><h2 className="section-title mt-3">{t.pricing.title}</h2><p className="section-copy mt-5">{t.pricing.intro}</p></div>
            <div className="card overflow-hidden">
              {[
                [t.pricing.rows.hourly, `${t.pricing.rows.from} ${siteConfig.pricePerHour}`],
                [t.pricing.rows.material, t.pricing.rows.effort],
                [t.pricing.rows.fixed, t.pricing.rows.agreement],
              ].map(([label, value], i) => (
                <div key={label} className={`flex items-center justify-between gap-4 px-6 py-5 ${i < 3 ? "border-b border-slate-100" : ""}`}>
                  <span className="font-bold text-slate-600">{label}</span><strong className="text-lg text-[#0b2147]">{value}</strong>
                </div>
              ))}
              <div className="bg-blue-50 p-5 text-sm leading-6 text-[#1456a0]"><strong>{t.pricing.noteLabel}</strong> {t.pricing.note}</div>
            </div>
          </div>
        </section>

        <section className="section bg-[#f7f9fc]">
          <div className="container-site max-w-4xl">
            <div className="text-center"><p className="eyebrow">{t.faq.eyebrow}</p><h2 className="section-title mt-3">{t.faq.title}</h2></div>
            <div className="mt-10 grid gap-3">
              {t.faq.items.map(([question, answer]) => (
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
            <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">{t.contactSection.eyebrow}</p><h2 className="section-title mt-3">{t.contactSection.title}</h2><p className="section-copy mt-5">{t.contactSection.intro}</p></div>
            <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <div className="rounded-[24px] bg-gradient-to-br from-[#07111f] via-[#0d1b2f] to-[#0f3b4c] p-7 text-white sm:p-9">
                <h3 className="text-2xl font-bold tracking-[-.03em]">{t.contactSection.cardTitle}</h3><p className="mt-3 leading-7 text-blue-100">{t.contactSection.cardText}</p>
                <div className="mt-8 grid gap-4">
                  <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Phone /><span><small className="block text-blue-200">{t.contactSection.phone}</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/15"><MessageCircle /><span><small className="block text-blue-200">{t.contactSection.whatsapp}</small><strong>{siteConfig.phoneDisplay}</strong></span></a>
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4"><MapPin /><span><small className="block text-blue-200">{t.contactSection.serviceArea}</small><strong>{siteConfig.serviceArea}</strong></span></div>
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
            <div><h2 className="text-3xl font-bold tracking-[-.03em]">{t.finalCta.title}</h2><p className="mt-2 text-blue-100">{t.finalCta.text}</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><a href={`tel:${siteConfig.phoneHref}`} className="btn-secondary"><Phone size={19} /> {t.finalCta.call}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={19} /> {t.finalCta.whatsapp}</a></div>
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
