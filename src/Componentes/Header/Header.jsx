import React from "react";
import "./index.css";
import logo1 from "../../assets/personai2.jpg";
import fotom from "../../assets/personai.jpg";
import fotom1 from "../../assets/personai3.jpg";
import { useTranslation } from "react-i18next";

const Header = ({ openContactModal }) => {
  const { t } = useTranslation();

  return (
    <div className="hero-section" id="home">
      <div className="hero-content-left">
        <h1>
          {t("hero.title")} <span className="highlight">{t("hero.highlight")}</span>
        </h1>
        <p className="subtext">{t("hero.subtitle")}</p>
        <div className="button-group">
          <a href="#solutions" className="btn-primary">
            {t("hero.viewSolutions")}
          </a>
          <button className="btn-secondary" onClick={openContactModal}>
            {t("hero.contact")}
          </button>
        </div>
      </div>

      <div className="hero-content-right">
        <div className="image-collage">
          <img src={logo1} alt="AI screen 1" className="img-front" />
          <img src={fotom1} alt="AI screen 2" className="img-back-left" />
          <img src={fotom} alt="AI screen 3" className="img-back-right" />
        </div>
      </div>
    </div>
  );
};

export default Header;

