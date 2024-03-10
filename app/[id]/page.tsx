import Link from "next/link";
import Image from "next/image";
import { projectDetails, type ProjectDetail } from "@/constants";
import CircleArrow from "@/public/assets/common/circle_arrow.svg";

function getProjectDetail(id: string): ProjectDetail {
  return (
    projectDetails.find((project) => project.id === id) || projectDetails[0]
  );
}

export function generateStaticParams() {
  return projectDetails;
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { name, period, contribution, skills } = getProjectDetail(id);

  return (
    <div className="mx-auto w-[1120px] flex flex-col">
      <Link href="/" className="flex items-center gap-x-[8px]">
        <CircleArrow />
        <span className="text-gray-6 text-[18px]">Home</span>
      </Link>
      <div className="w-[300px] md:w-[1120px] h-[150px] md:h-[600px] relative my-[40px]">
        <Image src={`/assets/projects/${id}_detail.png`} alt={id} fill />
      </div>
      <p className="text-gray-6 text-[18px] font-bold mb-[18px]">{name}</p>
      <div className="text-[16px] flex flex-col gap-y-[12px]">
        <ContentWrap name="Period" description={period} />
        <ContentWrap name="Project" description={name} />
        <ContentWrap name="Contribution" description={contribution} />
        <ContentWrap name="Skills Used" description={skills} />
      </div>
    </div>
  );
}

const ContentWrap = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="flex gap-x-[20px] w-[480px]">
    <span className="text-blue-main w-[120px]">{name}</span>
    <span className="text-gray-6">{description}</span>
  </div>
);
