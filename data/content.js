// All page content (German copy). Kept out of the components so it can later
// be swapped for a CMS without touching layout/markup.

export const ABOUT_SECTIONS = [
  {
    n: "1",
    title: "Reinigungsleistungen",
    items: [
      {
        h: "Tatortreinigung",
        d: "Professionelle, schnelle und absolut diskrete Reinigung von Orten, an denen unangenehme oder tragische Ereignisse stattgefunden haben.",
      },
      {
        h: "Leichenfundort-Reinigung",
        d: "Reinigung und Instandsetzung von Fundorten nach Todesfällen unter Einhaltung aller Sicherheits- und Hygienevorschriften.",
      },
      {
        h: "Messiereinigung",
        d: "Entrümpelung, Grundreinigung und Desinfektion stark vermüllter oder vernachlässigter Wohnungen — diskret und mit Geruchsbeseitigung.",
      },
    ],
  },
  {
    n: "2",
    title: "Desinfektion",
    items: [
      {
        h: "Desinfektion & Hygienereinigung",
        d: "Beseitigung unsichtbarer Viren, Bakterien und Keime, um nach schweren Ereignissen die vollständige Sicherheit des Bereichs zu gewährleisten.",
      },
      {
        h: "Schädlingsbekämpfung",
        d: "Vollständige Beseitigung von Insekten und anderen Schädlingen, die nach Todesfällen auftreten können.",
      },
    ],
  },
  {
    n: "3",
    title: "Geruchsbeseitigung",
    items: [
      {
        h: "Geruchsneutralisation",
        d: "Vollständige Beseitigung intensiver, unangenehmer Gerüche nach Todesfällen mithilfe von Spezialgeräten – inklusive Luftreinigung.",
      },
    ],
  },
  {
    n: "4",
    title: "Service & Ablauf",
    items: [
      {
        h: "24/7 Soforthilfe",
        d: "Rund um die Uhr erreichbar – im Notfall nehmen wir Ihren Anruf jederzeit entgegen und sind sofort vor Ort.",
      },
      {
        h: "Kostenlose Besichtigung",
        d: "Unsere Fachkräfte kommen zuerst vor Ort und bewerten Umfang und Preis der Arbeiten kostenlos.",
      },
      {
        h: "Professionalität & Diskretion",
        d: "Staatlich geprüfte Mitarbeiter, moderne Methoden und Geräte sowie vollständiger Schutz Ihrer Privatsphäre.",
      },
    ],
  },
];

export const STEPS = [
  {
    n: "01",
    h: "Ihr Anruf",
    d: "Sie erreichen uns jederzeit. Wir hören zu und klären die wichtigsten Fragen – ruhig und ohne Druck.",
  },
  {
    n: "02",
    h: "Kostenlose Einschätzung",
    d: "Wir verschaffen uns ein Bild der Lage und besprechen die nächsten Schritte transparent.",
  },
  {
    n: "03",
    h: "Diskrete Reinigung & Desinfektion",
    d: "Wir reinigen, desinfizieren und neutralisieren Gerüche – mit Sorgfalt und voller Schutzausrüstung.",
  },
  {
    n : "04",
    h: "Sicherer Zustand",
    d: "Wir übergeben Ihnen die Räume wieder sauber, hygienisch und sicher.",
  },
];

export const HAND_SERVICES = [
  {
    h: "Desinfektion & Dekontamination",
    d: "Gründliche Desinfektion aller betroffenen Flächen mit geeigneten Mitteln.",
  },
  {
    h: "Geruchsneutralisierung & Ozonbehandlung",
    d: "Wir entfernen Gerüche nachhaltig, statt sie nur zu überdecken.",
  },
  {
    h: "Schädlingsbekämpfung",
    d: "Wir stoppen die Ausbreitung von Schädlingen und beseitigen sie gezielt.",
  },
  {
    h: "Fachgerechte Entsorgung",
    d: "Sichere, gesetzeskonforme Entsorgung kontaminierter Materialien.",
  },
  {
    h: "Sanierung & Wiederherstellung",
    d: "Bei Bedarf versetzen wir die Räume wieder in einen bewohnbaren Zustand.",
  },
  {
    h: "24 h Notdienst",
    d: "Rund um die Uhr für dringende Einsätze in Salzburg & Bayern erreichbar.",
  },
];

// Portfolio, im Instagram-Stil: EIN durchgehendes Karussell. Beim Wischen
// wechselt oben das Bild und darunter der zugehörige Text. Jeder Eintrag =
// eine Folie. Neues Bild hinzufügen = Objekt anhängen; Foto in
// /public/portfolio/ ablegen und den Pfad in `image` setzen.
export const PORTFOLIO = [
  {
    image: "/portfolio/image1.jpg",
    title: "Tatortreinigung – Privatwohnung",
    loc: "Salzburg · Wohnbereich, ca. 28 m²",
    desc: "Vollständige Dekontamination nach behördlicher Freigabe – diskret und ohne sichtbare Spuren.",
    tags: ["Blutbeseitigung", "Desinfektion"],
  },
  {
    image: "/portfolio/image2.png",
    title: "Leichenfundort – Wohnhaus",
    loc: "Salzburg-Umland · Mehrparteienhaus",
    desc: "Reinigung, Desinfektion und Geruchsbeseitigung nach behördlicher Fundort-Freigabe.",
    tags: ["Dekontamination", "Geruchsneutralisation"],
  },
  {
    image: "/portfolio/image3.jpg",
    title: "Tatortreinigung – Wohnzimmer",
    loc: "Hallein · Erdgeschoss",
    desc: "Sicherung, Beseitigung biologischer Spuren und gründliche Desinfektion des gesamten Raumes.",
    tags: ["Blutbeseitigung", "Desinfektion"],
  },
  {
    image: "/portfolio/image4.jpg",
    title: "Wohnzimmer – nach der Sanierung",
    loc: "Hallein · Erdgeschoss",
    desc: "Derselbe Raum nach Abschluss: hygienisch rein, geruchsfrei und wieder sicher nutzbar.",
    tags: ["Sanierung", "Geruchsneutralisation"],
  },
];

