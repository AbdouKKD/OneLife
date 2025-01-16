import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => (
  <header className="header-container">
    <div className="logo">
      <h1>OneLife</h1>
    </div>
    <Navbar />
  </header>
);

export default Header;