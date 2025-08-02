import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Testimony = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <div className="relative z-10 bg-[#282827] px-4 sm:px-10 md:px-20 lg:px-28 pt-10 pb-16 md:py-10 overflow-hidden">
      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-40 text-white uppercase"
      >
        <h2 className="font-[250] text-[20px] sm:text-[24px] md:text-[36px] lg:text-[48px] leading-relaxed tracking-tight">
          "DesginsCook consistently delivers high-quality 3d renderings that bring our construction projects to life. Their visuals helps us communicate clearly with clients and speed up approvals. The accuracy and detail are unmatched"
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 mt-12 md:mt-16"
        >
          <img
            src="/assets/home/testimonial-img.jpg"
            className="rounded-full w-[80px] sm:w-[100px] md:w-[130px] h-auto object-cover"
            alt="Testimonial"
            loading="lazy"
          />
          <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2">
            <h1 className="font-[400] text-[20px] sm:text-[24px] md:text-[32px] leading-tight">
              Ayodele Lawal
            </h1>
            <h3 className="font-[250] text-[16px] capitalize sm:text-[18px] md:text-[24px] leading-tight">
              HollowellAEC
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimony;
