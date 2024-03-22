import type { ReactElement } from "react";

export type Experience = {
  company: string;
  period: string;
  role: string;
  descriptions: ReactElement;
};

export const experienceList: Experience[] = [
  {
    company: "플러스엑스",
    period: "23.09 - 24.01",
    role: "Senior Brand Designer",
    descriptions: (
      <div className="text-[16px] text-gray-A leading-[28px] pl-[10px]">
        <p>- N사 리브랜딩을 적용한 운영 디자인</p>
        <p className="ml-[10px]">
          실제 적용 환경을 고려한 온/오프라인 가이드라인 정립
        </p>
        <p>- 현장 홍보물 POP 제작 및 각종 대내외 제작물 디자인 포스터,</p>
        패키지, Kiosk/DID Stationery, On/Offline Banner 등 - 가이드에 맞는
        그래픽 에셋 별도 제작으로 디자인 퀄리티 높임
      </div>
    ),
  },
  {
    company: "웨이브릿지",
    period: "21.05 - 23.05",
    role: "Brand Designer",
    descriptions: (
      <div className="text-[16px] text-gray-A leading-[28px] pl-[10px]">
        <p>리브랜딩 프로젝트 진행</p>
        <p></p>- 기업 통합적 브랜드 전략과 CI, BI 가이드화 배포, 내/외부 디자인
        퀄리티 & 브랜드 가치를 높임 - 브랜드 디자인 작업물에 대한 퀄리티 관리 및
        유지, IR, PPT, 문서 디자인 및 가이드화하여 업무 효율 높임 - 사옥 이전
        인테리어 협력사와의 협업 및 사이니지 디자인 - 조직문화 형성을 위한 웰컴
        키트 디자인 & 제작 경험 보유 - NFT Artwork & Minting 클레이튼 기반의 NFT
        프로젝트 경험 NEOS BX 프로젝트 진행 - 글로벌 법인 브랜드 구축, 브랜드
        컨셉에 맞는 그래픽 요소 개발 Dolfin, Gryps BX 프로젝트 진행 - 브랜드
        미션, 비전, 네이밍 협의 & BI 디자인 개발
      </div>
    ),
  },
  {
    company: "(주)한글과 컴퓨터",
    period: "19.09 - 21.05",
    role: "Designer",
    descriptions: <></>,
  },
];
