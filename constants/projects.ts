export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export type ProjectDetail = {
  id: string;
  name: string;
  contribution: string;
  period: string;
  description: string;
  skills: string;
};

export const projectList: Project[] = [
  {
    title: "01. Wavebridge Rebranding",
    description:
      "웨이브릿지의 장기적인 방향성을 제시하기 위해\nC - Level & 임직원 인터뷰와 비즈니스 영역에 대한\n분석을 진행하였고 CI, BI, VI 를 개발하였습니다. ",
    image: "./assets/projects/wavebridge.png",
    url: "/wavebridge",
  },
  {
    title: "02. NEOS Brand Design",
    description:
      "웨이브릿지가 미국에 설립한 합작 법인\n자산운용사의 브랜드를 개발하였습니다.",
    image: "./assets/projects/neos.png",
    url: "/neos",
  },
  {
    title: "03. Dolfin Brand Design",
    description:
      "법인과 기관 전용 가상 자산을 중개하고\n통합 자산관리와 거래 편의성을 제공하는\n플랫폼의 브랜드를 개발하였습니다.",
    image: "./assets/projects/dolfin.png",
    url: "/dolfin",
  },
  {
    title: "04. Gryps 브랜드 디자인",
    description:
      "법인과 코인 프로젝트, 가상 자산 기관들이\n투자할 수 있게 도와주는 글로벌 플랫폼의\n브랜드를 개발하였습니다.",
    image: "/assets/projects/gryps.png",
    url: "/gryps",
  },
  {
    title: "05. Internal Product (Login)",
    description:
      "웨이브릿지의 장기적인 방향성을 제시하기 위해\nC - Level & 임직원 인터뷰와 비즈니스 영역에 대한\n분석을 진행하였고 CI, BI, VI 를 개발하였습니다. ",
    image: "./assets/projects/internal.png",
    url: "/internal",
  },
  {
    title: "06.  Wavebridge 1.0",
    description:
      "웨이브릿지의 장기적인 방향성을 제시하기 위해\nC - Level & 임직원 인터뷰와 비즈니스 영역에 대한\n가이드 라인을 개발하였습니다.",
    image: "./assets/projects/wb.png",
    url: "/wb",
  },
  {
    title: "07. Crypto Surfers",
    description:
      "웨이브릿지 사내 임직원의 프로필용 대체불가능토큰\nNFT 크립토 서퍼 콜렉션을 개발하였습니다.",
    image: "./assets/projects/surfer.png",
    url: "/surfer",
  },
  {
    title: "08. 한글과컴퓨터 대표 캐릭터",
    description:
      "한글과컴퓨터 대표 캐릭터 말랑말랑 무브먼트의\n캐릭터 가이드라인 제작 및 배포하였습니다. ",
    image: "./assets/projects/hancom.png",
    url: "/hancom",
  },
  {
    title: "09. 화재대피 마스크",
    description:
      "한글과컴퓨터의 자회사 한컴 세이프티에서 개발한\n화재용 긴급 대피 마스크 패키지를 제작하였습니다.",
    image: "./assets/projects/mask.png",
    url: "/mask",
  },
];

export const projectDetails: ProjectDetail[] = [
  {
    id: "dolfin",
    name: "Dolfin User side, Admin side",
    contribution: "60%",
    period: "Sep 2022 - Present",
    description: "",
    skills:
      "React, Typescript, React-query, Next.js, jotai, Storybook, Tailwind, Git",
  },
  {
    id: "microsite",
    name: "Dolfin Microsite",
    period: "Aug 2023 - Feb 2024",
    contribution: "98%",
    description: "",
    skills: "Next.js, Typescript, Tailwind, Git, Framer-Motion, React-query",
  },
  {
    id: "lottemart",
    name: "롯데마트GO - 코인 시스템",
    period: "Jun 2021 - May 2022",
    contribution: "90%",
    description: "",
    skills: "React, Typescript, Redux, SVN",
  },
  {
    id: "review",
    name: "펜타웍스 자체 솔루션 review 시스템",
    period: "Feb 2021 - May 2021",
    contribution: "80%",
    description: "",
    skills: "Vue.js, Bootstrap, Java, Spring Boot, MySQL, git",
  },
  {
    id: "lottehomeshopping",
    name: "롯데홈쇼핑 - iToo, wyd",
    period: "Sep 2020 - Jan 2021",
    contribution: "30%",
    description: "",
    skills: "Vue.js, Bootstrap, Java, Spring Boot, MySQL, git",
  },
];