export const FAQS = [
  {
    q: "Wie schnell sind Sie vor Ort?",
    a: "Im Notfall sind wir rund um die Uhr erreichbar und bemühen uns, so schnell wie möglich bei Ihnen vor Ort zu sein. In Salzburg und Umgebung können wir in der Regel innerhalb weniger Stunden reagieren.",
  },
  {
    q: "Welche Leistungen umfasst die Tatortreinigung?",
    a: "Unsere Leistungen umfassen die fachgerechte Reinigung und Desinfektion nach Todesfällen, Suiziden, Unfällen, Gewaltverbrechen, Leichenfunden, Messie-Wohnungen sowie die Beseitigung biologischer Verunreinigungen und Gerüche.",
  },
  {
    q: "Wird alles diskret behandelt?",
    a: "Ja. Diskretion hat für uns höchste Priorität. Unsere Mitarbeiter arbeiten professionell, vertraulich und auf Wunsch mit neutralen Fahrzeugen ohne Firmenbeschriftung.",
  },
  {
    q: "Werden die Kosten von der Versicherung übernommen?",
    a: "In vielen Fällen übernehmen Versicherungen die Kosten ganz oder teilweise. Gerne beraten wir Sie und unterstützen Sie bei der Kommunikation mit Ihrer Versicherung.",
  },
  {
    q: "Was soll ich tun, bevor Sie eintreffen?",
    a: "Bitte betreten Sie die betroffenen Räume möglichst nicht und berühren Sie keine Oberflächen. Kontaktieren Sie uns telefonisch – wir informieren Sie über die weiteren Schritte.",
  },
  {
    q: "Sind Tatortreinigungen gesundheitlich gefährlich?",
    a: "Ja, biologische Verunreinigungen können gesundheitliche Risiken darstellen. Deshalb dürfen Reinigung und Desinfektion nur von geschultem Fachpersonal mit entsprechender Schutzausrüstung durchgeführt werden.",
  },
  {
    q: "Wie läuft eine Tatortreinigung ab?",
    a: "Nach einer Besichtigung erstellen wir eine Einschätzung des Aufwands. Anschließend führen wir die Reinigung, Desinfektion, Geruchsbeseitigung und fachgerechte Entsorgung aller kontaminierten Materialien durch.",
  },
  {
    q: "Entfernen Sie auch Gerüche?",
    a: "Ja. Mithilfe professioneller Verfahren und Spezialgeräten beseitigen wir selbst starke Geruchsbelastungen dauerhaft und nachhaltig.",
  },
  {
    q: "Reinigen Sie auch Messie-Wohnungen?",
    a: "Ja. Wir übernehmen die vollständige Räumung, Reinigung, Desinfektion und Wiederherstellung von Messie-Wohnungen und stark verschmutzten Objekten.",
  },
  {
    q: "Arbeiten Sie auch an Wochenenden und Feiertagen?",
    a: "Ja. Unser Notdienst ist 24 Stunden täglich, 365 Tage im Jahr für Sie erreichbar – auch an Wochenenden und Feiertagen.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Wir sind in Salzburg, dem gesamten Salzburger Umland sowie auf Anfrage in Oberösterreich und Bayern für Sie im Einsatz.",
  },
  {
    q: "Muss ich bei der Reinigung anwesend sein?",
    a: "Nein. Nach Absprache können wir die Arbeiten selbstständig durchführen. Sie müssen während der Reinigung nicht vor Ort sein.",
  },
  {
    q: "Wie lange dauert eine Tatortreinigung?",
    a: "Die Dauer hängt vom Ausmaß der Verunreinigung ab. Kleinere Einsätze können innerhalb weniger Stunden abgeschlossen werden, umfangreichere Sanierungen benötigen mehrere Tage.",
  },
  {
    q: "Entsorgen Sie kontaminierte Materialien fachgerecht?",
    a: "Ja. Alle kontaminierten Materialien werden gemäß den gesetzlichen Vorschriften fachgerecht und sicher entsorgt.",
  },
  {
    q: "Erhalte ich ein Angebot vorab?",
    a: "Ja. Nach einer Besichtigung oder anhand von Fotos erstellen wir Ihnen ein transparentes und unverbindliches Angebot.",
  },
  {
    q: "Können Sie auch Vermieter, Hausverwaltungen und Hotels unterstützen?",
    a: "Ja. Wir arbeiten regelmäßig für Privatpersonen, Vermieter, Hausverwaltungen, Hotels, Unternehmen sowie öffentliche Einrichtungen.",
  },
  {
    q: "Ist eine Besichtigung kostenpflichtig?",
    a: "In vielen Fällen bieten wir eine kostenlose Erstberatung und eine unverbindliche Einschätzung an. Kontaktieren Sie uns gerne für weitere Informationen.",
  },
  {
    q: "Kann ich Sie anonym kontaktieren?",
    a: "Selbstverständlich. Sie können uns jederzeit vertraulich und diskret kontaktieren. Alle Anfragen werden streng vertraulich behandelt.",
  },
];
