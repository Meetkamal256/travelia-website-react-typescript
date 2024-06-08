<p className="section__subtitle">What we Serve</p>;
import "./service.css";
import { serviceList } from "../../data";

const Service = () => {
  return (
    <section id="service">
      <div className="container service__container">
        <div className="title__wrapper">
          <h2 className="title section__title">Top Values For You</h2>
          <p className="section__text">
            Try a variety of benefits when using our services.
          </p>
        </div>
        {serviceList.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <div className="service__card" key={id}>
              <div className="card__icon">
                <img
                  src={icon}
                  alt="icon"
                  width="60"
                  height="60"
                  loading="lazy"
                />
              </div>
              <h3 className="title card__title">{title}</h3>
              <p className="card__text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
