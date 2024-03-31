import { IoTrophy } from "react-icons/io5";

interface AchievementProps {
  label: string;
  detail: string;
}

const Achievement: React.FC<AchievementProps> = ({ detail, label }) => {
  return (
    <div className="h-[192] w-[277px] rounded-md ring-1 ring-[#FFFFFF10] py-8 justify-center items-center flex flex-col">
      <IoTrophy color="#B1EEF0" />
      <h3 className="text-white font-bold text-lg">{label}</h3>
      <p className="text-white font-light text-sm">{detail}</p>
    </div>
  );
};

export default Achievement;
