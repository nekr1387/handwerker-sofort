"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function GoogleMapConsent() {
  const [accepted, setAccepted] = useState(false);
  const { t } = useLanguage();

  if (accepted) {
    return (
      <iframe
        src="https://www.google.com/maps?q=Kehl,Germany&hl=de&z=11&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "12px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t.map.iframeTitle}
      />
    );
  }

  return (
    <div className="grid min-h-[300px] w-full place-items-center rounded-xl bg-white/5 p-5 text-center text-blue-100">
      <div className="max-w-sm">
        <MapPin className="mx-auto mb-3 text-blue-200" size={34} />
        <strong className="text-white">{t.map.title}</strong>
        <p className="mt-3 text-sm leading-6">
          {t.map.text}
        </p>
        <button type="button" onClick={() => setAccepted(true)} className="btn-secondary mt-5">
          {t.map.button}
        </button>
      </div>
    </div>
  );
}
