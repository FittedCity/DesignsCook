import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInOut = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      delay,
      ease: easeInOut,
    },
  },
});

const Gallery = () => {
  const [topRef, topInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [leftRef, leftInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="py-14">
      {/* Top Image */}
      <motion.img
        ref={topRef}
        variants={fadeInOut(0)}
        initial="hidden"
        animate={topInView ? "visible" : "hidden"}
        className="w-full h-[320px] sm:h-[420px] md:h-[550px] lg:h-[662px] object-cover rounded-[8px]"
        src="/assets/works/bigger-gallery.jpg"
        alt="Main Gallery"
      />

      {/* Two Side-by-Side Images */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.img
          ref={leftRef}
          variants={fadeInOut(0.1)}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[440px] object-cover rounded-[8px]"
          src="/assets/works/left-gallery.jpg"
          alt="Left Gallery"
        />

        <motion.img
          ref={rightRef}
          variants={fadeInOut(0.2)}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[440px] object-cover rounded-[8px]"
          src="/assets/works/right-gallery.jpg"
          alt="Right Gallery"
        />
      </div>
    </div>
  );
};

export default Gallery;