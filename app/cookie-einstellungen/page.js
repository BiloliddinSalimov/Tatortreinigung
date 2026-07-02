import LegalPageShell from "@/components/LegalPageShell";
import CookieSettingsClient from "./CookieSettingsClient";

export const metadata = {
  title: "Cookie-Einstellungen",
  description: "Verwalten Sie Ihre Cookie-Einwilligung.",
  alternates: { canonical: "/cookie-einstellungen" },
  robots: { index: true, follow: true },
};

export default function CookieEinstellungenPage() {
  return (
    <LegalPageShell
      eyebrowText="Rechtliches"
      title="Cookie-Einstellungen"
      intro="Notwendige Speichertechnologien sind immer aktiv. Statistik- und Marketing-Cookies laden wir ausschließlich mit Ihrer Einwilligung — Sie können Ihre Auswahl hier jederzeit ändern oder widerrufen."
    >
      <CookieSettingsClient />
    </LegalPageShell>
  );
}
