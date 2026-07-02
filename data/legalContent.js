// Inhalte für Impressum & Datenschutzerklärung. Nur hier pflegen — die
// Seiten unter app/impressum und app/datenschutz rendern diese Daten nur.
import { LEGAL } from "../lib/siteConfig";

// Labeled Liste fürs Impressum (§5 ECG + §25 MedienG). Bestätigte offizielle
// Werte — Reihenfolge und Beschriftung wie vom Auftraggeber vorgegeben.
export const IMPRESSUM_FIELDS = [
  { label: "Vollständiger Firmenname", value: LEGAL.name },
  {
    label: "Anschrift",
    value: `${LEGAL.street}, ${LEGAL.postalCode} ${LEGAL.city}, ${LEGAL.country}`,
  },
  { label: "Telefon", value: LEGAL.phoneDisplay, href: `tel:${LEGAL.phoneTel}` },
  { label: "Mobil", value: LEGAL.mobileDisplay, href: `tel:${LEGAL.mobileTel}` },
  { label: "E-Mail", value: LEGAL.email, href: `mailto:${LEGAL.email}` },
  { label: "Rechtsform", value: LEGAL.legalForm },
  { label: "Firmenbuchgericht", value: LEGAL.registerCourt },
  { label: "Firmenbuchnummer", value: LEGAL.registerNumber },
  { label: "UID-Nummer", value: LEGAL.vatId },
  { label: "Steuernummer", value: LEGAL.taxNumber },
  { label: "Geschäftsführung", value: LEGAL.ceo },
];

