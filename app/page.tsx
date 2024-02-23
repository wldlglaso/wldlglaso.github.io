"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="w-[800px] pl-[60px] text-gray-4 py-[100px]">
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
