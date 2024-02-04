import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex flex-col py-40 justify-between text-[#1513f9] h-full">
      <div>
        <h1 className="text-[40px] font-bold">{info.name}</h1>
      </div>
      <div className="flex flex-col">
        <Link href="about">about</Link>
        <Link href="experience">experience</Link>
        <Link href="projects">projects</Link>
      </div>
    </nav>
  );
};

const info = {
  name: "Sienna Yim",
};

export default Navigation;
