/**
 * Zentrale Inhalte der Landingpage.
 * Alle Texte, Namen und Links werden hier gepflegt – die Komponenten bleiben rein darstellend.
 * Platzhalter in [eckigen Klammern] vor dem Go-live ersetzen.
 */

export const site = {
  name: "[Firmenname]",
  legalName: "[Firmenname] UG (haftungsbeschränkt)",
  email: "kontakt@[ihre-domain].de",
  // Link zu Ihrem Buchungstool (z. B. Cal.com) – alternativ "mailto:"-Link
  bookingUrl: "#kontakt",
};

export const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Prozess", href: "#prozess" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Full-Service", href: "#full-service" },
];

export const hero = {
  badge: "Data Science · KI · Web-Engineering",
  headlineStart: "Wir machen komplexe Daten",
  headlineHighlight: "für den Mittelstand nutzbar.",
  subheadline:
    "Von der ersten Datenanalyse bis zur produktiven KI-Lösung: Wir verbinden Data Science, Künstliche Intelligenz und moderne Webtechnologien zu Anwendungen, die in Ihrem Arbeitsalltag echten Mehrwert schaffen.",
  primaryCta: "Erstgespräch vereinbaren",
  secondaryCta: "Leistungen ansehen",
  trustPoints: ["Strategie & Umsetzung aus einer Hand", "DSGVO-bewusst & Hosting in Deutschland", "Direkter Draht zu den Gründern"],
};

export type Competency = {
  icon: "chart" | "bot" | "dashboard" | "workflow";
  title: string;
  description: string;
  points: string[];
};

export const competencies: Competency[] = [
  {
    icon: "chart",
    title: "Data Science",
    description:
      "Wir erschließen die Muster in Ihren Daten – von explorativer Analyse über Prognosemodelle bis zur belastbaren Entscheidungsgrundlage.",
    points: ["Predictive Analytics & Forecasting", "Datenqualität & Datenmodellierung", "Statistische Auswertungen"],
  },
  {
    icon: "bot",
    title: "KI-Lösungen",
    description:
      "Wir integrieren Large Language Models und Machine Learning dort, wo sie Prozesse messbar verbessern – nicht dort, wo sie nur gut klingen.",
    points: ["LLM-Anwendungen & Wissensassistenten", "Dokumentenverarbeitung", "Machine-Learning-Modelle im Betrieb"],
  },
  {
    icon: "workflow",
    title: "Automatisierung",
    description:
      "Wiederkehrende Abläufe übernehmen Systeme. Ihr Team gewinnt Zeit für die Aufgaben, die wirklich Fachwissen erfordern.",
    points: ["Daten-Pipelines & ETL", "Prozess- und Workflow-Automatisierung", "Schnittstellen zu ERP, CRM & Co."],
  },
  {
    icon: "dashboard",
    title: "Komplexe Web-Dashboards",
    description:
      "Wir machen Datenströme sichtbar: performante Frontends, die komplexe Zusammenhänge intuitiv bedienbar machen.",
    points: ["Echtzeit-Dashboards & Monitoring", "Individuelle Web-Applikationen", "Rollen- & Rechtekonzepte"],
  },
];

export const process = {
  eyebrow: "Der Prozess",
  title: "Von der Idee zur produktiven Lösung",
  intro:
    "Wir beraten nicht nur strategisch – wir setzen auch um. Ein Team begleitet Sie von der ersten Analyse bis zum stabilen Betrieb, ohne Reibungsverluste zwischen Konzept und Code.",
  steps: [
    {
      title: "Potenzialanalyse & Strategie",
      description:
        "Gemeinsam identifizieren wir, wo Daten und KI in Ihrem Unternehmen den größten Hebel haben – priorisiert nach Aufwand, Nutzen und Machbarkeit.",
      tag: "Beratung",
    },
    {
      title: "Architektur & Prototyping",
      description:
        "Wir entwerfen eine skalierbare Zielarchitektur und validieren die Idee schnell mit einem funktionsfähigen Prototyp an echten Daten.",
      tag: "Konzeption",
    },
    {
      title: "Agile Entwicklung",
      description:
        "In kurzen Iterationen entwickeln wir die Lösung produktionsreif. Sie sehen regelmäßig Fortschritt und behalten volle Transparenz.",
      tag: "Umsetzung",
    },
    {
      title: "Skalierung & Übergabe",
      description:
        "Wir bringen die Lösung in den Betrieb, dokumentieren sauber und befähigen Ihr Team – oder betreuen sie auf Wunsch langfristig weiter.",
      tag: "Betrieb",
    },
  ],
};

