export const profile = {
  name: "Cristian Cirje",
  role: "Software and AI engineer",
  location: "Bucharest, Romania",
  available: true,
  about:
    "Computer Science student building production-grade systems at the intersection of AI and the web. I care about taste, latency, and shipping things people actually use.",
  initials: "CC",
  avatarUrl: "/me3.jpg",
  socials: {
    github: "https://github.com/CCristiann",
    linkedin: "https://www.linkedin.com/in/cristiancirje/",
    email: "mailto:you@example.com",
  },
} as const;

export type Project = {
  title: string;
  description: string;
  period: string;
  stack: string[];
  href?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    title: "Lumen — Multimodal Search Engine",
    description:
      "A retrieval system that indexes screenshots, PDFs, and notes into a single semantic surface. Sub-200ms p95 search over 1M chunks via a hybrid BM25 + vector index.",
    period: "2026",
    stack: ["Next.js", "TypeScript", "Postgres", "pgvector", "OpenAI", "Vercel"],
    href: "#",
    source: "#",
  },
  {
    title: "Drift — Agent Eval Harness",
    description:
      "Replay framework for LLM agents that captures every tool call and lets you diff trajectories across model versions. Used internally to catch regressions before deploy.",
    period: "2025",
    stack: ["Python", "FastAPI", "Anthropic SDK", "DuckDB"],
    source: "#",
  },
  {
    title: "Pinboard — Real-time Collab Canvas",
    description:
      "Yjs-backed infinite canvas with cursors, AI-generated stickies, and one-tap export to slides. Shipped to a 12-person design team and now powers their weekly crits.",
    period: "2025",
    stack: ["Next.js", "Yjs", "tRPC", "Drizzle", "Liveblocks"],
    href: "#",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "FastAPI", "Hono", "Tailwind CSS"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "LangGraph", "Anthropic SDK", "OpenAI SDK", "pgvector", "DSPy"],
  },
  {
    label: "Infra & Tools",
    items: ["Postgres", "Redis", "Docker", "Vercel", "AWS", "GitHub Actions"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  logo?: string;
  icon?: "code";
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Web Developer",
    company: "AI Kosmo",
    period: "2025 — Present",
    description:
      "Building an AI concierge platform for the hospitality industry — an autonomous agent that handles guest messaging and phone calls on behalf of hotels in real time. Worked across the stack on LLM-powered conversation flows, booking and PMS integrations, and the admin dashboard hotels use to monitor and fine-tune their assistant.",
    logo: "/jobs/ai_kosmo_logo.jpeg",
  },
  {
    role: "Full-Stack Engineer (Freelance)",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Designing and shipping marketing sites and SaaS dashboards for small businesses and early-stage founders — end-to-end, from data model to deployment. Stack centered on Next.js, TypeScript, and Postgres, with a focus on fast iteration, clean handoff, and production-grade defaults.",
    icon: "code",
  },
];

export type Education = {
  school?: string;
  degree: string;
  period: string;
  details?: string;
  grade?: string;
  logo?: string;
  icon?: "graduation-cap";
};

export const education: Education[] = [
  {
    school: "Università degli Studi Roma Tre",
    degree: "BSc, Computer Engineering & AI",
    period: "Sep 2025 — Jul 2028",
    details:
      "Three-year program covering software development, algorithms and data structures, databases, computer networks, operating systems, and the foundations of artificial intelligence and machine learning. Strong mathematical and physics core — calculus, linear algebra, and probability.",
    logo: "/education/uni-roma-tre.png",
  },
  {
    degree: "Technical High School Diploma, Computer Science",
    period: "Sep 2020 — Jul 2025",
    details:
      "Five-year technical program in computer science — programming (Java, C/C++, PHP, JavaScript), web development, relational and NoSQL databases, and Cisco networking.",
    grade: "100/100 cum laude",
    icon: "graduation-cap",
  },
];
