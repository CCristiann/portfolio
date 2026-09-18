export const profile = {
  name: "Cristian Cirje",
  role: "Software and AI engineer",
  location: "Rome, Italy",
  available: true,
  about:
    "Computer Engineering and Artificial Intelligence undergraduate at Roma Tre University, currently CTO of GeniusHub — an AI-assisted study platform for university students. Hands-on experience building distributed, multi-tier systems end to end, from low-level systems programming in C to backend services, relational databases, and production web applications used by real users. Most drawn to applied AI: RAG pipelines, LLM-powered products, and the infrastructure that runs them.",
  initials: "CC",
  avatarUrl: "/me3.jpg",
  socials: {
    github: "https://github.com/CCristiann",
    linkedin: "https://www.linkedin.com/in/cristiancirje/",
    email: "mailto:cirjecristian@icloud.com",
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
    title: "Studio AI",
    description:
      "AI agent embedded in FL Studio for organizing music-production projects through natural language. A multi-tier distributed system: a native Rust plugin inside the DAW, a Python IPC bridge, and a real-time FastAPI relay service that talks to a Next.js dashboard over WebSockets.",
    period: "2025 — Present",
    stack: ["Next.js", "React", "FastAPI", "Rust", "Python", "WebSockets", "Google Gemini"],
  },
  {
    title: "picoforge",
    description:
      "Single-model LLM inference engine for Apple Silicon, written from scratch in C and Metal with no ML frameworks. Every stage is validated against a NumPy reference and a C CPU baseline before the Metal GPU kernels are written — catching numerical drift early and keeping memory bandwidth and compute complexity in view.",
    period: "In progress",
    stack: ["C", "Metal 4", "Apple Silicon", "Python", "NumPy"],
  },
  {
    title: "RelyRAG",
    description:
      "Retrieval-augmented generation platform for querying uploaded documents. An async ingestion pipeline — background jobs, chunking, and embeddings — feeds a vector index on PostgreSQL, paired with a streaming retrieval-and-generate query flow with query rewriting.",
    period: "2025",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Google Gemini", "Inngest"],
  },
  {
    title: "Zenthes",
    description:
      "Full-stack SaaS platform with subscription billing, license management, and end-to-end type-safe APIs. Stripe-powered payments and subscriptions with webhook-driven license activation and lifecycle management.",
    period: "2024 — 2025",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "Stripe"],
    href: "https://zenthes.com",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "C", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Web & Backend",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "tRPC",
      "REST",
      "WebSockets",
      "TanStack Query",
      "Drizzle ORM",
      "Prisma",
      "Tailwind CSS",
    ],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "LLM application development",
      "RAG pipelines",
      "Embeddings & reranking",
      "Prompt engineering",
      "Vector databases",
      "Vercel AI SDK",
      "PyTorch",
      "TensorFlow / Keras",
    ],
  },
  {
    label: "Data & Infrastructure",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "AWS", "Vercel", "Git"],
  },
  {
    label: "CS Fundamentals",
    items: [
      "Data structures & algorithms",
      "Computational complexity",
      "Object-oriented design",
      "System design",
    ],
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
    role: "CTO",
    company: "GeniusHub",
    period: "Jun 2026 — Present",
    location: "Hybrid · Italy",
    description:
      "Technical lead of GeniusHub (formerly GeniusEdu), an AI-assisted study platform for university students — owning architecture, data model, and delivery priorities end to end. Designed and built the RAG pipeline: multi-format ingestion, contextual chunking, embeddings, and retrieval with reranking, with answers backed by verifiable citations. Shipped features from schema to UI, including chat over study materials, AI-generated summaries and concept maps, auto-graded mock exams, and subscription billing.",
    logo: "/jobs/geniusedu_logo.png",
  },
  {
    role: "Full-Stack Engineer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Designing and shipping production web applications for small businesses and early-stage founders, end to end from data model to deployment — including romanadvisor.com, built on Next.js and Supabase with Redis-based rate limiting, a moderated review system, and scheduled jobs. Fast iteration cycles, clean handoff, and production-grade defaults across multiple client engagements.",
    icon: "code",
  },
  {
    role: "Full-Stack Developer",
    company: "AI Kosmo",
    period: "Sep 2025 — Oct 2025",
    location: "Remote",
    description:
      "Shipped front-end features for the Kosmo Cloud dashboard, sold to hotel clients. Contributed to the codebase of a multi-channel LLM product spanning chat, voice, and in-room guest channels.",
    logo: "/jobs/ai_kosmo_logo.jpeg",
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
    school: "ITC Vincenzo Arangio Ruiz",
    degree: "Technical High School Diploma, Computer Science",
    period: "Sep 2020 — Jul 2025",
    details:
      "Five-year technical program in computer science — programming (Java, C/C++, PHP, JavaScript), web development, relational and NoSQL databases, and Cisco networking.",
    grade: "100/100 cum laude",
    icon: "graduation-cap",
  },
];
