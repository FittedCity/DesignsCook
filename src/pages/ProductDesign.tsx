import Gallery from "../components/product-design/Gallery"
import Banner from "../components/reuseable/Banner"
import Cta from "../components/reuseable/Cta"
import Navigation from "../components/reuseable/Navigation"

const ProductDesign = () => {
  return (
     <>
      <div className="bg-[#151515] px-4 sm:px-6 md:px-[5%]">
        <div className="sm:pt-56 pt-28">
          <Banner
            title="Product Design"
            backgroundVideo="/assets/product-design/product-banner.mp4"
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
  )
}

export default ProductDesign