import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const shuffleTextSequence = (text: string, steps = 15) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const frames: string[] = [];
  for (let step = 0; step < steps; step++) {
    let shuffled = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " " || text[i] === "\n") {
        shuffled += text[i];
      } else if (step < steps - 1) {
        shuffled += chars[Math.floor(Math.random() * chars.length)];
      } else {
        shuffled += text[i];
      }
    }
    frames.push(shuffled);
  }
  return frames;
};

const useShuffler = (text: string, trigger: boolean, speed = 20) => {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if (!trigger) return;

    const frames = shuffleTextSequence(text, 20);
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(frames[i]);
      i++;
      if (i >= frames.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [trigger, text, speed]);

  return display;
};

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const heading = "Our Story";
  const para1 =
    "At DesignsCook, we specialize in turning your ideas into powerful visual stories. We are a 3D visualization and rendering firm that helps clients bring their unbuilt concepts to life, long before construction begins or an event takes shape. Whether it's architectural designs, interior concepts, event setups, or real estate developments, we create vivid, lifelike images that make your vision easy to understand, market, and fund.";

  const para2 =
    "Our work empowers you to communicate, gain stakeholder trust, and present with confidence. By bridging the gap between imagination and execution, we ensure your audience sees exactly what you see, making every idea one step closer to reality.";

  const shuffledHeading = useShuffler(heading, isInView, 70);
  const shuffledPara1 = useShuffler(para1, isInView, 20);
  const shuffledPara2 = useShuffler(para2, isInView, 20);

  return (
    <div ref={ref} className="py-[6%] px-4 sm:px-6 md:px-[5%]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Animated Heading */}
        <h1
          className="uppercase text-transparent font-[500] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[90px] leading-tight tracking-tighter whitespace-pre-line"
          style={{ WebkitTextStroke: "1px #4b4b4b" }}
        >
          {shuffledHeading}
        </h1>

        {/* Animated Paragraphs */}
        <div className="text-white font-[300] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.7] lg:max-w-[699px] tracking-tighter whitespace-pre-line">
          <p>{shuffledPara1}</p>
          <p className="mt-4">{shuffledPara2}</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
