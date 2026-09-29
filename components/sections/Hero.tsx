"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { hero, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import DashboardPreview from "@/components/ui/DashboardPreview";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <HeroBackground animate={!reduce} />

      <motion.div variants={container} initial="hidden" animate="show" className="container-page relative text-center">
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {hero.headlineStart} <span className="text-gradient">{hero.headlineHighlight}</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {hero.subheadline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={site.bookingUrl} withArrow className="px-8 py-4 text-base">
            {hero.primaryCta}
          </Button>
          <Button href="#leistungen" variant="ghost" className="px-8 py-4 text-base">
            {hero.secondaryCta}
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-slate-300 sm:flex-row sm:gap-8"
        >
          {hero.trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-400" />
              {point}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item} className="mx-auto mt-20 max-w-5xl">
          <DashboardPreview />
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Abstrakter, fließender lila-blauer Gradient mit feinem Raster. */
function HeroBackground({ animate }: { animate: boolean }) {
  const float = (x: number[], y: number[], duration: number) =>
    animate ? { animate: { x, y }, transition: { duration, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const } } : {};

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-lines bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <motion.div
        {...float([0, 80, -40], [0, 40, -20], 16)}
        className="absolute left-[10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-violet-600/45 blur-[130px]"
      />
      <motion.div
        {...float([0, -60, 30], [0, 60, 20], 20)}
        className="absolute right-[5%] top-[5%] h-[32rem] w-[32rem] rounded-full bg-blue-600/40 blur-[130px]"
      />
      <motion.div
        {...float([0, 40, -60], [0, -30, 40], 24)}
        className="absolute left-[35%] top-[30%] h-[26rem] w-[26rem] rounded-full bg-indigo-500/30 blur-[120px]"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
    </div>
  );
}
