import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TheProcess = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="uppercase py-12 sm:py-16 lg:py-20" ref={ref}>
      {/* Title Animation */}
      <motion.h1
        className="font-[400] text-transparent text-[36px] sm:text-[60px] md:text-[72px] lg:text-[90px] leading-[1.2] sm:leading-[1.3] lg:leading-[124px] tracking-tighter text-center"
        style={{ WebkitTextStroke: "1px #4b4b4b" }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: easeInOut }}
      >
        DesignsCook Process
      </motion.h1>

      {/* Image Background & Text Animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1.3, delay: 0.2, ease: easeInOut }}
        className="mt-10 sm:mt-14 flex items-end sm:items-start justify-center sm:justify-end bg-cover bg-center rounded-[12px] sm:rounded-[20px] w-full min-h-[360px] sm:h-[480px] md:h-[560px] lg:h-[639px]"
        style={{ backgroundImage: "url(/assets/works/process-image.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: easeInOut }}
          className="bg-[#201D1D7D] p-6 sm:p-10 md:p-14 w-full sm:w-[90%] md:w-[80%] lg:w-[733px] h-auto sm:h-[260px] flex items-center justify-center"
        >
          <p className="font-[400] sm:font-[500] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed sm:leading-[30px] md:leading-[34px] lg:leading-[39px] text-[#ffffff] text-center sm:text-left">
            At DesignsCook, we believe that clarity begins with collaboration.
            Our process is designed to transform your ideas into compelling
            visual stories, efficiently and creatively. Whether you're
            presenting a concept, seeking investment, or pitching to clients, we
            make sure your vision is seen, understood, and valued.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TheProcess;
