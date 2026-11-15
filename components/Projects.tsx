import { projects } from "@/lib/data";
import Section from "./Section";
import Project from "./Project";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* Da sm in su: se i progetti sono dispari, l'ultimo occupa tutta la riga */}
      <div className="grid gap-3 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
        {projects.map((project) => (
          <Project project={project} key={project.slug} />
        ))}
      </div>
    </Section>
  );
}
