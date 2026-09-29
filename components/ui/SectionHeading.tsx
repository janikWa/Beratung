import FadeIn from "./FadeIn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, intro, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <FadeIn className={`max-w-3xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-slate-300">{intro}</p>}
    </FadeIn>
  );
}
