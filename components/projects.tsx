import Image from "next/image";
import Link from "next/link";
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
  <div className="flex flex-col md:flex-row gap-x-[28px]">
    <Image
      src={image}
      alt={title}
      width={280}
      height={160}
      className="shrink-0 mx-auto md:mx-0"
    />
    <div className="flex flex-col justify-between py-[8px] md:mt-0">
      <div>
        <p className="text-[20px] font-bold">{title}</p>
        <p className="text-[16px] leading-[24px] mt-[16px] whitespace-pre-wrap">
          {description}
        </p>
      </div>
      <Link href={url} className="flex items-center mt-[10px] md:mt-[20px]">
        <span className="mr-[4px] text-[14px] font-bold text-gray-A">
          Read more
        </span>
        <Chevron className="fill-gray-A" />
      </Link>
    </div>
  </div>
);

export default Projects;
