import { Mail } from "lucide-react";
import { cta, site } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section id="kontakt" className="section scroll-mt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div className="container-page">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{cta.text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={site.bookingUrl} withArrow className="px-8 py-4 text-base">
              {cta.button}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
