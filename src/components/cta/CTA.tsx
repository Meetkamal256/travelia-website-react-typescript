import "./cta.css";
import worldIcon from "../../assets/title-icon.svg";

const CTA = () => {
  return (
    <section id="cta">
      <div className="container cta__container">
        <div className="cta__card">
          <h2 className="section__title title">
            Prepare Yourself & Let’s Explore The Beauty Of The World
            <img
              src={worldIcon}
              alt="world icon"
              width="36"
              height="36"
              loading="lazy"
            />
          </h2>
          <p className="section__text">
            We have many special offers especially for you.
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
