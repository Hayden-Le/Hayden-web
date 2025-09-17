"use client";

// Single-file Next.js App Router page with TailwindCSS + Framer Motion
// Drop this file in: app/page.tsx
// Prereqs (run in repo root):
// 1) npx create-next-app@latest . --ts --tailwind --eslint --app
// 2) npm i framer-motion
// 3) Put your resume PDF in /public/Resume_Hayden_Le.pdf (optional)
// 4) Start dev: npm run dev

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// -----------------------------
// Shared UI bits
// -----------------------------
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <div className="mt-6 text-base md:text-lg text-muted-foreground/90">{children}</div>
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur">
    {children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <div className="p-5 md:p-6">{children}</div>
  </div>
);

// -----------------------------
// Theme toggle
// -----------------------------
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      }}
      className="rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

// -----------------------------
// Progress bar on scroll
// -----------------------------
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500" style={{ scaleX }} />
  );
};

// -----------------------------
// Content (seeded from your CV; tweak freely)
// -----------------------------
const ABOUT = {
  name: "Hayden Le",
  tagline: "Front‑End Engineer • Data Science • PhD Candidate",
  blurb:
    "Front‑end developer with a systems mindset. I craft fast, accessible interfaces with thoughtful motion, clean architecture, and a bias for UX polish.",
  location: "Sydney, NSW",
  links: {
    email: "huyln.work@gmail.com",
    github: "https://github.com/Hayden-Le",
    linkedin: "https://www.linkedin.com/in/hylehyle/",
    resume: "/Resume_Hayden_Le.pdf",
  },
};

const EDUCATION = [
  {
    school: "The University of Sydney",
    degree: "Bachelor of Advanced Computing (Honours), First Class Honours",
    majors: "Computer Science & Data Science",
    period: "Aug 2021 – Jun 2025",
    details: [
      "Honours Thesis on Federated Learning for Stock Forecasting (Transformer + server‑side aggregation).",
      "Awarded Social Impact at USyd Coding Fest 2024 (GOpti).",
    ],
  },
];

const RESEARCH = {
  phd: {
    title: "PhD Research — Placeholder",
    note:
      "This section will showcase my doctoral research focus, publications, datasets, and demos. I’m currently finalising my topic (edge resource allocation / multi‑agent scheduling / online adaptation).",
    planned:
      [
        "Problem & Motivation",
        "Methods (baseline → proposed)",
        "Reproducible code & ablations",
        "Publications & talks",
      ],
  },
  honours: {
    title: "Honours Thesis (2025): Federated Learning for Stock Forecasting",
    bullets: [
      "Lightweight Transformer trained on decentralised Apple Inc. price data (2010–2022).",
      "Compared seven server‑side aggregation strategies to handle non‑IID clients.",
      "FedNTD reduced RMSE by ~51% (0.623 → 0.304) and communication by >45% vs FedAvg.",
    ],
  },
};

const EXPERIENCE = [
  {
    company: "Robotics Masters Limited",
    role: "Software Developer (Intern)",
    location: "Sydney, Australia (Hybrid)",
    period: "Jul 2023 – Nov 2023",
    points: [
      "Built an interactive Unity environment for a music‑synchronised Christmas light show.",
      "Engineered simulated LED control systems with audio sync and animation tooling.",
    ],
  },
  {
    company: "DKS Co., Ltd",
    role: "Software Developer",
    location: "Hanoi, Vietnam",
    period: "Nov 2022 – Feb 2023",
    points: [
      "Developed 3D Unity objects/animations to teach mechanical & electrical practice in VR.",
      "Shipped rigorously tested scenes for smooth performance on commodity hardware.",
    ],
  },
];

const PROJECTS = [
  {
    name: "GOpti — AI‑Powered Itinerary Planner for Vivid Festival",
    stack: ["React", "Flask", "AWS", "Jira"],
    blurb:
      "Solves multi‑venue time‑space routing as an NP‑hard optimisation with a real‑time personalised schedule.",
    href: "https://github.com/NhatHuyLe/VividPlanner",
    meta: "USyd Coding Fest 2024 • Social Impact Award",
  },
  {
    name: "Spotifeye — Eye‑Tracking Hands‑Free Music Control",
    stack: ["NumPy", "SciPy", "Matplotlib", "Spotipy", "PySerial"],
    blurb:
      "Control Spotify via eye blinks & gaze; <1s latency with 80%+ accuracy using lightweight signal processing.",
    href: "#",
    meta: "Prototype",
  },
];

