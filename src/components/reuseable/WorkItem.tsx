import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export interface Subsection {
  id: string;
  title: string;
  content: string;
}

interface WorkItemProps {
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  side: "left" | "right";
  subsections: Subsection[];
}

const WorkItem: React.FC<WorkItemProps> = ({
  title,
  mediaType,
  mediaSrc,
  side,
  subsections,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const handleMainToggle = () => {
    setIsOpen(!isOpen);
    setOpenSub(null);
  };

  const handleSubToggle = (id: string) => {
    setOpenSub((prev) => (prev === id ? null : id));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`relative w-full text-white flex flex-col lg:flex-row ${
        side === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-start gap-6 lg:gap-10 px-0 lg:px-[2%] mt-20 lg:mt-40 pb-10`}
    >
      {/* Media */}
      <div className="w-full lg:w-[50%] xl:w-[822px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[579px] rounded-md overflow-hidden relative group">
        {mediaType === "image" ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${mediaSrc}")` }}
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Panel */}
      <div
        className={`w-full lg:absolute lg:top-[96px] ${
          side === "left" ? "lg:left-0" : "lg:right-0"
        } bg-[#1E1E1E] rounded-[8px] overflow-hidden lg:w-[50%] xl:w-[612px]`}
      >
        {/* Header */}
        <div className="h-[100px] sm:h-[120px] lg:h-[160px] flex items-center justify-between px-6 sm:px-8 lg:px-10">
          <h1 className="font-medium uppercase text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] lg:leading-[75px] tracking-tighter">
            {title}
          </h1>
          <div
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
            onClick={handleMainToggle}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`main-${isOpen}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {isOpen ? (
                  <RemoveIcon fontSize="small" />
                ) : (
                  <AddIcon fontSize="small" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Subsections */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="px-6 sm:px-8 lg:px-10 pb-14 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {subsections.map((section) => (
                <div key={section.id} className="space-y-2 text-[#9d9d9d]">
                  {section.title ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h6 className="text-[#dddddd] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] lg:leading-[38px] font-light uppercase">
                          {section.title}
                        </h6>
                        <div
                          className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#303030] flex items-center justify-center cursor-pointer"
                          onClick={() => handleSubToggle(section.id)}
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                              key={`toggle-${openSub === section.id}`}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{ duration: 0.25 }}
                            >
                              {openSub === section.id ? (
                                <RemoveIcon fontSize="small" />
                              ) : (
                                <AddIcon fontSize="small" />
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                      <AnimatePresence>
                        {openSub === section.id && (
                          <motion.p
                            className="text-[#dddddd] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] md:leading-[28px] max-w-full"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {section.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.p
                      className="text-[#dddddd] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] md:leading-[28px] max-w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {section.content}
                    </motion.p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WorkItem;
