import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} – Data Science, KI & Web-Engineering für den Mittelstand`,
  description:
    "Wir machen komplexe Daten für den Mittelstand nutzbar: Data Science, KI-Lösungen, Automatisierung und individuelle Web-Dashboards – von der Strategie bis zum Betrieb.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
