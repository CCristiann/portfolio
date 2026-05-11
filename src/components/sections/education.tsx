"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { SectionShell } from "./section-shell";
import { education } from "@/lib/content";

export function Education() {
  return (
    <SectionShell id="education" title="Education">
      <ul className="flex flex-col gap-6">
        {education.map((item) => (
          <li key={`${item.school}-${item.period}`} className="flex gap-4">
            {item.icon === "graduation-cap" ? (
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground text-background">
                <GraduationCap className="size-5" strokeWidth={2.25} />
              </div>
            ) : (
              <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-xs font-semibold text-muted">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={40}
                    height={40}
                    className="size-full object-cover"
                  />
                ) : (
                  item.school?.slice(0, 1)
                )}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {item.degree}
                  <span aria-hidden className="mx-1.5 text-muted">
                    ·
                  </span>
                  <span className="text-muted">{item.school}</span>
                </h3>
                <span className="shrink-0 text-xs text-muted">
                  {item.period}
                </span>
              </div>
              {item.details ? (
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  {item.details}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
