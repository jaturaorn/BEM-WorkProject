import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../component/Navbar.jsx";
import NavbarTop from "../component/NavbarTop.jsx";
import Carousel from "../component/Carousel.jsx";
import Hero from "../component/Hero.jsx";
import FillData from "../component/FillData.jsx";
import Jum1 from "../component/Jum1.jsx";
import Carding from "../component/Carding.jsx";
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
    </>
  );
}

export default App;