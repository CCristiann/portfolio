import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
};

const socials = [
  { href: "https://github.com/CCristiann", label: "GitHub" },
  { href: "https://linkedin.com/in/cristiancirje", label: "LinkedIn" },
];

export default function About() {
  return (
    <Container>
      <article className="mt-6 flex flex-col gap-y-6 pb-16">
        <h1 className="text-2xl font-semibold tracking-tight">About me</h1>

        <div className="flex flex-col gap-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I&apos;m Cristian, a Computer Engineering and Artificial
            Intelligence student at Roma Tre University in Rome. Before
            university I studied computer science in high school, graduating
            with 100/100 and honours.
          </p>
          <p>
            I like building things end to end, from the data model to the
            interface. Since 2024 I&apos;ve been working as a freelance
            full-stack engineer, shipping web apps for small businesses and
            early-stage founders, and I briefly joined AI Kosmo to work on a
            multi-channel LLM product for hotels.
          </p>
          <p>
            Today I&apos;m the CTO of GeniusHub, an AI-assisted study platform
            for university students, where I designed the RAG pipeline behind
            chat over study materials, summaries, concept maps and auto-graded
            mock exams.
          </p>
          <p>
            Lately I&apos;m spending more time closer to the metal: on
            picoforge I&apos;m writing an LLM inference engine in C and Metal
            to understand how models really run on hardware. Outside of code
            I make music, which is how Studio AI started.
          </p>
          <p>
            I speak Italian, Romanian and English. If you want to work together
            or just say hi, feel free to reach out.
          </p>
        </div>

        <div className="flex gap-1.5">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              {social.label}
              <ArrowUpRight data-icon="inline-end" />
            </a>
          ))}
        </div>
      </article>
    </Container>
  );
}
