import Cta from "../components/reuseable/Cta";
import Navigation from "../components/reuseable/Navigation";
import Banner from "../components/reuseable/Banner";
import Gallery from "../components/works/Gallery";
import TheProcess from "../components/works/TheProcess";

import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Works = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <>
      <div className="bg-[#151515] px-4 sm:px-6 md:px-[5%]">
        <div className="sm:pt-56 pt-28">
          <Banner
            title="Our Work"
            backgroundVideo="/assets/works/works-banner.mp4"
          />
        </div>
        <Navigation />
        <div className="py-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.6, ease: easeInOut }}
            className="w-full h-[243px] bg-cover bg-center rounded-[8px]"
            style={{ backgroundImage: "url(/assets/works/work-image.jpg)" }}
          />
        </div>
        <TheProcess />
        <Gallery />
      </div>
      <Cta
        title="Ready to Visualize Your Project?"
        buttonText="Let's Talk"
        onClick={() => console.log("CTA button clicked!")}
      />
    </>
  );
};

export default Works;
