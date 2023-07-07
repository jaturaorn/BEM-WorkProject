import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../component/Navbar.jsx";
import NavbarTop from "../component/NavbarTop.jsx";
import Carousel from "../component/Carousel.jsx";
import Hero from "../component/Hero.jsx";
import FillData from "../component/FillData.jsx";
import Jum1 from "../component/Jum1.jsx";
import Carding from "../component/Carding.jsx";
import CardCarousel from "../component/CardCarousel.jsx";
import FooterImage from "../component/FooterImage.jsx";
import Contact from "../component/Contact.jsx";
import FooterTop from "../component/FooterTop.jsx";
import Footer from "../component/Footer.jsx";
import "./App.css";
function App() {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Carousel />
      <Hero />
      <FillData />
      <Jum1 />
      <Carding />
      <CardCarousel />
      <FooterImage />
      <Contact />
      <FooterTop />
      <Footer />
    </>
  );
}

export default App;
