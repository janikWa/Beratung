/** Dezente, statische Lichtakzente für einzelne Sektionen. */
export default function GlowBackground({ position = "right" }: { position?: "left" | "right" | "center" }) {
  const placement = {
    left: "-left-40 top-1/4",
    right: "-right-40 top-1/3",
    center: "left-1/2 top-0 -translate-x-1/2",
  }[position];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute ${placement} h-112 w-md rounded-full bg-violet-600/25 blur-[120px]`} />
      <div className={`absolute ${placement} ml-40 mt-40 h-88 w-88 rounded-full bg-blue-600/20 blur-[120px]`} />
    </div>
  );
}
