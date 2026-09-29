/** Nabla-Symbol (∇). Platzhalter – durch finales Logo ersetzen. */
export default function Logo({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 4.5h18L12 20.5 3 4.5Z" fill="none" className="stroke-white" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M8.2 8.5h7.6L12 15.3 8.2 8.5Z" className="fill-violet-400" />
    </svg>
  );
}
