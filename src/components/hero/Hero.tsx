import "./hero.css";
import heroIcon from "../../assets/title-icon.svg";
import heroBtnImg from "../../assets/hero-button-img.jpg";
import heroBanner from "../../assets/hero-banner.png";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">
            Explore the world <img src={heroIcon} alt="world icon" />
          </p>
          <h1 className="hero__title">
            It's a Big World Out There, Go Explore
          </h1>
          <p className="hero__text">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="wrapper">
            <a href="#" className="btn btn-secondary">
              <span className="span">Plan a Trip</span>
              <IoChevronForwardOutline />
            </a>
            <button className="hero__btn">
              <div className="btn__img">
                <img src={heroBtnImg} alt="our story" />
                <FaPlay />
              </div>
              <p>Watch Our Story</p>
            </button>
          </div>
        </div>

        <figure className="hero__banner">
          <img src={heroBanner} alt="hero banner" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
