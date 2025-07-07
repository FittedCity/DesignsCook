import { FaCheck } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const links = [
  { label: "rendering", path: "/works/rendering" },
  { label: "3d Animation", path: "/works/3d-animation" },
  { label: "product design", path: "/works/product-design" },
  { label: "marketing", path: "/works/marketing" },
];

const Navigation = () => {
  const location = useLocation();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="py-10">
      <motion.div
        ref={ref}
        className="border-y border-[#FFFFFF66] py-10 sm:py-16 text-[#ECECEC] uppercase"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-[30px] px-4">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 12,
                  },
                }}
                className="relative group"
              >
                <motion.div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                <NavLink
                  to={link.path}
                  className="flex items-center gap-3 sm:gap-[12px] max-w-full relative z-10"
                >
                  <motion.div
                    className={`w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] border border-[#FFFFFF40] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#FFFFFF40] text-[#FFFFFF]" : ""
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && <FaCheck className="text-[16px]" />}
                  </motion.div>
                  <motion.h6 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-snug font-[400]">
                    {link.label}
                  </motion.h6>
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;
