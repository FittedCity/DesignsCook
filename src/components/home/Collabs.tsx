import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const collabItems = [
  "Architects",
  "Real Estate Developers",
  "Interior Designers",
  "Event Planners",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CollabCard = ({
  title,
  index,
  isVisible,
}: {
  title: string;
  index: number;
  isVisible: boolean;
}) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    transition={{
      delay: 0.2 + index * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    }}
    className="bg-white/10 h-[110px] md:h-[120px] lg:h-[130px] w-full rounded-md flex items-center justify-center text-center"
  >
    <h3 className="text-white text-[28px] md:text-[36px] lg:text-[50px] font-light leading-tight md:leading-[60px] lg:leading-[75px] uppercase">
      {title}
    </h3>
  </motion.div>
);

const Collabs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Animate every time it scrolls into view
    amount: 0.4, // Trigger when 40% of section is visible
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-16 px-6 pt-12 md:px-[6%] py-[10%]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="uppercase text-[36px] md:text-[60px] lg:text-[90px] leading-[48px] md:leading-[80px] lg:leading-[124px] text-transparent font-bold text-center"
        style={{ WebkitTextStroke: "1.8px #4b4b4b" }}
      >
        We collaborate with
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full max-w-[1150px]">
        {collabItems.map((item, index) => (
          <CollabCard key={index} title={item} index={index} isVisible={isInView} />
        ))}
      </div>
    </div>
  );
};

export default Collabs;
