import Gallery from "../components/rendering/Gallery";
import Banner from "../components/reuseable/Banner";
import Cta from "../components/reuseable/Cta";
import Navigation from "../components/reuseable/Navigation";

const Rendering = () => {
  return (
    <>
      <div className="bg-[#151515] px-4 sm:px-6 md:px-[5%]">
        <div className="sm:pt-56 pt-28">
          <Banner
            title="Rendering"
            backgroundImage="/assets/rendering/rendering-banner.jpg"
          />
        </div>
        <Navigation />
        <Gallery />
      </div>
      <Cta
        title="Want Something Like This? Let&apos;s Create It."
        buttonText="Let's Talk"
        onClick={() => console.log("CTA button clicked!")}
      />
    </>
  );
};

export default Rendering;
