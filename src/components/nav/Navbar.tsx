import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNavbar = () => {
    setIsNavShowing(false);
  };

  return (
    <nav className={isScrolled ? "active" : ""}>
      <div className="container nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="" width="187" height="38" />
        </div>

        <ul className="nav__items">
          <li>
            <Link to="hero" smooth={true} offset={-150} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-150} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="destination" smooth={true} offset={-150} duration={500}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} offset={-150} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav__signin-signup">
          <a href="#" className="btn btn-primary">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Signup
          </a>
        </div>

        {/* Hamburger button */}
        <button
          id="menu-btn"
          className={`hamburger ${isNavShowing ? "open" : ""}`}
          type="button"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile menu */}
        <div className={`mobile__menu ${isNavShowing ? "open " : ""}`}>
          <div className="mobile-nav__logo">
            <img src={Logo} alt="" width="187" height="38" />
          </div>
          <ul className="mobile-nav__items">
            <li>
              <Link
                to="hero"
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeNavbar}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="destination"
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeNavbar}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="footer"
                smooth={true}
                offset={800}
                duration={500}
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="mobile-nav__signin-signup">
            <a href="#" className="btn btn-primary">
              Login
            </a>
            <a href="#" className="btn btn-primary">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
