import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { useEffect } from "react";

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
  const [topRef, topInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [leftRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video autoplay when in view
  useEffect(() => {
    if (rightInView && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        // Fallback: Show play button or handle autoplay restrictions
      });
    }
  }, [rightInView]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20">
      {/* Top Image */}
      <motion.div
        ref={topRef}
        variants={fadeInOut(0)}
        initial="hidden"
        animate={topInView ? "visible" : "hidden"}
        className="w-full aspect-video sm:aspect-[3/2] md:aspect-[16/9] rounded-lg overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src="/assets/works/bigger-gallery.jpg"
          alt="Main Gallery"
          loading="lazy"
        />
      </motion.div>

      {/* Two Side-by-Side Images */}
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Left Image */}
        <motion.div
          ref={leftRef}
          variants={fadeInOut(0.1)}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="/assets/works/left-gallery.jpg"
            alt="Left Gallery"
            loading="lazy"
          />
        </motion.div>

        {/* Right Video */}
        <motion.div
          ref={rightRef}
          variants={fadeInOut(0.2)}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          className="w-full aspect-square sm:aspect-video md:aspect-[4/3] rounded-lg overflow-hidden relative"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/assets/works/right-gallery.mp4"
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            preload="auto"
            aria-label="Gallery video"
          />
          {/* Fallback play button for mobile browsers that block autoplay */}
          {!rightInView && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
                onClick={() => videoRef.current?.play()}
              >
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8,5.14V19.14L19,12.14L8,5.14Z"
                  />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
