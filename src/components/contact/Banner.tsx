import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Banner = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[512px] rounded-[8px] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: 'url("/assets/contact/contact-banner.jpg")',
      }}
    >
      <motion.h1
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={fadeInUp}
        className="z-20 font-[500] text-[42px] sm:text-[64px] md:text-[90px] lg:text-[130px] leading-[1.1] tracking-tighter uppercase text-white text-center"
      >
        Contact
      </motion.h1>
      <div className="absolute inset-0 bg-[#00000063] z-10" />
    </div>
  );
};

export default Banner;
