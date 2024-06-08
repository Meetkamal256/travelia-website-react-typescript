import { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(false);
  
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="" width="187" height="38" />
        </div>
        
        <ul className="nav__items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#destination">Pricing</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
