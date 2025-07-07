import { motion, useScroll, useTransform, useInView } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EastIcon from "@mui/icons-material/East";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  // Optional parallax scroll effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="p-[2%]">
      <motion.div
        ref={sectionRef}
        className="w-full h-[809px] rounded-md overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/assets/home/banner.jpg")',
          y, // Optional parallax scroll
        }}
      >
        <div className="relative z-20 flex flex-col justify-end gap-10 h-full px-4 md:px-6 py-8 md:py-12 text-white">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mx-4 md:mx-7 z-20">
            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-semibold uppercase max-w-[851px] leading-[80px] md:leading-[100px] lg:leading-[120px] tracking-tight text-[48px] md:text-[80px] lg:text-[120px] text-center lg:text-left"
            >
              Spaces Reimagined. <br /> Stories Rendered.
            </motion.h1>

            {/* Circle Button */}
            <Link to="/about">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ type: "spring", damping: 10, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center text-center rounded-full border border-transparent bg-white text-black 
              hover:bg-transparent hover:border-white hover:text-white transition-all duration-300
              w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]
              gap-1 sm:gap-2 md:gap-3 cursor-pointer"
              >
                <p className="uppercase font-normal leading-tight tracking-tight text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
                  learn more
                </p>
                <ArrowDownwardIcon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] transition-colors duration-300" />
              </motion.div>
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mx-4 md:mx-7 z-20">
            {/* Animated Description */}
            <motion.h5
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[28px] md:leading-[32px] tracking-tight text-center lg:text-left"
            >
              Designscook delivers high-quality 3D renderings, animations, and
              marketing content to bring your architectural{" "}
              <br className="hidden md:block" />
              visions to life—on time, with precision.
            </motion.h5>

            {/* CTA Button */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[237px] h-[60px] md:h-[70px] lg:h-[77px] flex items-center gap-2 md:gap-4 border-2 border-white rounded-full bg-transparent justify-center transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              <Link to="/contact">
                <p className="uppercase font-normal text-[16px] md:text-[20px] lg:text-[24px]">
                  Get a Free Quote
                </p>
              </Link>
              <EastIcon className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </motion.div>
          </div>

          {/* Bottom Gradient Shadow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-full h-3/4 z-10"
            style={{
              background: "linear-gradient(to top, #151515, #201D1D00)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
