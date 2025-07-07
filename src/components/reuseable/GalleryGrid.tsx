import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easeInOut } from "framer-motion";

type GridItem = {
  className: string;
  imageUrl: string;
  alt?: string;
  isVideo?: boolean;
  showOverlay?: boolean;
};

type GalleryGridProps = {
  items: GridItem[];
  overlayContent?: React.ReactNode;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, overlayContent }) => {
  return (
    <div className="w-full">
      {/* Mobile layout */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {items.map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative w-full rounded-[6px] overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-[1.02]"
            >
              {item.isVideo ? (
                <video
                  src={item.imageUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.alt || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              {item.showOverlay && overlayContent && (
                <div className="absolute inset-0 z-20">{overlayContent}</div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Desktop & tablet layout */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-areas-gallery gap-x-[20px] gap-y-[20px]">
        {items.map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`${item.className} relative rounded-[6px] overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-[1.03]`}
            >
              {item.isVideo ? (
                <video
                  src={item.imageUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.alt || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              {item.showOverlay && overlayContent && (
                <div className="absolute inset-0 z-20">{overlayContent}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryGrid;
