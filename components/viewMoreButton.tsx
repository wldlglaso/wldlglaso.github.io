import Chevron from "@/public/assets/common/chevron.svg";

interface ViewMoreButtonProps {
  isOpen: boolean;
  name: string;
  onClick: () => void;
}

const ViewMoreButton = ({ isOpen, name, onClick }: ViewMoreButtonProps) => (
  <button
    className="flex text-gray-A font-bold gap-x-[4px] items-center"
    onClick={onClick}
  >
    <span>{`View ${isOpen ? "Less" : "More"} ${name}`}</span>
    <Chevron className={`fill-gray-A ${isOpen ? "-rotate-90" : "rotate-90"}`} />
  </button>
);

export default ViewMoreButton;
