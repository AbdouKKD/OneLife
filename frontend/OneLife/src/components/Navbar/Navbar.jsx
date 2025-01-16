import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/about-us">About Us</a></li>
      <li><a href="/how-it-works">How It Works</a></li>
      <li><a href="/items">Services Available</a></li>
    </ul>
  </nav>
);

export default Navbar;