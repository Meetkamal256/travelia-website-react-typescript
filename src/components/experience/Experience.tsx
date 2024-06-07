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
            width="550"
            height="660"
          />
          <img
            src={expShape}
            alt="exp shape"
            className="exp__shape"
            width="75"
            height="109"
          />
        </figure>
        
        <div className="exp__content">
          <p className="section__subtitle">Our Experience</p>
          <h2 className="section__title title">
            With Our Experience We Will Serve You
          </h2>
          <p className="section__text">
            Since we first opened we have always prioritized the convenience of
            our users by providing low prices and with a easy process.
          </p>
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
              <h3 className="item__title">50k+</h3>
              <p className="item__text">
                Happy <br /> Customer
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
