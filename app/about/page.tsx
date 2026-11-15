import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
};

const linkClass =
  "font-medium text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground";

const email = "cirjecristian2@gmail.com";

const socials = [
  { href: "https://github.com/CCristiann", label: "GitHub", Icon: GitHubIcon },
  { href: "https://linkedin.com/in/cristiancirje", label: "LinkedIn", Icon: LinkedInIcon },
];

export default function About() {
  return (
    <Container>
    
          <article className="mt-6 flex flex-col gap-y-6 pb-16">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">About me</h1>
              <p className="text-sm text-muted-foreground">
                Full-stack software engineer and Computer &amp; AI Engineering
                student.
              </p>
            </div>

            <div className="flex flex-col gap-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I was 14 when I first got hooked on code. I&apos;d rush home
                from school just to mess around with plain HTML, CSS and
                JavaScript. Somewhere along the way that turned into full web
                apps, and I never really stopped. I went on to study computer
                science in high school, graduating with 100/100 and honours,
                and today I study Computer and Artificial Intelligence
                Engineering at Roma Tre University in Rome.
              </p>
              <p>
                I like building things end to end, from the data model to the
                interface. Since 2024 I&apos;ve been freelancing as a
                full-stack engineer, shipping web apps for small businesses and
                early-stage founders, and I briefly joined AI Kosmo to work on
                a multi-channel LLM product for hotels.
              </p>
              <p>
                Today I&apos;m the CTO of{" "}
                <Link href="/projects/geniushub" className={linkClass}>
                  GeniusHub
                </Link>
                , an Italian startup trying to change how students get through
                university, from exams to work. I designed the RAG pipeline
                behind its chat over study materials, summaries, concept maps
                and auto-graded mock exams.
              </p>
              <p>
                Lately I&apos;m going deeper into AI and machine learning, and I
                learn best by building: I want to understand how things really
                work under the hood. That&apos;s why I&apos;m working on{" "}
                <Link href="/projects/picoforge" className={linkClass}>
                  picoforge
                </Link>
                {" "}and{" "}
                <Link
                  href="/projects/mars-terrain-segmentation"
                  className={linkClass}
                >
                  Mars Terrain Segmentation
                </Link>{" "}
              </p>
              <p>
                Feel free to reach out :&#41;
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  <social.Icon data-icon="inline-start" />
                  {social.label}
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Mail data-icon="inline-start" />
                {email}
              </a>
            </div>
          </article>
        
    </Container>
  );
}
