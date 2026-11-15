// Contenuti del portfolio: modifica qui i progetti.

// Da dove arriva la pagina di approfondimento del progetto:
// - "github": README del repository, renderizzato da GitHub (immagini incluse)
// - "local":  articolo scritto a mano in content/projects/<slug>.tsx
export type ProjectContent =
  | { source: "github"; repo: string; branch: string }
  | { source: "local" };

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status?: string;
  repo?: string;
  url?: string;
  content: ProjectContent;
};

export const projects: Project[] = [
  {
    slug: "geniushub",
    title: "GeniusHub",
    description:
      "AI-assisted study platform for university students, where I'm CTO. I designed the RAG pipeline (multi-format ingestion, contextual chunking, reranking, cited answers) behind chat over study materials, summaries, concept maps and auto-graded mock exams.",
    tags: ["Next.js", "TypeScript", "tRPC", "Drizzle", "Supabase", "AI SDK"],
    url: "https://geniushub.it",
    content: { source: "local" },
  },
  {
    slug: "picoforge",
    title: "picoforge",
    description:
      "LLM inference engine for Apple Silicon, written from scratch in C11 and Metal with no ML frameworks. It runs a 48-layer mixture-of-experts model entirely on the GPU, and every kernel is checked against an FP32 reference and a C CPU baseline.",
    tags: ["LLM inference", "Inference Engine", "MoE", "Metal", "C"],
    status: "In progress",
    repo: "https://github.com/CCristiann/picoforge",
    content: { source: "github", repo: "CCristiann/picoforge", branch: "main" },
  },
  {
    slug: "mars-terrain-segmentation",
    title: "Mars Terrain Segmentation",
    description:
      "A U-Net that labels every pixel of a Mars rover photo as soil, bedrock, sand or big rock. Trained on Curiosity NavCam images from AI4Mars in PyTorch, with a controlled loss and class-weight ablation run on a cloud GPU.",
    tags: ["PyTorch", "Computer Vision", "Machine Learning", "Deep Learning"],
    repo: "https://github.com/CCristiann/mars-terrain-segmentation",
    content: {
      source: "github",
      repo: "CCristiann/mars-terrain-segmentation",
      branch: "main",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
