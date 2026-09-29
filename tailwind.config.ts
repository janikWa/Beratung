import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Grundton der Seite: tiefes Navy mit Indigo-Stich (heller als slate-950)
        night: "#0f1636",
        glow: {
          violet: "#8b5cf6",
          indigo: "#6366f1",
          blue: "#3b82f6",
          cyan: "#22d3ee",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #a78bfa 0%, #818cf8 45%, #60a5fa 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.12) 50%, rgba(59,130,246,0.18) 100%)",
        "grid-lines":
          "linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139, 92, 246, 0.55)",
        "glow-blue": "0 0 40px -8px rgba(59, 130, 246, 0.5)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        blob: "blob 18s ease-in-out infinite",
        "blob-slow": "blob 26s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
