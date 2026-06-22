export const profile = {
  name: "Cristian Cirje",
  role: "Software and AI engineer",
  location: "Rome, Italy",
  available: true,
  about:
    "Computer Engineering and Artificial Intelligence undergraduate at Roma Tre University. Strong interest in applied AI and the engineering of intelligent systems, with a solid full-stack foundation and a hands-on approach to building products from end to end.",
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
      "Conversational AI agent embedded in FL Studio for organizing music production projects via natural language. Multi-component system spanning a native plugin in the DAW, an IPC bridge, a real-time backend relay, and a web dashboard — with streaming chat over a frontier LLM and secure session management.",
    period: "2025 — Present",
    stack: ["Next.js", "React", "FastAPI", "Rust", "Python", "WebSockets", "Google Gemini"],
  },
  {
    title: "RelyRAG",
    description:
      "Retrieval-augmented generation platform where users upload documents and chat with them through a streaming AI interface. End-to-end ingestion pipeline with asynchronous chunking, embedding generation, and vector storage, plus a streaming retrieval-and-generate path with query rewriting and real-time response generation.",
    period: "2025",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Google Gemini", "Inngest"],
  },
  {
    title: "Padel AI",
    description:
      "Computer vision pipeline analyzing padel match footage, with an LLM agent layer for natural-language queries. Player detection and multi-object tracking using a pre-trained detector and integrated tracker; roadmap includes a fine-tuned padel-specific detector, a court segmentation model, and a tool-calling agent over the extracted match data.",
    period: "2025",
    stack: ["Python", "PyTorch", "OpenCV", "Ultralytics YOLO"],
  },
  {
    title: "Zenthes",
    description:
      "Full-stack SaaS platform with subscription billing, license management, and a type-safe end-to-end API. Serverless data layer with a fully type-safe surface from database to client, and Stripe-powered subscriptions with webhook-driven license activation and lifecycle management.",
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
    items: ["TypeScript", "JavaScript", "Python", "C", "C++", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Web & Backend",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "REST",
      "WebSockets",
      "TanStack Query",
      "tRPC",
      "Prisma",
      "Tailwind CSS",
    ],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "LLM application development",
      "RAG architectures",
      "Prompt engineering",
      "Vector databases",
      "PyTorch",
      "TensorFlow / Keras",
    ],
  },
  {
    label: "Data & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "AWS", "Vercel", "Git"],
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
    company: "GeniusEdu",
    period: "2026 — Present",
    location: "Hybrid · Italy",
    description:
      "Leading engineering and technical direction at GeniusEdu, an AI-powered digital ecosystem for Italian university students. Shape the platform's architecture and technical strategy across AI study tools, subscription billing, and infrastructure.",
    logo: "/jobs/geniusedu_logo.png",
  },
  {
    role: "Full-Stack Engineer (Freelance)",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Designing and shipping marketing sites and SaaS dashboards for small businesses and early-stage founders — end-to-end, from data model to deployment. Stack centered on Next.js, TypeScript, and Postgres, with a focus on fast iteration, clean handoff, and production-grade defaults.",
    icon: "code",
  },
  {
    role: "Full-Stack Developer",
    company: "AI Kosmo",
    period: "Sep 2025 — Oct 2025",
    location: "Remote",
    description:
      "Shipped frontend features on the Kosmo Cloud dashboard sold to hotel clients. Contributed inside the codebase of a multi-channel LLM product spanning chat, voice, and in-room channels.",
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
