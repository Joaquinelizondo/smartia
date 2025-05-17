import React, { useState } from "react";
import "./index.css";

const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-link">
          <img src="/smartia.png" alt="Smartialab Logo" className="logo-img" />
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#plans">Our Plans</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigator;

