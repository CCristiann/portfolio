"use client";

import { Chip } from "@heroui/react";
import { SectionShell } from "./section-shell";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <SectionShell id="skills" title="Technical skills">
      <dl className="flex flex-col gap-6">
        {skills.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-3 sm:grid-cols-[140px_1fr] sm:gap-6"
          >
            <dt className="text-sm font-medium text-muted">{group.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Chip key={item} variant="soft" size="sm">
                  <Chip.Label>{item}</Chip.Label>
                </Chip>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
