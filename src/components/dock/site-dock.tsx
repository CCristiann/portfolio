"use client";

import { Separator } from "@heroui/react";
import {
  Briefcase,
  FolderCode,
  GraduationCap,
  Home,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/brand";
import { Dock } from "./dock";
import { DockIcon } from "./dock-icon";
import { ThemeToggle } from "../theme-toggle";
import { useActiveSection } from "../use-active-section";
import { profile } from "@/lib/content";

const sectionIds = ["intro", "projects", "skills", "experience", "education"] as const;

const sections = [
  { id: "intro", label: "About", Icon: Home },
  { id: "projects", label: "Projects", Icon: FolderCode },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "education", label: "Education", Icon: GraduationCap },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteDock() {
  const active = useActiveSection(sectionIds);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="pointer-events-auto">
        <Dock>
          {sections.map(({ id, label, Icon }) => (
            <DockIcon
              key={id}
              label={label}
              isActive={active === id}
              onPress={() => scrollToId(id)}
            >
              <Icon className="size-full" strokeWidth={1.6} />
            </DockIcon>
          ))}

          <Separator
            orientation="vertical"
            className="mx-1 h-7 self-center bg-separator"
          />

          <DockIcon label="GitHub" href={profile.socials.github} external>
            <GithubIcon className="size-full" />
          </DockIcon>
          <DockIcon label="LinkedIn" href={profile.socials.linkedin} external>
            <LinkedinIcon className="size-full" />
          </DockIcon>

          <Separator
            orientation="vertical"
            className="mx-1 h-7 self-center bg-separator"
          />

          <ThemeToggle />
        </Dock>
      </div>
    </div>
  );
}
