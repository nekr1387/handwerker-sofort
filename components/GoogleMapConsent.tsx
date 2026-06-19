"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export function GoogleMapConsent() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <iframe
        src="https://www.google.com/maps?q=Kehl,Germany&hl=de&z=11&output=embed"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "12px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Karte Kehl"
      />
    );
  }

  return (
    <div className="grid min-h-[300px] w-full place-items-center rounded-xl bg-white/5 p-5 text-center text-blue-100">
      <div className="max-w-sm">
        <MapPin className="mx-auto mb-3 text-blue-200" size={34} />
        <strong className="text-white">Google Maps anzeigen</strong>
        <p className="mt-3 text-sm leading-6">
          Beim Laden der Karte wird eine Verbindung zu Google hergestellt. Dabei können personenbezogene Daten,
          insbesondere Ihre IP-Adresse, an Google übermittelt werden.
        </p>
        <button type="button" onClick={() => setAccepted(true)} className="btn-secondary mt-5">
          Karte laden
        </button>
      </div>
    </div>
  );
}
