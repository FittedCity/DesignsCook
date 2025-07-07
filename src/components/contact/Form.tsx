// components/contact/Form.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Form = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className="w-full lg:w-[833px] border border-[#FFFFFF73] text-white rounded-[8px] p-[5%]"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-normal text-[40px] lg:text-[55px] leading-tight tracking-tight">
          Let&apos;s start
        </h1>
        <p className="font-normal text-[20px] lg:text-[24px] leading-[39px]">
          Please feel free to shoot us a message and we will be in touch shortly.
        </p>
      </div>

      <form className="py-14 flex flex-col gap-14">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[328px] flex flex-col gap-5">
            <label className="text-[20px]">First Name</label>
            <input
              type="text"
              className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg"
            />
          </div>
          <div className="w-full lg:w-[328px] flex flex-col gap-5">
            <label className="text-[20px]">Last Name</label>
            <input
              type="text"
              className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[20px]">Email Address</label>
          <input
            type="email"
            className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[20px]">Message</label>
          <textarea
            className="bg-transparent border rounded-[44px] border-white w-full py-4 px-4 text-lg h-[260px]"
            style={{ boxShadow: "0px 20.8px #0000001A" }}
          />
        </div>

        <button className="rounded-full w-full bg-white text-[#151515] py-5 text-[20px] lg:text-[24px] font-medium">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
