import { cacheLife } from "next/cache";
import type { Project } from "@/lib/data";

// Scarica il README già renderizzato da GitHub (stesso output di github.com:
// tabelle, code highlighting, HTML sanificato) e lo adatta alla pagina.
// In cache per un giorno: un push sul repo appare al massimo entro ~24h.
export async function getReadmeHtml(repo: string, branch: string) {
  "use cache";
  cacheLife("days");

  const res = await fetch(`https://api.github.com/repos/${repo}/readme`, {
    headers: {
      Accept: "application/vnd.github.html+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "portfolio",
    },
  });

  if (!res.ok) {
    throw new Error(`README di ${repo} non disponibile (${res.status})`);
  }

  return transformReadme(await res.text(), repo, branch);
}

// Descrizione ("About") del repository su GitHub, stessa cache del README.
async function getRepoDescription(repo: string) {
  "use cache";
  cacheLife("days");

  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "portfolio",
    },
  });

  if (!res.ok) {
    throw new Error(`Repository ${repo} non disponibile (${res.status})`);
  }

  const { description } = (await res.json()) as { description: string | null };
  return description?.trim() || null;
}

// Per i progetti "github" usa la descrizione del repository; se manca o
// GitHub non risponde, ripiega su quella scritta in lib/data.ts. Il catch sta
// fuori dalla funzione in cache, così un errore non viene memorizzato.
export async function getProjectDescription(project: Project) {
  if (project.content.source !== "github") return project.description;
  try {
    return (
      (await getRepoDescription(project.content.repo)) ?? project.description
    );
  } catch {
    return project.description;
  }
}

function transformReadme(html: string, repo: string, branch: string) {
  const raw = `https://raw.githubusercontent.com/${repo}/${branch}/`;
  const blob = `https://github.com/${repo}/blob/${branch}/`;

  return (
    html
      // Il titolo h1 è già nell'header della pagina.
      .replace(/<div class="markdown-heading"[^>]*><h1[\s\S]*?<\/div>/, "")
      // Icone "permalink" accanto ai titoli: non servono qui.
      .replace(/<a id="user-content-[^"]*" class="anchor"[\s\S]*?<\/a>/g, "")
      // Gli id dei titoli devono combaciare con i link interni (#results).
      .replace(/ id="user-content-/g, ' id="')
      // Percorsi relativi delle immagini -> file raw del repository.
      .replace(/(<img[^>]*?\ssrc=")(?!https?:|data:|\/\/)\.?\/?([^"]+)"/g, `$1${raw}$2"`)
      // Link relativi (docs/DESIGN.md, LICENSE, …) -> pagina del file su GitHub.
      .replace(/(<a[^>]*?\shref=")(?!https?:|mailto:|#|\/\/)\.?\/?([^"]+)"/g, `$1${blob}$2"`)
  );
}