export type Founder = {
  name: string;
  role: string;
  background: string;
  quote: string;
  image?: string; // z. B. "/team/vorname.jpg" – ohne Bild werden Initialen angezeigt
  linkedin?: string;
};

export const about = {
  eyebrow: "Über uns",
  title: "Drei Perspektiven. Ein gemeinsamer Anspruch.",
  intro:
    "Wirtschaft, Data Science und Softwareentwicklung – selten sitzen diese Disziplinen an einem Tisch. Bei uns schon. Wir verstehen Ihre Geschäftsprozesse, die Daten dahinter und die Technologie, die daraus eine Lösung macht. Das Ergebnis: Projekte, die fachlich durchdacht und technisch sauber umgesetzt sind.",
  founders: [
    {
      name: "[Vorname Nachname]",
      role: "Strategie & Business Development",
      background: "Wirtschaftsingenieurwesen",
      quote: "Übersetzt zwischen Geschäftsführung und Technik – und sorgt dafür, dass jedes Projekt einen klaren Business Case hat.",
    },
    {
      name: "[Vorname Nachname]",
      role: "Data Science & Architektur",
      background: "Data Science",
      quote: "Findet in unübersichtlichen Datensätzen die Geschichte, die sich lohnt – und baut die Modelle, die sie erzählen.",
    },
    {
      name: "[Vorname Nachname]",
      role: "Full-Stack Engineering",
      background: "Webentwicklung",
      quote: "Macht aus komplexen Datenflüssen Oberflächen, die man gerne benutzt – performant, sicher und wartbar.",
    },
  ] as Founder[],
};

export const fullService = {
  eyebrow: "Full-Service",
  title: "Ganzheitliche IT-Partnerschaft",
  intro:
    "Wir bauen nicht nur Daten-Pipelines, sondern auch die Fundamente, auf denen Ihre digitale Präsenz steht. Von der Corporate Website über das Hosting bis zur laufenden Wartung – alles aus einer Hand, mit einem festen Ansprechpartner.",
  pillars: [
    {
      icon: "code",
      title: "Webentwicklung",
      description:
        "Performante, barrierearme Corporate Websites und Web-Apps auf Basis moderner Frameworks – schnell, SEO-optimiert und passend zu Ihrer Marke.",
    },
    {
      icon: "server",
      title: "Sicheres Hosting",
      description:
        "Betrieb in der Cloud oder auf Servern in deutschen Rechenzentren (z. B. Hetzner) – mit Backups, SSL und Monitoring.",
    },
    {
      icon: "shield",
      title: "Wartung & Support",
      description:
        "Regelmäßige Updates, Sicherheits-Patches und ein direkter Draht zu uns, wenn es darauf ankommt. Ihre Systeme bleiben aktuell und stabil.",
    },
  ] as { icon: "code" | "server" | "shield"; title: string; description: string }[],
  checklist: [
    "Ein Ansprechpartner für Website, Daten & Infrastruktur",
    "Hosting in Deutschland, DSGVO-bewusst konzipiert",
    "Transparente Wartungspakete statt versteckter Kosten",
    "Keine Schnittstellenprobleme zwischen Agenturen",
  ],
};

export const cta = {
  title: "Lassen Sie uns über Ihre Daten sprechen.",
  text: "In einem unverbindlichen Erstgespräch klären wir, wo Ihre größten Potenziale liegen – und ob wir der richtige Partner dafür sind.",
  button: "Erstgespräch vereinbaren",
};

export const footer = {
  tagline: "Data Science, KI und Web-Engineering für den Mittelstand.",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};
