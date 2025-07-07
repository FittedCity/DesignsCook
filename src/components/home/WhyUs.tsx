import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const bubbleTexts = [
    "Fast Turnarounds",
    "Eye for Detail & Design",
    "Team with Architectural Expertise",
    "Fast Turnarounds",
  ];

  return (
    <div className="px-4 sm:px-10 relative z-0">
      <div
        ref={ref}
        className="relative w-full h-[100vh] md:h-[772px] rounded-[12px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/home/choose_designscook.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />

        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 text-white text-center">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[90px] font-[400] leading-tight md:leading-[100px] lg:leading-[110px] xl:leading-[124px] tracking-tighter uppercase mb-6"
          >
            Why Choose Designscook?
          </motion.h1>

          {/* Animated Feature Bubbles */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-14 mt-6 sm:mt-10 md:mt-16">
            {bubbleTexts.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0.2 + index * 0.15,
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[220px]
                h-[140px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[220px]
                rounded-full p-3 sm:p-5 bg-[#FFFFFF12] border border-[#FFFFFF59] flex items-center justify-center
                hover:scale-105 transition-transform duration-300"
              >
                <h3 className="uppercase font-[300] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[30px] leading-tight">
                  {text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
