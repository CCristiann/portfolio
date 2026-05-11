"use client";

import { SectionShell } from "./section-shell";
import { profile } from "@/lib/content";

export function About() {
  return (
    <SectionShell id="about" title="About">
      <p className="max-w-prose text-base leading-relaxed text-foreground/80">
        {profile.about}
      </p>
    </SectionShell>
  );
}
