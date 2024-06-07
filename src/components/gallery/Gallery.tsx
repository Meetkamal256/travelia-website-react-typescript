import "./gallery.css";
import galleryImg1 from "../../assets/gallery-1.jpg";
import galleryImg2 from "../../assets/gallery-2.jpg";
import galleryImg3 from "../../assets/gallery-3.jpg";
import galleryImg4 from "../../assets/gallery-4.jpg";
import galleryImg5 from "../../assets/gallery-5.jpg";
import galleryImg6 from "../../assets/gallery-6.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container gallery__container">
        <p className="section__subtitle">PHOTO GALLERY</p>
        <h2 className="section__title">Photo's From Travelers</h2>
        <ul className="gallery-list">
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "378px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg1}
                alt="gallery"
                loading="lazy"
                width="700"
                height="925"
                className="img-cover"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "925px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg2}
                alt="gallery"
                loading="lazy"
                width="700"
                height="925"
                className="img-cover"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "840px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg3}
                alt="gallery"
                loading="lazy"
                width="700"
                height="840"
                className="img-cover"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "378px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg4}
                alt="gallery"
                loading="lazy"
                width="700"
                height="378"
                className="img-cover"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "378px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg5}
                alt="gallery"
                loading="lazy"
                width="700"
                height="378"
                className="img-cover"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                {
                  "--width": "700px",
                  "--height": "378px",
                } as React.CSSProperties
              }
            >
              <img
                src={galleryImg6}
                alt="gallery"
                loading="lazy"
                width="700"
                height="378"
                className="img-cover"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
