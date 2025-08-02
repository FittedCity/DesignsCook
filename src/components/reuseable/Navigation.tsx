import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const links = [
  { label: "rendering", path: "/works/rendering" },
  { label: "3d Animation", path: "/works/3d-animation" },
  { label: "product design", path: "/works/product-design" },
  { label: "marketing", path: "/works/marketing" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const controls = useAnimation();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  useEffect(() => {
    // Set initial active link based on current path
    const currentLink = links.find((link) => link.path === location.pathname);
    if (currentLink) {
      setActiveLink(currentLink.path);
    }
  }, [location.pathname]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const handleLinkClick = (path: string) => {
    if (activeLink === path) {
      // If clicking the active link, navigate to works page
      navigate("/works");
      setActiveLink(null);
    } else {
      // Otherwise navigate to the selected link
      navigate(path);
      setActiveLink(path);
    }
  };

  return (
    <div className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <motion.nav
        ref={ref}
        className="border-y border-white/10 py-8 sm:py-12 md:py-14 lg:py-16 text-white uppercase"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {links.map((link, index) => {
            const isActive = activeLink === link.path;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:px-2 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 relative z-10 focus:outline-none"
                >
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white/20" : "bg-transparent"
                    }`}
                    animate={{
                      rotate: isActive ? 360 : 0,
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <FaCheck className="text-sm sm:text-base md:text-lg" />
                      </motion.span>
                    )}
                  </motion.div>
                  <motion.span className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight">
                    {link.label}
                  </motion.span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
