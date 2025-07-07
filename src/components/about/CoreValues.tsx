import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CoreValues = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <div
      className="px-4 sm:px-6 md:px-[5%] py-10 sm:py-14 md:py-[4%]"
      ref={ref}
    >
      <motion.h1
        className="text-center font-[400] text-[48px] xs:text-[60px] sm:text-[72px] md:text-[90px] leading-[1.2] sm:leading-[1.3] md:leading-[124px] tracking-tight text-transparent"
        style={{ WebkitTextStroke: "1px #4b4b4b" }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Our Core Values
      </motion.h1>

      <div className="relative flex items-center justify-center mt-10 md:mt-14 rounded-[12px] overflow-hidden min-h-[800px] md:min-h-[693px]">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(132,132,132,0.07), #202020),
              url(/assets/about/values_img.jpg)
            `,
          }}
        />

        {/* Mobile & Tablet Layout */}
        <div className="my-[3%] relative z-10 flex flex-col md:hidden items-center justify-center gap-4 p-4">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <ValueCard title={val.title} content={val.content} />
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-end h-full relative z-10">
          <div className="relative right-[-20px]">
            {" "}
            {/* <-- right offset here */}
            <div className="flex flex-col gap-6 lg:gap-10">
              {/* First Row */}
              <div className="flex justify-end gap-5 lg:gap-[20px]">
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <ValueCard
                      title={coreValues[i].title}
                      content={coreValues[i].content}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex justify-end gap-5 lg:gap-[20px] flex-wrap">
                {[2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    <ValueCard
                      title={coreValues[i].title}
                      content={coreValues[i].content}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ title, content }: { title: string; content: string }) => (
  <div className="w-full md:w-[280px] lg:w-[350px] min-h-[180px] md:h-[225px] bg-[#1E1E1E] text-white p-5 md:p-6 rounded-[8px]">
    <h3 className="uppercase text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-snug font-[500] tracking-tight">
      {title}
    </h3>
    <p className="mt-3 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[300] leading-[1.5]">
      {content}
    </p>
  </div>
);

const coreValues = [
  {
    title: "Creativity with Purpose",
    content:
      "We believe that every image we create must do more than look good; it must tell a story, solve a problem, or inspire action.",
  },
  {
    title: "Clarity Through Visualization",
    content:
      "We transform complex ideas into visuals that are clear, impactful, and easy to understand, helping clients communicate with confidence.",
  },
  {
    title: "Excellence in Execution",
    content:
      "From concept to final render, we hold ourselves to the highest standards of quality, precision, and detail.",
  },
  {
    title: "Integrity and Trust",
    content:
      "We build lasting relationships by being transparent, reliable, and consistently delivering on our promises.",
  },
  {
    title: "Bridging Vision and Reality",
    content:
      "Our goal is to make the unseen seen, helping ideas move from imagination to implementation through compelling visual storytelling.",
  },
];

export default CoreValues;
