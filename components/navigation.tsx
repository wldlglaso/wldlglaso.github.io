"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <nav className="flex flex-col py-40 justify-between text-[#1513f9] h-screen w-1/2 sticky top-0">
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
            className="text-[25px] mt-[10px]"
          >
            I'm a Front-end developer.
          </motion.h2>
        </div>
      </div>
      <div className="flex flex-col">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-x-[10px]"
          spy={true}
        >
          <Bar />
          about
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-x-[10px]"
          spy={true}
        >
          <Bar />
          <span>experience</span>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-x-[10px]"
          spy={true}
        >
          <Bar />
          projects
        </Link>
      </div>
    </nav>
  );
};

const Bar = () => <span className="w-[20px] h-[2px] bg-sienna-blue" />;

const info = {
  name: "Sienna",
};

export default Navigation;
