/** Abstraktes Platzhalter-Logo – durch eigenes Logo (SVG) ersetzen. */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#logo-gradient)" fillOpacity="0.15" stroke="url(#logo-gradient)" strokeOpacity="0.6" />
      <path d="M9 20.5 14 14l4 4 5-7.5" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23" cy="10.5" r="2" fill="#a5b4fc" />
    </svg>
  );
}
