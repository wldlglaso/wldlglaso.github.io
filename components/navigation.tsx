"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LinkButtons } from "./LinkButtons";
import { Playfair_Display } from "next/font/google";
import "./link.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Navigation = () => {
  return (
    <nav
      className={`flex flex-col py-[100px] justify-between text-[#1513f9] h-screen w-1/2 sticky top-0 ${playfair.className}`}
    >
      <div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50 }}
            whileInView={{ y: 0, transition: { duration: 0.5 } }}
            className="text-[40px] font-bold"
          >
            Hi, I'm {info.name}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 30 }}
            whileInView={{ y: 0, transition: { duration: 0.5, delay: 0.8 } }}
            className="text-[25px] mt-[8px]"
          >
            I'm a Front-end developer.
          </motion.h2>
        </div>
      </div>
      <div className="flex flex-col gap-y-[100px]">
        <div>
          <NavButton name="About" link="about" />
          <NavButton name="Experience" link="experience" />
          <NavButton name="Projects" link="projects" />
        </div>
        <LinkButtons />
      </div>
    </nav>
  );
};

const Bar = () => (
  <span className="w-[30px] h-[3px] bg-sienna-blue group-hover:w-[60px] group-hover:bg-[#aaaa]" />
);

interface NavButtonProps {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => (
  <Link
    to={link}
    smooth={true}
    duration={500}
    className="cursor-pointer flex items-center gap-x-[20px] my-[6px] font-semibold group text-[16px] hover:text-[#aaaa]"
    spy={true}
    offset={-100}
  >
    <Bar />
    {name}
  </Link>
);

const info = {
  name: "Sienna",
};

export default Navigation;
