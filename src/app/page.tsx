import { Intro } from "@/components/sections/intro";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 pb-40 sm:px-8">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
