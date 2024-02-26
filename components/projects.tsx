import Image from "next/image";
import { projectList, type Project } from "@/constants";
import Chevron from "@/public/assets/common/chevron.svg";

const Projects = () => (
  <section id="projects" className="py-[60px] flex flex-col gap-y-[60px]">
    {projectList.map((project) => (
      <Card {...project} key={project.title} />
    ))}
  </section>
);

const Card = ({ title, description, image, url }: Project) => (
  <div className="flex gap-x-[28px]">
    <Image
      src={image}
      alt={title}
      width={280}
      height={160}
      className="shrink-0"
    />
    <div className="flex flex-col justify-between py-[8px]">
      <div>
        <p className="text-[20px] font-bold">{title}</p>
        <p className="text-[16px] mt-[16px]">{description}</p>
      </div>
      <button className="flex items-center">
        <span className="mr-[4px] text-[14px] font-bold text-blue-main">
          Read more
        </span>
        <Chevron />
      </button>
    </div>
  </div>
);

export default Projects;
