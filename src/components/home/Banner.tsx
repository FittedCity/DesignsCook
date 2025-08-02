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
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <motion.div
        ref={sectionRef}
        className="w-full h-[80vh] sm:h-screen rounded-md overflow-hidden bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/assets/home/banner.jpg")',
          y, // Optional parallax scroll
        }}
      >
        <div className="relative z-20 flex flex-col justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 h-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 text-white">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 mx-2 sm:mx-4 md:mx-6 z-20">
            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-semibold uppercase max-w-[851px] leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[120px] text-center lg:text-left"
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
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40
                gap-1 sm:gap-2 cursor-pointer"
              >
                <p className="uppercase font-normal leading-tight tracking-tight text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  learn more
                </p>
                <ArrowDownwardIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300" />
              </motion.div>
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 mx-2 sm:mx-4 md:mx-6 z-20">
            {/* Animated Description */}
            <motion.h5
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-tight text-center lg:text-left max-w-2xl"
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
              className="w-full max-w-[180px] sm:max-w-[200px] md:max-w-[237px] h-12 sm:h-14 md:h-16 lg:h-[77px] flex items-center gap-2 sm:gap-3 md:gap-4 border-2 border-white rounded-full bg-transparent justify-center transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              <Link to="/contact">
                <p className="uppercase font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                  Get a Free Quote
                </p>
              </Link>
              <EastIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
