import Link from "next/link";
import Image from "next/image";
import { projectDetails, type ProjectDetail } from "@/constants";
import CircleArrow from "@/public/assets/common/circle_arrow.svg";

export function generateStaticParams() {
  return projectDetails;
}

export default function Page({ params }: { params: ProjectDetail }) {
  const { id, name, period } = params;

  return (
    <div className="mx-auto w-[1120px] flex flex-col">
      <Link href="/" className="flex items-center gap-x-[8px]">
        <CircleArrow />
        <span className="text-gray-6 text-[18px]">Home</span>
      </Link>
      <div className="w-[300px] md:w-[1120px] h-[150px] md:h-[600px] relative my-[40px]">
        <Image src={`/assets/projects/${id}_detail.png`} alt={id} fill />
      </div>
      <div className="text-[16px]">
        <p className="text-blue-main font-semibold">{period}</p>
        <p className="text-blue-main font-semibold">{name}</p>
      </div>
    </div>
  );
}
