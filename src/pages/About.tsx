import Banner from "../components/about/Banner"
import CoreValues from "../components/about/CoreValues"
import Gallery from "../components/about/Gallery"
import Images from "../components/about/Images"
import Mission from "../components/about/Mission"
import OurStory from "../components/about/OurStory"

const About = () => {
  return (
    <div className="bg-[#191919]">
        <Banner />
        <OurStory />
        <Images />
        <Mission />
        <Gallery />
        <CoreValues />
    </div>
  )
}

export default About