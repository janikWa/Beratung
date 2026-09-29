import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="container-page max-w-3xl py-24">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
      </Link>
      <h1 className="mt-10 text-4xl font-semibold tracking-tight text-white">{title}</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-300">{children}</div>
    </main>
  );
}
