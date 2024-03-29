"use client";

import { type PropsWithChildren } from "react";
import { type Experience, experienceList } from "@/constants";
import { useControlList } from "@/hooks";
import ViewMoreButton from "./viewMoreButton";

const Experience = () => {
  const { open, handleClickMore, slicedlist } = useControlList(
    2,
    experienceList
  );

  return (
    <section
      id="experience"
      className="pt-[60px] pb-[40px] flex flex-col gap-y-[34px]"
    >
      {slicedlist.map((experience) => (
        <Card {...experience} key={experience.company} />
      ))}
      <ViewMoreButton
        isOpen={open}
        onClick={handleClickMore}
        name="Experience"
      />
    </section>
  );
};

const Card = ({
  company,
  period,
  role,
  descriptions,
}: PropsWithChildren<Experience>) => (
  <div className="hover:bg-[#121212] p-[32px] rounded-[20px] flex flex-col md:flex-row gap-x-[32px] md:w-[700px]">
    <div className="text-gray-6 text-[14px] font-bold w-[100px] shrink-0">
      {period}
    </div>
    <div>
      <p className="text-[20px] font-bold">{company}</p>
      <p className="text-[16px] font-bold mt-[12px] mb-[10px]">{role}</p>
      {descriptions}
    </div>
  </div>
);

export default Experience;
