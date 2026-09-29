import LegalPage from "@/components/ui/LegalPage";
import { site } from "@/lib/content";

export const metadata = { title: `Impressum – ${site.name}` };

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <p>Angaben gemäß § 5 DDG</p>
      <p>
        {site.legalName}
        <br />[Straße Hausnummer]
        <br />[PLZ Ort]
      </p>
      <p>
        Vertreten durch: [Geschäftsführer/in]
        <br />Registergericht: [Amtsgericht] · Registernummer: [HRB …]
        <br />USt-IdNr.: [DE …]
      </p>
      <p>E-Mail: {site.email}</p>
      <p className="text-sm text-slate-400">Platzhalter – bitte vor Veröffentlichung rechtlich prüfen lassen.</p>
    </LegalPage>
  );
}
