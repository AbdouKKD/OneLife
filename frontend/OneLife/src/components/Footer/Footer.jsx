import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} TeleHealth. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/how-it-works">How It Works</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

