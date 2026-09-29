import LegalPage from "@/components/ui/LegalPage";
import { site } from "@/lib/content";

export const metadata = { title: `Datenschutz – ${site.name}` };

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>[Hier folgt Ihre Datenschutzerklärung.]</p>
      <p className="text-sm text-slate-400">Platzhalter – bitte vor Veröffentlichung rechtlich prüfen lassen.</p>
    </LegalPage>
  );
}
