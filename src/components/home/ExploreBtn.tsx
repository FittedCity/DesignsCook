import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";

const ExploreBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/works");
  };

  return (
    <div className="py-10 flex items-center justify-center">
      <div
        onClick={handleClick}
        className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center rounded-full text-white border border-white bg-transparent
        w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] transition-all duration-300 cursor-pointer hover:bg-white hover:text-black"
      >
        <p className="uppercase font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight tracking-tight">
          See Our Work
        </p>
        <ArrowDownwardIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
      </div>
    </div>
  );
};

export default ExploreBtn;
