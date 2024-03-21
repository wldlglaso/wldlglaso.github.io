import Naver from "@/public/assets/navigation/naver.svg";
import LinkedIn from "@/public/assets/navigation/linkedin.svg";
import Instagram from "@/public/assets/navigation/insta.svg";

export const LinkButtons = () => (
  <div className="flex gap-x-[16px]">
    <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">
      <LinkedIn />
    </a>
    <a href={links.naver} target="_blank" rel="noopener noreferrer">
      <Naver />
    </a>
    <a href={links.instagram} target="_blank" rel="noopener noreferrer">
      <Instagram />
    </a>
  </div>
);

const links = {
  naver: "https://in.naver.com/miffy._.girl",
  linkedIn: "https://www.linkedin.com/in/jy-c-883a90295/",
  instagram: "https://www.instagram.com/miffy._.girl/",
};
