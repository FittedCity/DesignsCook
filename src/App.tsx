import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import About from "./pages/About";
import Works from "./pages/Works";
import Footer from "./components/layouts/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./ScrollToHash";
import Rendering from "./pages/Rendering";
import Animate from "./pages/Animate";
import ProductDesign from "./pages/ProductDesign";
import Marketing from "./pages/Marketing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/rendering" element={<Rendering />} />
          <Route path="/works/3d-animation" element={<Animate />} />
          <Route path="/works/product-design" element={<ProductDesign />} />
          <Route path="/works/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1>FittedCity</h1> */}
    </div>
  );
}

export default App;
