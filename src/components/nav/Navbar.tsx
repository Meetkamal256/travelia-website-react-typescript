import "./navbar.css";
import Logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="nav__items">
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
      </div>
    </nav>
  );
};

export default Header;
