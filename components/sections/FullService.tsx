import { Code2, Server, ShieldCheck, CheckCircle2 } from "lucide-react";
import { fullService } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { site } from "@/lib/content";

const icons = { code: Code2, server: Server, shield: ShieldCheck };

export default function FullService() {
  return (
    <section id="full-service" className="section scroll-mt-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-950/40 via-night to-blue-950/40 p-8 sm:p-12 lg:p-16">
          {/* Hintergrund-Akzente */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-violet-600/30 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow={fullService.eyebrow} title={fullService.title} intro={fullService.intro} align="left" />

              <FadeIn delay={0.15}>
                <ul className="mt-8 space-y-3">
                  {fullService.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button href={site.bookingUrl} withArrow>
                    Projekt besprechen
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="grid gap-4 lg:col-span-3">
              {fullService.pillars.map((p, i) => {
                const Icon = icons[p.icon];
                return (
                  <FadeIn key={p.title} delay={0.1 + i * 0.1}>
                    <article className="glass glass-hover flex gap-5 p-6 sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/15 text-violet-200 ring-1 ring-inset ring-white/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                        <p className="mt-2 leading-relaxed text-slate-300">{p.description}</p>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
