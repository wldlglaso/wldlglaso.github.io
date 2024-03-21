"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { LinkButtons } from "./LinkButtons";
import { GFS_Didot } from "next/font/google";
import "./link.css";

const playfair = GFS_Didot({ weight: ["400"], subsets: ["greek"] });

const Navigation = () => {
  return (
    <nav className="py-[100px] flex flex-col justify-between h-screen w-full md:w-[380px] relative md:sticky top-0 text-white">
      <div className={playfair.className}>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 50 }}
            whileInView={{ y: 0, transition: { duration: 0.5 } }}
            className="text-[40px] font-bold"
          >
            {`Hi I'm ${info.name}`}
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 32 }}
            whileInView={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
            className="text-[25px] mt-[24px]"
          >
            {"Brand UI/UX designer"}
          </motion.h2>
        </div>
        <div className="overflow-hidden text-[18px] mt-[24px] font-spoca">
          <motion.h3
            initial={{ y: 52 }}
            whileInView={{ y: 0, transition: { duration: 0.5, delay: 1 } }}
          >
            브랜드 경험을 고객에게 일관되고
            <br /> 매력적인 디지털 경험으로 만들어갑니다.
          </motion.h3>
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
  <span className="w-[20px] h-[3px] bg-gray-A group-hover:w-[60px] group-hover:bg-white" />
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
    className="cursor-pointer flex items-center gap-x-[20px] my-[10px] font-semibold group text-[16px] text-gray-6 hover:text-white"
    spy={true}
    offset={name === "About" ? -100 : 0}
  >
    <Bar />
    {name}
  </Link>
);

const info = {
  name: "Joy Choi",
};

export default Navigation;
