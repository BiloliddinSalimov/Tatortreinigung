import "./globals.css";
import localFont from "next/font/local";
import { SITE_URL, COMPANY, PHONE_DISPLAY, EMAIL, LOCATIONS } from "../lib/siteConfig";
import CookieConsent from "../components/CookieConsent";

// Variable fonts committed to the repo — no network fetch at build/dev time,
// and GDPR-friendly for AT/DE visitors (no Google request at runtime either).
const serif = localFont({
  src: "./fonts/SourceSerif4-latin.woff2",
  weight: "300 600",
  variable: "--font-serif",
  display: "swap",
});
const sans = localFont({
  src: "./fonts/PublicSans-latin.woff2",
  weight: "400 700",
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tatortreinigung Salzburg & Bayern – Diskret. Schnell. Professionell.",
    template: "%s | Tatortreinigung Salzburg",
  },
  description: COMPANY.description,
  keywords: [
    "Tatortreinigung",
    "Leichenfundort Reinigung",
    "Blutreinigung",
    "Desinfektion",
    "Geruchsneutralisation",
    "Salzburg",
    "Bayern",
    "24/7 Notdienst",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Tatortreinigung Salzburg & Bayern – Diskret. Schnell. Professionell.",
    description: COMPANY.description,
    images: [{ url: "/mond-hero.jpg", width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatortreinigung Salzburg & Bayern",
    description: COMPANY.description,
    images: ["/mond-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050f19",
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description: COMPANY.description,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    image: `${SITE_URL}/mond-hero.jpg`,
    priceRange: COMPANY.priceRange,
    areaServed: COMPANY.areaServed.map((name) => ({ "@type": "Place", name })),
    address: LOCATIONS.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      postalCode: loc.postalCode,
      addressCountry: loc.addressCountry,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <CookieConsent />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
