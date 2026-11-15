import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      <div className="w-full flex flex-col space-y-10 pb-16">
        {/* Sfondo a puntini solo in home */}
        <div aria-hidden className="bg-dots pointer-events-none fixed inset-0 -z-10" />
        <Intro />
        <Projects />
      </div>
  );
}
