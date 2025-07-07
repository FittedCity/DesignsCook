import { useInView } from "react-intersection-observer";
import { motion, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";

type CtaProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

const Cta = ({ title, buttonText, onClick }: CtaProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: easeInOut },
    },
  };

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <div
      className="w-full bg-[#282827] py-12 sm:py-16 md:py-20 uppercase text-white text-center px-4 sm:px-6"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="text-[28px] font-[400] sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[50px] leading-[79px] tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.button
          onClick={onClick}
          variants={fadeInUp}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="flex items-center gap-3 w-[160px] sm:w-[180px] md:w-[187px] h-[60px] sm:h-[70px] md:h-[77px] rounded-full justify-center border border-white transition duration-300 hover:bg-white hover:text-black"
        >
          <span className="text-[16px] sm:text-[20px] md:text-[24px] leading-tight font-[400]">
            {buttonText}
          </span>
          <EastIcon className="w-[12px] h-[14px]" />
        </motion.button>
      </div>
    </div>
  );
};

export default Cta;
