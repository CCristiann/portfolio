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
    title: "Mars Terrain Segmenetation",
    description: "A U-Net that labels every pixel of a Mars rover photo as soil, bedrock, sand or big rock. Trained on Curiosity NavCam images from the AI4Mars dataset, in PyTorch. It is a personal learning project: a small, readable baseline, trained for only 5 epochs (~1 hour on a MacBook).",
    tags: ["Machine Learning"],
    repo: "https://github.com/CCristiann/mars-terrain-segmentation"
  }
];

