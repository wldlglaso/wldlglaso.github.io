import { projectDetails } from "@/constants";

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    id: project.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
