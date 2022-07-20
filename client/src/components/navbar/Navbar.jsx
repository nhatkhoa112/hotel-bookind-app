import "./navbar.css";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.png'
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo" style={{ color: "inherit", textDecoration: "none" }}>
          <img className="logo_img" style={{width: "35px", height: "40px"}} src={logo} alt="" />
          <span className="logo_text"><strong>KohakuRNB</strong></span>
        </Link>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
