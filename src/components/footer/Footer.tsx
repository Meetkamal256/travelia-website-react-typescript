import "./footer.css";
import footerLogo from "../../assets/logo.svg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__1">
          <a href="#" className="footer__logo">
            <img src={footerLogo} alt="footer logo" />
          </a>
          <p className="footer__text">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#" className="social__link">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="social__link">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__2">
          <p className="footer__title">About</p>
          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                News
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Menu
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__3">
          <p className="footer__title">Company</p>
          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                Why Company
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__4">
          <p className="footer__title">Support</p>
          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__5">
          <p className="footer__title">Get In Touch</p>
          <p className="footer__text">
            Question or feedback? We’d love to hear from you.
          </p>
          <form action="" className="input__wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Email Address"
              autoComplete="off"
              required
              className="input__field"
            />
            <button type="submit" className="input__btn">
              <CiPaperplane />
            </button>
          </form>
        </div>

        <div className="copyright">
          <p className="copyright__text">
            Copyright 2023 &copy; Travelia Website.
          </p>
          <ul className="copyright__list">
            <li>
              <a href="#" className="copyright__link">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="copyright__link">
                Privacy and Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
