import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

// Custom Hook
const useTypewriter = (
  text: string,
  speed: number = 100,
  delayBetweenLines: number = 500,
  isActive: boolean
) => {
  const lines = text.split("\n");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (!isActive) return;

    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentText("");
  }, [isActive]);

  useEffect(() => {
    if (!isActive || currentLineIndex >= lines.length) return;

    const targetLine = lines[currentLineIndex];
    let timeout: number;

    if (currentText.length < targetLine.length) {
      timeout = window.setTimeout(() => {
        setCurrentText(targetLine.substring(0, currentText.length + 1));
      }, speed);
    } else {
      timeout = window.setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentText("");
        setCurrentLineIndex((prev) => prev + 1);
      }, delayBetweenLines);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentLineIndex, isActive]);

  return {
    displayedText: [...displayedLines, currentText].join("\n"),
    isTyping: currentText.length < lines[currentLineIndex]?.length,
  };
};

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartTyping(false); // Reset before restarting
      const delayStart = setTimeout(() => {
        setStartTyping(true);
      }, 300); // Delay before typing starts
      return () => clearTimeout(delayStart);
    }
  }, [isInView]);

  const { displayedText, isTyping } = useTypewriter(
    "from blueprint\n to build",
    80,
    100,
    startTyping
  );

  return (
    <div
      ref={ref}
      className="text-[#ffffff] uppercase w-full pt-24 px-4 md:px-20 flex items-center"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          className="flex flex-col gap-8 md:gap-12 w-full md:w-auto"
        >
          <h2 className="font-[400] text-[24px] md:text-[32px] leading-[32px] md:leading-[42px]">
            Our Works
          </h2>

          <div
            className="relative rounded-full border border-white bg-cover bg-center overflow-hidden 
             w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] 
             flex items-center justify-center px-4 z-0"
            style={{
              backgroundImage: 'url("/assets/home/service-works-bg.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/80 z-10 rounded-full" />
            <div className="relative z-20">
              <Link to="/works" className="flex items-center gap-2 sm:gap-4">
                <p className="text-white font-normal text-[16px] sm:text-[20px] leading-tight">
                  work
                </p>
                <EastIcon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-white" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          className="w-full md:w-auto"
        >
          <h2 className="font-[500] tracking-tighter text-[32px] sm:text-[48px] md:text-[64px] lg:text-[70px] leading-tight md:leading-[90px] lg:leading-[110px]">
            We guide you every step of
            <br className="hidden md:block" /> the way,{" "}
            <span className="text-[#9d9d9d]">
              {displayedText.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {isTyping && i === arr.length - 1 && (
                    <span className="animate-blink">|</span>
                  )}
                  {i === 0 && <br className="hidden md:block" />}
                </span>
              ))}
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
