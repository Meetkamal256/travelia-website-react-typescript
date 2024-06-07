import "./experience.css";
import expBanner from "../../assets/experience-banner.png";
import expShape from "../../assets/exp-shape.svg";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <figure className="exp__banner">
          <img
            src={expBanner}
            alt="exp banner"
            loading="lazy"
            className="w-100"
          />
          <img src={expShape} alt="exp shape" className="exp-shape" />
        </figure>

        <div className="exp__content">
          <p className="section__subtitle">Our Experience</p>
          <h2 className="section__title title">
            With Our Experience We Will Serve You
          </h2>
          Since we first opened we have always prioritized the convenience of
          our users by providing low prices and with a easy process.
          <p className="section__text"></p>
        </div>
        <ul className="exp__list">
          <li>
            <h3 className="item__title">20</h3>
            <p className="item__text">
              Years <br /> Experience
            </p>
          </li>
          <li>
            <h3 className="item__title">460+</h3>
            <p className="item__text">
              Destination <br /> Collaboration
            </p>
          </li>
          <li>
            <h3 className="item__title">60+</h3>
            <p className="item__text">
              Happy <br /> Customer
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
