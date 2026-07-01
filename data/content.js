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
        h: "Blut- & Sekretbeseitigung",
        d: "Tiefenreinigung und keimfreie Beseitigung von Blut, Körperflüssigkeiten und biologischen Rückständen mit Spezialmitteln.",
      },
    ],
  },
  {
    n: "2",
    title: "Desinfektion & Sanitär",
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
    check: true,
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
    a: "Im Notfall sind wir rund um die Uhr erreichbar und kommen so schnell wie möglich – in Salzburg, im Umland und in Bayern.",
  },
  {
    q: "Werden die Kosten von der Versicherung übernommen?",
    a: "In vielen Fällen können die Kosten von Versicherungen getragen werden. Wir beraten Sie und unterstützen Sie gerne bei der Abwicklung.",
  },
  {
    q: "Wird alles diskret behandelt?",
    a: "Ja. Wir arbeiten vertraulich, respektvoll und ohne unnötiges Aufsehen – Ihre Privatsphäre hat für uns oberste Priorität.",
  },
  {
    q: "Was soll ich tun, bevor Sie eintreffen?",
    a: "Betreten Sie die betroffenen Räume möglichst nicht und berühren Sie keine Oberflächen. Rufen Sie uns an – wir leiten Sie ruhig durch die nächsten Schritte.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Wir sind in Salzburg, im gesamten Umland sowie in Bayern für Sie im Einsatz.",
  },
];
