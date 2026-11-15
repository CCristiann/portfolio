import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getProject, projects } from "@/lib/data";
import { getReadmeHtml } from "@/lib/github";
import { localContent } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

// Le pagine note sono prerenderizzate da generateStaticParams; il Suspense
// serve a Next per mostrare subito la shell durante la navigazione.
export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense
      fallback={
        <Container>
          <div className="mt-6 h-96" />
        </Container>
      }
    >
      <ProjectArticle params={params} />
    </Suspense>
  );
}

async function ProjectArticle({
  params,
}: {
  params: PageProps<"/projects/[slug]">["params"];
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const LocalArticle = localContent[project.slug];

  return (
    <Container>
      <article className="mt-6 flex flex-col gap-y-8 pb-16">
        <header className="flex flex-col gap-y-4">
          <Link
            href="/#projects"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "-ml-2 w-fit text-muted-foreground",
            })}
          >
            <ArrowLeft data-icon="inline-start" />
            All projects
          </Link>

          <div className="flex flex-col gap-y-2">
            <div className="flex gap-3 items-center">
              <h1 className="flex scroll-m-20 items-center gap-3 text-4xl font-extrabold tracking-tight text-balance">
                {project.title}
              </h1>
              {project.status && <Badge>{project.status}</Badge>}
            </div>

            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {(project.repo || project.url) && (
            <div className="flex gap-1.5">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  <GitHubIcon data-icon="inline-start" />
                  Code
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  <Globe data-icon="inline-start" />
                  Live
                </a>
              )}
            </div>
          )}
        </header>

        <hr />

        {project.content.source === "github" ? (
          <div
            className="prose-project"
            // HTML già sanificato da GitHub, proveniente dai miei repository.
            dangerouslySetInnerHTML={{
              __html: await getReadmeHtml(
                project.content.repo,
                project.content.branch,
              ),
            }}
          />
        ) : LocalArticle ? (
          <div className="prose-project">
            <LocalArticle />
          </div>
        ) : null}
      </article>
    </Container>
  );
}
