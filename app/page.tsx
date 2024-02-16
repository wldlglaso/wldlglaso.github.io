import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

import Image from "next/image";

export default function Home() {
  return (
    <main className="py-40 w-1/2">
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
