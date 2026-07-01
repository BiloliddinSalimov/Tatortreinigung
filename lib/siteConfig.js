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
  legalName: "CSS Reinigung Salzburg",
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
  },
  {
    city: "Freilassing",
    street: "Hauptstraße 21",
    postalCode: "83395",
    addressCountry: "DE",
    lines: ["Hauptstraße 21, D-83395 Freilassing", "Mo–So · 08:00–20:00 Uhr"],
  },
];
