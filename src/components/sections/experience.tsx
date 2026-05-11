"use client";

import Image from "next/image";
import { Code } from "lucide-react";
import { SectionShell } from "./section-shell";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <SectionShell id="experience" title="Work experience">
      <ul className="flex flex-col gap-6">
        {experience.map((role) => (
          <li key={`${role.company}-${role.period}`} className="flex gap-4">
            {role.icon === "code" ? (
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground text-background">
                <Code className="size-5" strokeWidth={2.25} />
              </div>
            ) : (
              <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-xs font-semibold text-muted">
                {role.logo ? (
                  <Image
                    src={role.logo}
                    alt={`${role.company} logo`}
                    width={40}
                    height={40}
                    className="size-full object-cover"
                  />
                ) : (
                  role.company.slice(0, 1)
                )}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {role.role}
                  <span aria-hidden className="mx-1.5 text-muted">
                    ·
                  </span>
                  <span className="text-muted">{role.company}</span>
                </h3>
                <span className="shrink-0 text-xs text-muted">
                  {role.period}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                {role.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
