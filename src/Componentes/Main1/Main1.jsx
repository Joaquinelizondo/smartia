import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import fotoMain from "/src/assets/fotom.jpeg";

const Main1 = () => {
  const { t } = useTranslation();

  return (
    <div className="main1-container">
      {/* 📌 Imagen con borde difuminado */}
      <div className="image-container">
        <div className="image-wrapper">
          <img src={fotoMain} alt="Smartialab AI Solutions" />
        </div>
      </div>

      {/* 📌 Contenedor del texto */}
      <div className="text-container">
        <h2 className="title_main1">{t("main1.title")}</h2>
        <p className="text_main1">{t("main1.paragraph1")}</p>
        <p className="text_main1">{t("main1.paragraph2")}</p>
      </div>
    </div>
  );
};

export default Main1;
