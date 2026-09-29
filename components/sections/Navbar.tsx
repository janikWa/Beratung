"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-night/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-base font-semibold tracking-tight text-white">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={site.bookingUrl} className="px-5 py-2.5">
            Erstgespräch
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Button href={site.bookingUrl} className="w-full" withArrow>
                  Erstgespräch vereinbaren
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