// Datenschutzerklärung (DSGVO). Struktur: Standard-Abschnitte + drei
// app-spezifische Abschnitte (KI-Assistent, Kontaktkanäle, Google Maps).
export const DATENSCHUTZ_SECTIONS = [
  {
    title: "Allgemeine Hinweise",
    paragraphs: [
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder unseren KI-Assistenten nutzen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
    ],
  },
  {
    title: "Verantwortlicher",
    paragraphs: [
      "Verantwortlicher für die Datenverarbeitung auf dieser Website ist:",
      `${LEGAL.name}\n${LEGAL.ceo}\n${LEGAL.street}, ${LEGAL.postalCode} ${LEGAL.city}\nTelefon: ${LEGAL.phoneDisplay}\nMobil: ${LEGAL.mobileDisplay}\nE-Mail: ${LEGAL.email}`,
    ],
  },
  {
    title: "Wie und warum wir Daten erfassen",
    paragraphs: [
      "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — etwa telefonisch, per WhatsApp, E-Mail oder durch Eingaben in unseren KI-Assistenten. Andere Daten werden beim Besuch der Website automatisch durch unsere IT-Systeme erfasst (z. B. technische Daten wie Browsertyp, Betriebssystem oder Zugriffszeit).",
      "Wir nutzen diese Daten ausschließlich, um Ihre Anfrage zu bearbeiten, den technisch einwandfreien und sicheren Betrieb der Website zu gewährleisten und — sofern Sie zugestimmt haben — zur Analyse des Nutzungsverhaltens.",
    ],
  },
  {
    title: "Ihre Rechte als betroffene Person",
    paragraphs: [
      "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Ihnen stehen außerdem folgende Rechte zu:",
    ],
    list: [
      "Auskunftsrecht (Art. 15 DSGVO)",
      "Recht auf Berichtigung (Art. 16 DSGVO)",
      "Recht auf Löschung (Art. 17 DSGVO)",
      "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerrufsrecht: erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO)",
      "Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO) — in Österreich die Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, www.dsb.gv.at",
    ],
  },
  {
    title: "SSL-/TLS-Verschlüsselung",
    paragraphs: [
      "Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile Ihres Browsers von „http://“ auf „https://“ wechselt, sowie am Schloss-Symbol in der Adresszeile. Ist die Verschlüsselung aktiv, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
    ],
  },
  {
    title: "Server-Log-Dateien",
    paragraphs: [
      "Beim Aufruf dieser Website werden automatisch Informationen in sogenannten Server-Log-Dateien erfasst, die Ihr Browser automatisch übermittelt:",
    ],
    list: [
      "Browsertyp und -version",
      "verwendetes Betriebssystem",
      "Referrer-URL",
      "Hostname des zugreifenden Rechners",
      "Uhrzeit der Serveranfrage",
      "IP-Adresse",
    ],
    paragraphsAfterList: [
      "Eine Zusammenführung dieser Daten mit anderen Datenquellen findet nicht statt. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO — unser berechtigtes Interesse an einem technisch fehlerfreien und sicheren Betrieb dieser Website.",
    ],
  },
  {
    title: "Unser KI-Assistent",
    paragraphs: [
      "Auf der Startseite können Sie eine Nachricht in unseren KI-Assistenten eingeben, um eine erste Einschätzung zu Ihrer Situation zu erhalten. Dabei gilt:",
    ],
    list: [
      "Ihre Eingabe wird ausschließlich serverseitig verarbeitet, um eine Antwort zu erzeugen.",
      "Der Gesprächsverlauf wird von uns nicht dauerhaft gespeichert oder protokolliert und nicht zu Trainingszwecken verwendet.",
      "Es findet keine dauerhafte Profilbildung anhand Ihrer Eingaben statt.",
      "Zur Erzeugung der Antwort wird Ihre Eingabe an unseren technischen Dienstleister für Sprachmodelle, Google Ireland Limited (Gemini API), übermittelt — ausschließlich zu diesem Zweck. Informationen zur Datenverarbeitung durch Google: policies.google.com/privacy.",
      "Zum Schutz vor Missbrauch wird Ihre IP-Adresse kurzzeitig (max. 5 Minuten) ausschließlich im Arbeitsspeicher zur Begrenzung der Anfragenanzahl verarbeitet und danach automatisch gelöscht (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse am Schutz vor Überlastung und Missbrauch).",
    ],
    paragraphsAfterList: [
      // TODO: CLIENT TO CONFIRM — Abschluss eines Auftragsverarbeitungsvertrags (AVV) mit dem Modell-Anbieter dokumentieren, sobald vorhanden.
      "Bitte geben Sie im Chat keine besonders schutzwürdigen personenbezogenen Daten Dritter an (z. B. Gesundheitsdaten, vollständige Namen), sofern dies für Ihre Anfrage nicht zwingend erforderlich ist.",
    ],
  },
  {
    title: "Kontaktaufnahme (Telefon, WhatsApp, E-Mail)",
    paragraphs: [
      "Wenn Sie per Telefon, WhatsApp oder E-Mail mit uns in Verbindung treten, speichern wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Inhalt der Anfrage), um Ihre Anfrage zu bearbeiten und gegebenenfalls Rückfragen zu stellen.",
      "Rechtsgrundlage ist je nach Fallgestaltung Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder die Erforderlichkeit zur Durchführung vorvertraglicher Maßnahmen bzw. eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO), etwa wenn Sie einen Einsatz anfragen.",
      "Nachrichten über WhatsApp werden über die Infrastruktur von WhatsApp (Meta Platforms Ireland Limited) übertragen; zusätzlich gilt die Datenschutzerklärung von WhatsApp.",
      "Ihre Daten verbleiben bei uns, bis Sie deren Löschung verlangen, Ihre Einwilligung widerrufen oder der Zweck der Speicherung entfällt — etwa nach abgeschlossener Bearbeitung Ihrer Anfrage. Gesetzliche Aufbewahrungsfristen bleiben unberührt.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Für den Betrieb dieser Website sind aktuell keine Cookies oder vergleichbaren Technologien zur Analyse oder für Marketingzwecke im Einsatz. Lediglich Ihre Auswahl in den Cookie-Einstellungen wird technisch notwendig in Ihrem Browser (Local Storage) gespeichert, damit wir sie nicht bei jedem Besuch erneut abfragen müssen.",
      "Sobald wir zusätzliche, nicht technisch notwendige Cookies einsetzen (z. B. für Statistik oder Marketing), werden diese ausschließlich nach Ihrer ausdrücklichen Einwilligung geladen. Sie können Ihre Auswahl jederzeit unter Cookie-Einstellungen verwalten oder widerrufen.",
    ],
  },
  {
    title: "Google Maps",
    paragraphs: [
      "Zur Anzeige unseres Standorts binden wir optional eine Karte von Google Maps ein (Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).",
    ],
    list: [
      "Die Karte wird nicht automatisch geladen. Erst wenn Sie im entsprechenden Kartenfeld auf „Karte laden“ klicken, wird der Google-Maps-Dienst eingebunden.",
      "Mit dem Laden der Karte wird Ihre IP-Adresse an Server von Google übertragen, die sich unter anderem in den USA befinden können. Wir haben auf Art und Umfang dieser Datenverarbeitung keinen Einfluss.",
      "Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ihre Auswahl gilt nur für den aktuellen Browser-Tab bzw. die aktuelle Sitzung.",
      "Ohne das Laden der Karte können Sie unseren Standort auch über den Link „In Google Maps öffnen“ ansehen — dieser öffnet Google Maps in einem neuen Tab, ohne dass zuvor Daten an Google übermittelt werden.",
    ],
    paragraphsAfterList: [
      "Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google: policies.google.com/privacy.",
    ],
  },
  {
    title: "Widerspruch gegen Werbe-E-Mails",
    paragraphs: [
      "Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.",
    ],
  },
];
