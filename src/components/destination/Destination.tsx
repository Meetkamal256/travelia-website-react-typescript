import "./destination.css";
import { destinationList } from "../../data";
import { FaRegStar } from "react-icons/fa";

const Destination = () => {
  return (
    <section id="destination">
      <div className="container destination__container">
        <p className="section__subtitle">Top Destination</p>
        <h2 className="section__title title">Explore Top Destination</h2>
        <div className="desti__list">
          {destinationList.map((list) => {
            const { id, image, price, title, address, review, rating } = list;
            return (
              <div className="desti__card" key={id}>
                <div
                  className="card__banner img-holder"
                  style={
                    {
                      "--width": "600px",
                      "--height": "650px",
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="img-cover"
                  />
                  <span className="card__price">{price}</span>
                </div>
                <div className="card__content">
                  <h3 className="title card__title">
                    <a href="">{title}</a>
                  </h3>
                  <address className="card__text">{address}</address>
                  <div className="card__rating">
                    <span className="span">{review}</span>
                    <p className="rating__text">
                      <FaRegStar /> {rating}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destination;
