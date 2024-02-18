import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="py-[100px] w-1/2">
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
