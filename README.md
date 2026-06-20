# Handwerker Sofort

Produktionsnahes Next.js-Projekt für einen deutschen Handwerker- und Kleinreparaturservice.

## Einrichtung

1. Node.js 20.9 oder neuer installieren.
2. Abhängigkeiten installieren: `npm install`
3. Entwicklungsserver starten: `npm run dev`
4. Im Browser `http://localhost:3000` öffnen.

## Firmendaten anpassen

Alle zentralen Platzhalter befinden sich in `lib/site-config.ts`:

- Ort und Einsatzgebiet
- Telefonnummer und WhatsApp-Nummer
- E-Mail-Adresse
- Firmenanschrift
- Preise
- Domain

Weitere rechtliche Pflichtangaben stehen in `app/impressum/page.tsx` und
`app/datenschutz/page.tsx`.

## Kontaktformular

Das Formular validiert die Eingaben und zeigt im Frontend eine Erfolgsmeldung.
Vor dem Livegang muss es an einen Versanddienst oder eine eigene API angebunden
werden, zum Beispiel Resend, Brevo oder eine serverseitige Route.

## Bilder

Die Galerie enthält absichtlich grafische Platzhalter. Eigene, optimierte
Arbeitsfotos sollten in `public/gallery` abgelegt und mit `next/image` eingebunden
werden.

## Produktion

```bash
npm run build
npm start
```

Das Projekt kann direkt bei Vercel oder auf jedem Node.js-fähigen Hosting
bereitgestellt werden. Vor Veröffentlichung:

- alle Platzhalter ersetzen
- Formularversand anbinden
- Impressum und Datenschutz rechtlich prüfen
- bei externen Karten/Tracking ein Consent-Management ergänzen
- echte Kundenbewertungen nur mit Einwilligung veröffentlichen
