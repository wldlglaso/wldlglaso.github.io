export type Experience = {
  company: string;
  period: string;
  role: string;
  mainSkills: string[];
  subSkills: string[];
};

export const experienceList: Experience[] = [
  {
    company: "웨이브릿지",
    period: "22.09 ~ 현재",
    role: "프론트엔드 개발자",
    mainSkills: [
      "React",
      "Typescript",
      "React-Query",
      "Nextjs",
      "Jotai",
      "Tailwind",
      "Framer-motion",
      "Storybook",
    ],
    subSkills: ["Git", "Figma", "Jira", "Confluence"],
  },
  {
    company: "펜타웍스",
    period: "20.09 ~ 22.05",
    role: "풀스택 개발자",
    mainSkills: [
      "React",
      "Typescript",
      "Redux",
      "SVN",
      "Vue.js",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    subSkills: ["Git", "SVN"],
  },
];
