"use client";

import { Card, Chip } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/brand";
import { SectionShell } from "./section-shell";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <SectionShell id="projects" title="Projects">
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.title}>
            <Card variant="default" className="border border-border bg-surface">
              <Card.Header>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <Card.Title className="text-lg font-semibold text-foreground">
                      {project.title}
                    </Card.Title>
                    <span className="text-xs text-muted">{project.period}</span>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    {project.source ? (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="rounded-md p-1.5 text-muted transition-colors hover:bg-default hover:text-foreground"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                    ) : null}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="rounded-md p-1.5 text-muted transition-colors hover:bg-default hover:text-foreground"
                      >
                        <ArrowUpRight className="size-4" strokeWidth={1.8} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Card.Header>

              <Card.Content className="text-sm leading-relaxed text-foreground/80">
                {project.description}
              </Card.Content>

              <Card.Footer className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tech) => (
                  <Chip key={tech} variant="soft" size="sm">
                    <Chip.Label>{tech}</Chip.Label>
                  </Chip>
                ))}
              </Card.Footer>
            </Card>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
