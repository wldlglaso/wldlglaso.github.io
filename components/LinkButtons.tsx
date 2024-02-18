import Github from "@/public/assets/navigation/github.svg";
import LinkedIn from "@/public/assets/navigation/linkedin.svg";

export const LinkButtons = () => (
  <div className="flex gap-x-[16px]">
    <a href={links.github} target="_blank" rel="noopener noreferrer">
      <Github />
    </a>
    <a href={links.github} target="_blank" rel="noopener noreferrer">
      <LinkedIn />
    </a>
  </div>
);

const links = {
  github: "https://github.com/sujin3473",
};
