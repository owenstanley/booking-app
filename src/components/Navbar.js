import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src={Logo} width="200" alt="Little Lemon logo"></img>
        </Link>
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
        <Link to="/order" className="nav-item">
          Order Online
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
