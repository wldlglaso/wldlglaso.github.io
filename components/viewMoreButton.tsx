import Chevron from "@/public/assets/common/chevron.svg";

interface ViewMoreButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ViewMoreButton = ({ isOpen, onClick }: ViewMoreButtonProps) => (
  <button
    className="flex text-gray-A font-bold gap-x-[4px] items-center"
    onClick={onClick}
  >
    <span>View {isOpen ? "Less" : "More"} Experience</span>
    <Chevron className={`fill-gray-A ${isOpen ? "-rotate-90" : "rotate-90"}`} />
  </button>
);

export default ViewMoreButton;
