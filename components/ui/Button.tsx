import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  withArrow?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = "primary", withArrow = false, className = "" }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white shadow-glow hover:shadow-[0_0_60px_-8px_rgba(139,92,246,0.8)] hover:brightness-110",
    ghost: "border border-white/15 bg-white/[0.06] text-slate-200 backdrop-blur hover:border-white/30 hover:bg-white/[0.07]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
