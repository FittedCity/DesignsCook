import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const content = [
    {
      img: "/assets/about/architects.jpg",
      text: "Architects presenting bold concepts or competition entries",
      width: "lg:w-[670px]",
    },
    {
      img: "/assets/about/develop.jpg",
      text: "Developers marketing residential, commercial, or public projects",
      width: "lg:w-[462px]",
      hasOverlay: true,
    },
    {
      img: "/assets/about/interior.png",
      text: "Interior Designers needing tailored visual support",
      width: "lg:w-[462px]",
      hasOverlay: true,
    },
    {
      img: "/assets/about/event.png",
      text: "Event Planners seeking immersive previews of space transformations",
      width: "lg:w-[670px]",
    },
  ];

  const cardVariants = (index: number) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.2,
        ease: easeInOut,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  });

  return (
    <div className="w-full text-white uppercase py-[6%] px-4 sm:px-6 md:px-[5%]">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-6 lg:gap-x-5 lg:gap-y-10">
        {content.map(({ img, text, width, hasOverlay }, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={cardVariants(index)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative w-full ${width} h-[450px] sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[816px] rounded-[8px] bg-cover bg-center overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]`}
              style={{ backgroundImage: `url(${img})` }}
            >
              {hasOverlay ? (
                <div className="absolute bottom-0 w-full px-4 sm:px-[5%] py-4 sm:py-5 bg-[#1E1E1E]/90 backdrop-blur-sm rounded-b-[8px]">
                  <h1 className="font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-tight tracking-tighter">
                    {text}
                  </h1>
                </div>
              ) : (
                <h3 className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-tight tracking-tighter max-w-[90%] bg-black/40 px-3 py-2 rounded-md">
                  {text}
                </h3>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
