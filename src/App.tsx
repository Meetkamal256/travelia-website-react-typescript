import CTA from "./components/cta/CTA";
import Destination from "./components/destination/Destination";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import Preloader from "./components/preloader/Preloader";
import Service from "./components/service/Service";
import "./index.css";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Service />
      <Destination />
      <Experience />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
