import Link from "next/link";
import { footer, site } from "@/lib/content";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-400">{footer.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {footer.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-slate-300 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.legalName}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
