import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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

        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>

        <button id="menu-btn">
          <IoMdClose />
        </button>
        <button id="menu-btn">
          <MdOutlineMenu />
        </button>
      </div>
    </nav>
  );
};

export default Header;
