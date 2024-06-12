import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo-vertical.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/" className="nav-logo">
      <img
        id="footer-logo"
        className="footer-logo"
        alt="Little Lemon logo"
        src={Logo}
      />
      </Link>
      <div className="footer-nav">
        <ul>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/reservations" className="nav-item">
          Reservations
        </Link>
        <Link to="/order-online" className="nav-item">
          Order Online
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
          <li>info@little-lemon.com</li>
          <li>+44 1234 567890</li>
          <li>1 Fake Street</li>
          <li>London</li>
          <li>N1 1AA</li>
        </ul>
      </div>
      <div className="footer-nav">
        <ul>
        <Link to="https://instagram.com"target="_blank" className="nav-item">
          Instagram
        </Link>
        <Link to="https://facebook.com"target="_blank" className="nav-item">
          Facebook
        </Link>
        </ul>
      </div>
      <br/>
    </div>
  );
};

export default Footer;
