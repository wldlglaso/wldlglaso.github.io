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
        <p className="font-bold">리브랜딩 프로젝트 진행</p>
        <ul>
          <li>
            - 기업 통합적 브랜드 전략과 CI, BI 가이드화 배포, 내/외부 디자인
            퀄리티 & 브랜드 가치를 높임
          </li>
          <li>
            - 브랜드 디자인 작업물에 대한 퀄리티 관리 및 유지, IR, PPT, 문서
            디자인 및 가이드화하여 업무 효율 높임
          </li>
          <li>- 사옥 이전 인테리어 협력사와의 협업 및 사이니지 디자인</li>
          <li>- 조직문화 형성을 위한 웰컴 키트 디자인 & 제작 경험 보유</li>
          <li>- NFT Artwork & Minting 클레이튼 기반의 NFT 프로젝트 경험</li>
        </ul>
        <p className="font-bold mt-[12px]">NEOS BX 프로젝트 진행</p>
        <ul>
          <li>
            - 글로벌 법인 브랜드 구축, 브랜드 컨셉에 맞는 그래픽 요소 개발
          </li>
        </ul>
        <p className="font-bold mt-[12px]">Dolfin, Gryps BX 프로젝트 진행</p>
        <ul>
          <li>- 브랜드 미션, 비전, 네이밍 협의 & BI 디자인 개발</li>
        </ul>
      </div>
    ),
  },
  {
    company: "(주)한글과 컴퓨터",
    period: "19.09 - 21.05",
    role: "Designer",
    descriptions: (
      <div className="text-[16px] text-gray-A leading-[28px] pl-[10px]">
        <ul>
          <li>- 한컴 30주년 기념 패키지 디자인 (다이어리, 달력 Set)</li>
          <li>
            - 한글과컴퓨터 대표 캐릭터 제작, 효과적인 브랜드 경험 전달을 위해
            가이드 제작 및 배포
          </li>
          <li>- '한컴라이프케어' 화재 대피 마스크 패키지 디자인</li>
          <li>
            - 캐릭터 페어 및 사내 굿즈 제작을 위한 캐릭터 상품 24종 패키지 제작
          </li>
          <li>- 한컴타자 산성비 게임 테마 제작</li>
          <li>
            - 국내/외 캐릭터 홍보를 위한 삼성 갤럭시 테마 제작 및 배포 (62개국
            12제품, 총 20만건 다운로드 달성)
          </li>
        </ul>
      </div>
    ),
  },
];
