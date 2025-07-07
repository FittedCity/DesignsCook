import { useInView } from "react-intersection-observer";
import { motion, easeInOut } from "framer-motion";

type BannerProps = {
  title: string;
  backgroundImage?: string;
  backgroundVideo?: string;
};

const Banner = ({ title, backgroundImage, backgroundVideo }: BannerProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, ease: easeInOut },
    },
    hidden: {
      opacity: 0,
      scale: 1.02,
      transition: { duration: 1.2, ease: easeInOut },
    },
  };

  const textVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: easeInOut },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: { duration: 1.2, ease: easeInOut },
    },
  };

  return (
    <div className="relative py-12" ref={ref}>
      {/* Banner Container */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[512px] rounded-[8px] overflow-hidden bg-cover bg-center">
        {/* Video Background */}
        {backgroundVideo ? (
          <motion.video
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            variants={fadeVariants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          />
        ) : (
          // Image Background
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            variants={fadeVariants}
            animate={inView ? "visible" : "hidden"}
            initial="hidden"
          />
        )}

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/10 z-10"
          variants={fadeVariants}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
        />
      </div>

      {/* Title */}
      <motion.h1
        className={`
          z-20 text-white font-[500] leading-tight tracking-tight
          text-[55px] sm:text-[64px] md:text-[90px] lg:text-[130px]
          absolute top-[0rem] md:top-[-2rem] lg:top-[-3.2rem] 
          left-10 md:left-24 lg:left-14
          text-center md:text-left
          px-4 sm:px-0
        `}
        variants={textVariants}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Banner;
