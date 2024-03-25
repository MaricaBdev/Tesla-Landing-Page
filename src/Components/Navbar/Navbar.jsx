import "./Navbar.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};
