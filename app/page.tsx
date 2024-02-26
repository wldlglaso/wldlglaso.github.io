"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="w-full md:w-[800px] my-[100px] md:pl-[60px] text-gray-4 divide-y-2 divide-gray-EA border-solid md:border-l-[2px] border-l-gray-EA">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
