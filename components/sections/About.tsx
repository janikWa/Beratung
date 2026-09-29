import Image from "next/image";
import { about, type Founder } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import GlowBackground from "@/components/ui/GlowBackground";

export default function About() {
  return (
    <section id="ueber-uns" className="section scroll-mt-16">
      <GlowBackground position="center" />
      <div className="container-page">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} intro={about.intro} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {about.founders.map((f, i) => (
            <FadeIn key={`${f.role}-${i}`} delay={i * 0.1} className="h-full">
              <FounderCard founder={f} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="glass glass-hover group relative flex h-full flex-col overflow-hidden p-8 text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent" />

      <div className="relative mx-auto h-28 w-28">
        <div className="absolute -inset-1 rounded-full bg-linear-to-br from-violet-500 to-blue-500 opacity-60 blur-md transition duration-500 group-hover:opacity-90" />
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-slate-900">
          {founder.image ? (
            <Image src={founder.image} alt={founder.name} fill sizes="112px" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-violet-600/30 to-blue-600/30 text-2xl font-semibold text-white/80">
              {initials(founder.name)}
            </div>
          )}
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">{founder.name}</h3>
      <p className="mt-1 text-sm font-medium text-gradient">{founder.role}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">{founder.background}</p>
      <p className="mt-5 flex-1 leading-relaxed text-slate-300">„{founder.quote}“</p>

      {founder.linkedin && (
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <LinkedInIcon /> LinkedIn
        </a>
      )}
    </article>
  );
}

function initials(name: string) {
  const clean = name.replace(/[\[\]]/g, "").trim();
  const parts = clean.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
