import { ArrowUpRight, Code } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./Section";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {project.title}
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
            {(project.repo || project.url) && (
              <CardFooter className="mt-auto gap-1.5">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <Code data-icon="inline-start" />
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
                    <ArrowUpRight data-icon="inline-start" />
                    Live
                  </a>
                )}
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
