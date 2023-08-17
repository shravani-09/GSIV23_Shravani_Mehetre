import { Link } from "react-router-dom";
import logo from "../../Images/logo192.png";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="logo-image">
        <img src={logo} alt="user" />
      </div>
    </div>
  );
}

export default Header;