// -----------------------------
// Home (Hero)
// -----------------------------
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-rose-500/30 dark:from-indigo-500/20 dark:via-fuchsia-500/20 dark:to-rose-500/20" />
      <div className="mx-auto max-w-6xl px-6 pt-24 md:pt-28 pb-16 md:pb-24 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {ABOUT.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-xl md:text-2xl text-muted-foreground"
        >
          {ABOUT.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base md:text-lg"
        >
          {ABOUT.blurb}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <a href="#contact" className="rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90">
            Contact Me
          </a>
          <a href={ABOUT.links.resume} className="rounded-xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">
            Download Résumé
          </a>
        </motion.div>
      </div>
    </div>
  );
};

// -----------------------------
// Navigation (sticky)
// -----------------------------
const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-black/30">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold">Hayden Le</a>
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 ${
                active === item.id ? "bg-black/5 dark:bg-white/10" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pl-2"><ThemeToggle /></div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Menu" className="rounded-full border px-3 py-2" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap gap-2">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// -----------------------------
// Sections
// -----------------------------
const About = () => (
  <Section id="about" title="About">
    <div className="prose dark:prose-invert max-w-none">
      <p>
        I’m a front‑end developer who blends design systems and performance engineering. My sweet spot is building
        polished, accessible UI with micro‑interactions that feel effortless. I enjoy translating ambiguous ideas into
        crisp product surfaces — and leaving a maintainable codebase behind.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Location: {ABOUT.location}</Chip>
        <a href={ABOUT.links.github} className="no-underline"><Chip>GitHub</Chip></a>
        <a href={ABOUT.links.linkedin} className="no-underline"><Chip>LinkedIn</Chip></a>
        <a href={`mailto:${ABOUT.links.email}`} className="no-underline"><Chip>{ABOUT.links.email}</Chip></a>
      </div>
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid gap-4 md:grid-cols-2">
      {EDUCATION.map((e, i) => (
        <Card key={i}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{e.school}</h3>
              <p className="mt-1 text-sm opacity-80">{e.period}</p>
              <p className="mt-3 font-medium">{e.degree}</p>
              <p className="opacity-90">{e.majors}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {e.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Research = () => (
  <Section id="research" title="Research">
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <h3 className="text-lg font-semibold">{RESEARCH.phd.title}</h3>
        <p className="mt-2">{RESEARCH.phd.note}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {RESEARCH.phd.planned.map((item, i) => (
            <Chip key={i}>{item}</Chip>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">{RESEARCH.honours.title}</h3>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {RESEARCH.honours.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Internships & Experience">
    <div className="space-y-4">
      {EXPERIENCE.map((x, i) => (
        <Card key={i}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">{x.company}</h3>
              <p className="opacity-80">{x.role} • {x.location}</p>
            </div>
            <p className="opacity-70 text-sm">{x.period}</p>
          </div>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            {x.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Selected Projects">
    <div className="grid md:grid-cols-2 gap-4">
      {PROJECTS.map((p, i) => (
        <Card key={i}>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-2 opacity-90">{p.blurb}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s, idx) => (
              <Chip key={idx}>{s}</Chip>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm opacity-70">{p.meta}</span>
            <a href={p.href} className="rounded-full px-3 py-2 text-sm font-medium border hover:bg-black/5 dark:hover:bg-white/10">View</a>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact">
    <Card className="">
      <p>Want to collaborate or just say hi?</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={`mailto:${ABOUT.links.email}`} className="rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90">Email Me</a>
        <a href={ABOUT.links.linkedin} className="rounded-xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">LinkedIn</a>
        <a href={ABOUT.links.github} className="rounded-xl px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10">GitHub</a>
      </div>
      <p className="mt-4 text-sm opacity-70">Sydney, NSW • Available for internship/part‑time/contract</p>
    </Card>
  </Section>
);

// -----------------------------
// Page
// -----------------------------
export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <main id="home" className="min-h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white via-white to-white dark:from-[#0b0b11] dark:via-[#0b0b11] dark:to-[#0b0b11] text-neutral-900 dark:text-neutral-100">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Research />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-sm opacity-70">
          <span>© {year} {ABOUT.name}</span>
          <a href="#home" className="rounded-full px-3 py-2 border hover:bg-black/5 dark:hover:bg-white/10">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

// -----------------------------
// Tailwind helpers (optional notes)
// Ensure your tailwind.config.ts enables dark mode: 'class'
// content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"]
// theme.extend.colors.muted-foreground = use text-neutral-500 via utility classes
// -----------------------------