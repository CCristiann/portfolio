// Contenuti del portfolio: modifica qui i progetti.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  repo?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "GeniusHub",
    description:
      "AI-assisted study platform for university students, where I'm CTO. I designed the RAG pipeline (multi-format ingestion, contextual chunking, reranking, cited answers) behind chat over study materials, summaries, concept maps and auto-graded mock exams.",
    tags: ["Next.js", "TypeScript", "tRPC", "Drizzle", "Supabase", "AI SDK"],
    url: "https://geniushub.it",
  },
  {
    title: "picoforge",
    description:
      "Single-model LLM inference engine for Apple Silicon, written from scratch in C and Metal with no ML frameworks. Each stage is validated against a NumPy reference and a C CPU baseline before moving to GPU kernels.",
    tags: ["C", "Metal", "Python", "NumPy"],
    status: "In progress",
    repo: "https://github.com/CCristiann/picoforge",
  },
  {
    title: "Studio AI",
    description:
      "AI agent embedded in FL Studio that organizes music-production projects through natural language: a native Rust plugin, a Python IPC bridge and a real-time FastAPI relay talking to a Next.js dashboard.",
    tags: ["Rust", "Python", "FastAPI", "Next.js", "WebSockets"],
    repo: "https://github.com/CCristiann/studio-ai",
  },
  {
    title: "Rely",
    description:
      "RAG as a service: upload documents or connect Notion, build knowledge bases and chat with your data. Background ingestion jobs, rate limiting and Gemini-powered answers.",
    tags: ["Next.js", "Prisma", "Inngest", "Redis", "Gemini"],
    repo: "https://github.com/CCristiann/rely",
    url: "https://rely-beta.vercel.app",
  },
  {
    title: "Roman Advisor",
    description:
      "Insider's guide to Rome built for a client: curated restaurants, neighborhood guides and tours, with a moderated review system, rate limiting and scheduled jobs.",
    tags: ["Next.js", "Supabase", "Redis", "TanStack Query"],
    url: "https://romanadvisor.com",
  },
  {
    title: "Padel AI",
    description:
      "Computer-vision pipeline for padel match footage: player detection and multi-object tracking with YOLOv8 and ByteTrack, running on Apple Silicon.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLO"],
  },
];

