const Skills = () => (
  <section className="flex gap-x-[20px] py-[40px]">
    <span className="text-gray-A w-[124px] font-bold">Design Skill</span>
    <div className="flex gap-[10px] flex-wrap w-[528px]">
      {skillList.map((skill, idx) => (
        <Chip key={idx} text={skill} />
      ))}
    </div>
  </section>
);

const Chip = ({ text }: { variant?: "blue" | "gray"; text: string }) => (
  <span className="bg-gray-4 shrink-0 rounded-[16px] text-white h-[32px] px-[14px] text-[14px] flex items-center justify-center">
    {text}
  </span>
);

const skillList = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Blender",
  "PowerPoint",
  "Word",
  "Excel",
  "After Effects",
  "Premiere Pro",
  "Midjourney",
];

export default Skills;
