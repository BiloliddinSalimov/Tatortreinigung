/**
 * AI-Wissensbasis — der KI-Assistent antwortet auf Basis dieser Daten.
 *
 * WICHTIG: Nur diese Datei bearbeiten. Die AI-Antworten aktualisieren sich
 * automatisch (dev: Hot-Reload, prod: nach Deploy). Kein Neu-Build nötig.
 *
 * Unbekannte / noch nicht befüllte Punkte leer lassen — die AI verweist dann
 * einfach auf den Anruf, statt Informationen zu erfinden.
 */

export const knowledge = {
  // Welche Leistungen angeboten werden (die AI bietet NUR diese an)
  leistungen: [
    "Tatortreinigung (forensische Reinigung nach Todesfällen, Unfällen)",
    "Leichenfundort-Reinigung",
    "Blut- & Sekretbeseitigung, Beseitigung biologischer Rückstände",
    "Desinfektion & Hygienereinigung",
    "Schädlingsbekämpfung",
    "Geruchsneutralisation (inkl. Ozonbehandlung, Luftreinigung)",
    "Fachgerechte Entsorgung kontaminierter Materialien",
    "Sanierung & Wiederherstellung der Räume",
  ],

  // Einsatzgebiet
  einsatzgebiet: [
    "Salzburg Stadt und Umgebung (AT)",
    "Angrenzendes Bayern (DE) – z. B. Freilassing, Bad Reichenhall, Berchtesgaden",
  ],

  // Reaktionszeit / Verfügbarkeit
  verfuegbarkeit:
    "24/7 erreichbar, auch an Wochenenden und Feiertagen. Im Notfall in der Regel innerhalb weniger Stunden vor Ort.",

  // Preispolitik (keine konkreten Preise nennen — jeder Fall ist individuell)
  preise:
    "Jeder Einsatz wird individuell kalkuliert. Nach einer kostenlosen Besichtigung gibt es ein transparentes Angebot ohne versteckte Kosten. Keine konkreten Preise vor der Einschätzung nennen.",

  // Versicherung
  versicherung:
    "In vielen Fällen übernehmen Haushalts- oder Gebäudeversicherungen die Kosten. Wir unterstützen bei Abwicklung und Dokumentation.",

  // Diskretion
  diskretion:
    "Neutrale Kleidung, unmarkierte Fahrzeuge, absolute Verschwiegenheit. Die Privatsphäre der Kund:innen und Nachbarschaft hat oberste Priorität.",

  // Qualifikation
  qualifikation:
    "Staatlich geprüfte Mitarbeiter, moderne Methoden und Geräte, fachgerechte und zertifizierte Desinfektion und Entsorgung nach geltenden Vorschriften.",

  // Was die AI NICHT tun darf (Sicherheitsgrenzen)
  grenzen: [
    "Niemals eine Situation als gesundheitlich sicher oder unbedenklich erklären.",
    "Keine medizinischen, rechtlichen oder psychologischen Ratschläge geben.",
    "Keine konkreten Festpreise nennen.",
    "Bei Lebensgefahr / medizinischem Notfall auf 144 (Rettung AT) bzw. 112 (DE) verweisen, nicht auf die Reinigungsfirma.",
  ],
};
