import type { PropsWithChildren } from "react";
import { type Experience, experienceList } from "@/constants";

const Experience = () => (
  <section id="experience" className="py-[60px] flex flex-col gap-y-[34px]">
    {experienceList.map((experience) => (
      <Card {...experience} key={experience.company} />
    ))}
  </section>
);

const Card = ({
  company,
  period,
  role,
  descriptions,
  mainSkills,
  subSkills,
}: PropsWithChildren<Experience>) => (
  <div className="hover:bg-[#121212] p-[32px] rounded-[20px] flex flex-col md:flex-row gap-x-[32px] md:w-[700px]">
    <div className="text-blue-6A text-[14px] font-bold w-[100px] shrink-0">
      {period}
    </div>
    <div>
      <p className="text-[20px] font-bold">{company}</p>
      <p className="text-[16px] font-bold my-[10px]">{role}</p>
      {descriptions.map(({ main, sub }, idx) => (
        <div className="pt-[10px] text-gray-6" key={idx}>
          <p className="font-bold">{main}</p>
          <p>{sub}</p>
        </div>
      ))}
      <div className="flex mt-[28px] flex-wrap gap-[8px]">
        {mainSkills.map((skill) => (
          <Chip text={skill} key={skill} />
        ))}
        {subSkills.map((skill) => (
          <Chip text={skill} key={skill} variant="gray" />
        ))}
      </div>
    </div>
  </div>
);

const Chip = ({
  variant = "blue",
  text,
}: {
  variant?: "blue" | "gray";
  text: string;
}) => <span className={chipStyles[variant]}>{text}</span>;

const chipStyles = {
  blue: "bg-blue-6A rounded-[16px] text-white h-[32px] px-[12px] text-[14px] flex items-center",
  gray: "bg-gray-AF rounded-[16px] text-white h-[32px] px-[12px] text-[14px] flex items-center",
};

export default Experience;
