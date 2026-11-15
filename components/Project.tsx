import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { GitHubIcon } from "./icons";
import type { Project as TProject } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// L'intera card porta alla pagina del progetto (link esteso con ::after);
// i bottoni Code/Live restano cliccabili sopra il link.
export default function Project({ project }: { project: TProject }) {
  return (
    <Card className="relative group transition duration-150 hover:shadow-md  has-[a[data-card-link]:focus-visible]:ring-2 has-[a[data-card-link]:focus-visible]:ring-ring">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            data-card-link
            className="outline-none after:absolute after:inset-0"
          >
            {project.title}
          </Link>
          {project.status && <Badge>{project.status}</Badge>}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto items-center gap-1.5">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "relative z-10",
            })}
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
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "relative z-10",
            })}
          >
            <Globe data-icon="inline-start" />
            Live
          </a>
        )}
        <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary duration-150">
          Read more
          <ArrowRight className="size-3" />
        </span>
      </CardFooter>
    </Card>
  );
}
