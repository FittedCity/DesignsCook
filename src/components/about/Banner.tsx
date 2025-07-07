import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="pt-40 pb-10 sm:pt-36 md:pt-40 px-4 sm:px-6 md:px-[3%]"
    >
      <div className="text-white flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[500] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[90px] leading-tight md:leading-[106px] tracking-tighter uppercase"
        >
          One image, one film, one <br className="hidden sm:block" />
          experience at a time.
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 sm:mt-8 font-[300] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-relaxed tracking-tight uppercase text-center max-w-6xl"
        >
          We don&apos;t just produce visuals. We craft tools of persuasion —
          <br className="hidden md:block" />
          renderings, animations, and interactive experiences that tell the full
          story of your project before it&apos;s ever built.
        </motion.h4>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        className="relative mt-12 sm:mt-16 md:mt-20"
      >
        <img
          src="/assets/about/banner.jpg"
          className="w-full max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[803px] object-cover rounded-[8px]"
          alt="about_banner"
        />
        <div className="absolute inset-0 bg-black/20 z-10 rounded-[8px]" />
      </motion.div>
    </div>
  );
};

export default Banner;
