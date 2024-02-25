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
    <main className="w-[800px] mt-[100px] mb-[50px] pl-[60px] text-gray-4 divide-y-2 divide-gray-EA border-solid border-l-[2px] border-l-gray-EA">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
