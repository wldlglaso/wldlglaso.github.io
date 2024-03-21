"use client";

import { useEffect } from "react";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col md:flex-row px-6 mx-auto w-full md:w-[1200px] relative">
      <Navigation />
      <main className="w-full md:w-[800px] my-[100px] md:pl-[60px] text-white divide-y-2 divide-gray-4 border-solid md:border-l-[2px] border-l-gray-6">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
