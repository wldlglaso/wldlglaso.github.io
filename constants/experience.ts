export type Experience = {
  company: string;
  period: string;
  role: string;
  descriptions: Description[];
  mainSkills: string[];
  subSkills: string[];
};

type Description = {
  main: string;
  sub: string;
};

export const experienceList: Experience[] = [
  {
    company: "웨이브릿지",
    period: "22.09 ~ 현재",
    role: "프론트엔드 개발자",
    descriptions: [
      {
        main: "가상자산 장외거래 서비스 Dolfin",
        sub: "User, Admin side 프론트엔드 개발",
      },
      {
        main: "Dolfin Microsite",
        sub: "반응형 홍보 사이트 프론트엔드 개발",
      },
    ],
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
    descriptions: [
      {
        main: "롯데마트GO - 코인 시스템",
        sub: "- 롯데마트GO 코인 리워드 시스템 프론트엔드 개발",
      },
      {
        main: "펜타웍스 자체 솔루션 review 시스템",
        sub: "- 고객사의 리뷰를 통계적으로 관리할 수 있는 솔루션 개발",
      },
      {
        main: "롯데홈쇼핑 - iToo, wyd",
        sub: "- 콜센터 Back Office 풀스택 개발자로 참여",
      },
    ],
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
