import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Banner from "../components/home/Banner";
import Collabs from "../components/home/Collabs";
// import ExploreBtn from "../components/home/ExploreBtn";
import Services from "../components/home/Services";
import Testimony from "../components/home/Testimony";
import WhyUs from "../components/home/WhyUs";
import Works from "../components/home/Works";

const Home = () => {
  return (
    <div className="bg-[#151515] relative">
      <Banner />
      <Collabs />
      <div
        className="relative py-10 px-4 sm:px-[8%] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/home/homeSecBg.jpg")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Content */}
        <div className="relative z-20">
          <Services />

          <div className="bg-white/40 h-px w-full my-20" />

          <Works />
          {/* <ExploreBtn /> */}
        </div>
      </div>

      {/* WhyUs with overlapping icon */}
      <div className="relative">
        <WhyUs />

        {/* Floating quote icon - responsive positioning */}
        <div
          className="absolute 
      top-[56%] sm:top-[42%] md:top-[44%] lg:top-[48%] 
      left-[5%] sm:left-[6%] md:left-[7%] 
      z-30 opacity-20 hover:opacity-30 transition-opacity duration-300"
        >
          <BiSolidQuoteAltLeft
            className="text-white 
        w-[300px] xs:w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300px]"
            size="100%"
          />
        </div>

        <Testimony />
      </div>
    </div>
  );
};

export default Home;
