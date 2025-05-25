import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo-link">
          <img src="/smartia.png" alt="Smartialab Logo" className="logo-img" />
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about">{t("navbar.about")}</a></li>
          <li><a href="#solutions">{t("navbar.solutions")}</a></li>
          <li><a href="#plans">{t("navbar.plans")}</a></li>
          <li><a href="#contact">{t("navbar.contact")}</a></li>
          <li className="lang-buttons">
            <button onClick={() => i18n.changeLanguage("es")} className="lang-btn">ES</button>
            <button onClick={() => i18n.changeLanguage("en")} className="lang-btn">EN</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigator;
