import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Typewriter Hook
const useTypewriter = (
  text: string,
  speed: number = 100,
  delayBetweenLines: number = 300,
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

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartTyping(false);
      const delayStart = setTimeout(() => {
        setStartTyping(true);
      }, 400);
      return () => clearTimeout(delayStart);
    }
  }, [isInView]);

  const { displayedText, isTyping } = useTypewriter(
    "create visuals that not only\nrepresent spaces",
    70,
    250,
    startTyping
  );

  return (
    <div ref={ref} className="px-4 sm:px-6 md:px-[5%] w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-white flex flex-col lg:flex-row items-start justify-between gap-8"
      >
        <h1 className="text-[28px] sm:text-[32px] font-[400] leading-[1.3] uppercase tracking-normal">
          Mission
        </h1>

        <div className="py-2 max-w-full lg:max-w-[70%]">
          <p className="font-[500] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] leading-tight lg:leading-[80px] xl:leading-[90px] tracking-tighter uppercase">
            To{" "}
            <span className="text-[#9d9d9d]">
              {displayedText.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {isTyping && i === arr.length - 1 && (
                    <span className="animate-blink">|</span>
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </span>{" "}
            but make people <br />
            feel something about them. <br />
            Because when your audience <br />
            feels, they remember. And when <br />
            they remember, they act.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
