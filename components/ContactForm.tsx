"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const successMessage = "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.";
const errorMessage =
  "Leider konnte die Anfrage nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per WhatsApp.";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setError("");
    setLoading(true);

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      address: String(formData.get("address") || ""),
      message: String(formData.get("message") || ""),
      privacy: formData.get("privacy") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseBody = await response.json().catch(() => null);
        console.error("Contact form submission failed:", {
          status: response.status,
          statusText: response.statusText,
          responseBody,
        });
        throw new Error("Request failed");
      }

      setSent(true);
      form.reset();
    } catch {
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="card grid min-h-[420px] place-items-center p-8 text-center sm:p-10" role="status">
        <div>
          <CheckCircle2 className="mx-auto mb-5 text-emerald-600" size={54} />
          <h3 className="text-2xl font-bold tracking-[-.03em] text-[#0d1b2f]">{successMessage}</h3>
          <button onClick={() => setSent(false)} className="btn-secondary mt-7">Weitere Anfrage</button>
        </div>
      </div>
    );
  }

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Ihr Name", required: true },
    { name: "phone", label: "Telefonnummer", type: "tel", placeholder: "z. B. 0170 1234567", required: true },
    { name: "email", label: "E-Mail", type: "email", placeholder: "ihre@email.de", required: true },
    { name: "address", label: "Adresse", type: "text", placeholder: "Straße, PLZ, Ort", required: false },
  ];

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8 lg:p-10" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold tracking-[.01em] text-[#0d1b2f]">
            {field.label}{field.required && " *"}
            <input
              name={field.name} type={field.type} placeholder={field.placeholder} required={field.required}
              className="h-[52px] rounded-2xl border border-slate-300 bg-white/90 px-4 font-normal text-slate-900 placeholder:text-slate-400"
            />
          </label>
        ))}
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold tracking-[.01em] text-[#0d1b2f]">
        Beschreibung der Aufgabe *
        <textarea
          name="message" required minLength={10} rows={5}
          placeholder="Was können wir für Sie erledigen?"
          className="rounded-2xl border border-slate-300 bg-white/90 p-4 font-normal text-slate-900 placeholder:text-slate-400"
        />
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 accent-[#1456a0]" />
        <span>Ich stimme der Verarbeitung meiner Angaben gemäß der Datenschutzerklärung zu. *</span>
      </label>
      {error && (
        <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700" role="alert">
          {error}
        </p>
      )}
      <button className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={loading}>
        <Send size={18} /> {loading ? "Anfrage wird gesendet..." : "Anfrage senden"}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">* Pflichtfelder · Ihre Daten werden vertraulich behandelt.</p>
    </form>
  );
}
