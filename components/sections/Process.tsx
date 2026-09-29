import { process } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import GlowBackground from "@/components/ui/GlowBackground";

export default function Process() {
  return (
    <section id="prozess" className="section scroll-mt-16">
      <GlowBackground position="right" />
      <div className="container-page">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} intro={process.intro} />

        <ol className="relative mx-auto mt-20 max-w-5xl">
          {/* Vertikale Timeline-Linie */}
          <div
            aria-hidden
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-blue-500/0 lg:left-1/2 lg:-translate-x-1/2"
          />

          {process.steps.map((step, i) => {
            const isRight = i % 2 === 1;
            return (
              <li key={step.title} className="relative pb-14 pl-20 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0">
                {/* Knotenpunkt */}
                <div className="absolute left-6 top-0 -translate-x-1/2 lg:left-1/2">
                  <FadeIn y={0}>
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/40 bg-night text-sm font-semibold text-white shadow-glow">
                      <span className="text-gradient">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </FadeIn>
                </div>

                <FadeIn
                  delay={0.1}
                  className={isRight ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"}
                >
                  <div className="glass glass-hover p-6 sm:p-8">
                    <span className="inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                      {step.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
