import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      <div className="w-full flex flex-col space-y-10 pb-16">
        <Intro />
        <Projects />
      </div>
  );
}
