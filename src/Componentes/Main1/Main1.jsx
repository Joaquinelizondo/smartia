import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css"; // Cambia el import al nuevo estilo
import fotoMain from "/src/assets/icon3.jpg";
import fotoSide from "/src/assets/icon4.png";

const Main1 = () => {
  const { t } = useTranslation();

  return (
    <div className="main1-wrapper-modern">
      <div className="main1-content-box fade-in">
        <div className="main1-top">
          <img src={fotoMain} alt="Smartialab AI Solutions" className="main1-avatar" />
          <h2 className="main1-title">{t("main1.title")}</h2>
        </div>
        <p className="main1-paragraph">{t("main1.paragraph1")}</p>
        <p className="main1-paragraph">{t("main1.paragraph2")}</p>
      </div>

      <div className="main1-floating-img">
        <img src={fotoSide} alt="AI Concept" loading="lazy" />
      </div>
    </div>
  );
};

export default Main1;
