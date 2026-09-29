import { BarChart3, Bot, LayoutDashboard, Workflow, Check } from "lucide-react";
import { competencies, type Competency } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import GlowBackground from "@/components/ui/GlowBackground";

const icons: Record<Competency["icon"], typeof BarChart3> = {
  chart: BarChart3,
  bot: Bot,
  workflow: Workflow,
  dashboard: LayoutDashboard,
};

export default function Competencies() {
  return (
    <section id="leistungen" className="section scroll-mt-16">
      <GlowBackground position="left" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Kernkompetenzen"
          title="Was wir für Sie umsetzen"
          intro="Vier Disziplinen, ein Ziel: aus Ihren Daten konkrete Wettbewerbsvorteile machen. Einzeln oder als durchgängige Lösung."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {competencies.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <FadeIn key={c.title} delay={i * 0.08} className="h-full">
                <article className="glass glass-hover group relative h-full overflow-hidden p-8">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-violet-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{c.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-300">{c.description}</p>
                    <ul className="mt-6 space-y-2.5">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
