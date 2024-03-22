const Education = () => (
  <section className="py-[60px] text-[16px] text-gray-A">
    <div className="flex">
      <span className="font-bold w-[134px]">Educations</span>
      <Graph />
      <div className="leading-[24px]">
        <div className="font-bold">
          <p>경희대학교 졸업 (14.03 - 20.02)</p>
          <p>시각디자인학과</p>
        </div>
        <p className="w-[460px] pt-[16px]">
          포스터, 편집, 영상, 일러스트 등 시각커뮤니케이션을 위한 디자인 원칙,
          <br />
          문제, 이론, 방법 및 프로세스, 기술 과정에 대한 교육 수료
        </p>
        <p className="font-bold pt-[40px]">가오고등학교 졸업 (11.03 - 14.02)</p>
      </div>
    </div>
    <div className="flex gap-x-[20px] mt-[60px]">
      <span className="font-bold w-[143px]">Training courses</span>
      <div className="leading-[28px]">
        <p>플러스엑스 UI/UX/BX 패키지 수료 (23.09)</p>
        <p>리메인 BX 패키지 교육 수료 (22.09)</p>
        <p>디자인나스 AD(BX) 클래스 수강 (21.03)</p>
      </div>
    </div>
    <div className="flex gap-x-[20px] mt-[40px]">
      <span className="font-bold w-[143px]">Awards</span>
      <div className="leading-[28px]">
        <p>네이버 인플루언서 선정 (2020)</p>
        <p>성남시 청년 아이디어 공모전 수상 (2019)</p>
        <p>Good Design 수상 (2019)</p>
      </div>
    </div>
  </section>
);

export default Education;

const Graph = () => (
  <div className="w-[10px] h-full shrink-0 mr-[20px] flex flex-col items-center pt-[8px]">
    <div className="bg-gray-A w-[10px] h-[10px] rounded-full" />
    <div className="bg-gray-6 w-[2px] h-[140px]" />
    <div className="bg-gray-A w-[10px] h-[10px] rounded-full" />
  </div>
);
