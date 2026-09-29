"use client";

import { motion } from "framer-motion";
import { Activity, Database, RefreshCw } from "lucide-react";

const kpis = [
  { icon: Activity, label: "Pipeline-Status", value: "Aktiv", accent: "text-emerald-300" },
  { icon: Database, label: "Angebundene Quellen", value: "12", accent: "text-violet-200" },
  { icon: RefreshCw, label: "Letzte Synchronisierung", value: "vor 2 Min.", accent: "text-blue-200" },
];

const bars = [38, 52, 44, 66, 58, 74, 62, 81, 70, 88, 79, 92];

const pipeline = ["ERP", "CRM", "Sensorik", "Data Lake", "Modell", "Dashboard"];

/** Abstrakte Illustration eines Daten-Dashboards (rein dekorativ, keine echten Kennzahlen). */
export default function DashboardPreview() {
  return (
    <div className="relative" aria-hidden>
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-violet-600/30 via-indigo-500/20 to-blue-600/30 opacity-60 blur-3xl" />

      <div className="glass relative overflow-hidden p-2 text-left">
        {/* Fensterleiste */}
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-4 hidden h-5 w-56 rounded-md bg-white/5 sm:block" />
        </div>

        <div className="grid gap-2 rounded-xl bg-night/60 p-4 sm:p-6 lg:grid-cols-3">
          {/* KPI-Kacheln */}
          <div className="grid gap-2 sm:grid-cols-3 lg:col-span-3">
            {kpis.map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
                <div className={`mt-2 text-xl font-semibold ${accent}`}>{value}</div>
              </div>
            ))}
          </div>

          {/* Flächendiagramm */}
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-2.5 w-28 rounded-full bg-white/10" />
              <span className="h-2.5 w-14 rounded-full bg-violet-400/30" />
            </div>
            <svg viewBox="0 0 400 140" className="h-36 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
              {[35, 70, 105].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(148,163,184,0.08)" />
              ))}
              <path
                d="M0 110 C 40 100, 60 80, 100 85 S 160 50, 200 60 S 260 30, 300 40 S 360 15, 400 20 L 400 140 L 0 140 Z"
                fill="url(#area)"
              />
              <motion.path
                d="M0 110 C 40 100, 60 80, 100 85 S 160 50, 200 60 S 260 30, 300 40 S 360 15, 400 20"
                fill="none"
                stroke="url(#line)"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Balkendiagramm */}
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 h-2.5 w-20 rounded-full bg-white/10" />
            <div className="flex h-36 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-500/40 to-violet-400/80"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 1 + i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* Pipeline */}
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4 lg:col-span-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1">{step}</span>
                  {i < pipeline.length - 1 && <span className="h-px w-4 bg-gradient-to-r from-violet-400/60 to-blue-400/60 sm:w-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
