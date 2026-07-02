// Central place for all business data (NAP), used by the UI, metadata and
// JSON-LD structured data. Edit contact details here — not in the components.

export const PHONE_DISPLAY = "+43 660 8313103";
export const PHONE = "+436608313103"; // tel: / wa.me format (no spaces)
export const EMAIL = "office@css-reinigung-salzburg.at";
export const WHATSAPP = "https://wa.me/436608313103";

// Public site URL — override with NEXT_PUBLIC_SITE_URL in the environment.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://css-reinigung-salzburg.at";

export const COMPANY = {
  name: "Tatortreinigung Salzburg & Bayern",
  legalName: "CSS GlanzWerk GmbH",
  tagline: "Diskret. Schnell. Professionell.",
  description:
    "Professionelle Tatortreinigung in Salzburg & Bayern. 24/7 erreichbar, diskret und zuverlässig. Blut- und Sekretbeseitigung, Desinfektion, Geruchsneutralisation.",
  areaServed: ["Salzburg", "Salzburg-Umland", "Bayern"],
  priceRange: "€€",
};

// Physical branches — also feed the LocalBusiness JSON-LD.
export const LOCATIONS = [
  {
    city: "Salzburg",
    street: "Ignaz-Harrer-Straße 8",
    postalCode: "5020",
    addressCountry: "AT",
    lines: ["Ignaz-Harrer-Straße 8, 5020 Salzburg", "Mo–So · 08:00–20:00 Uhr"],
  }
];

// Impressum / Firmenbuchdaten — bestätigte offizielle Werte. Quelle für den
// "Über uns"-Footer sowie die /impressum- und /datenschutz-Seite. Nur hier
// pflegen.
export const LEGAL = {
  name: "CSS GlanzWerk GmbH",
  street: "Ignaz-Harrer-Straße 8",
  postalCode: "5020",
  city: "Salzburg",
  country: "Österreich",
  phoneDisplay: "+43 662 430 330",
  phoneTel: "+43662430330",
  mobileDisplay: "+43 660 831 31 03",
  mobileTel: "+436608313103",
  email: EMAIL,
  legalForm: "GmbH",
  registerCourt: "Amtsgericht Salzburg Stadt",
  registerNumber: "FN 676303 P",
  vatId: "ATU83125039",
  taxNumber: "91 346/0077",
  ceo: "Mst. Samir Kurtaj",
};
