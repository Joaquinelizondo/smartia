import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

import ecoLogo from "/src/assets/eco.png";

const Main = () => {
  const { t } = useTranslation();
  const solutions = t("solutions.items", { returnObjects: true });

  const customers = [
    { name: "Eco", logo: ecoLogo, url: "https://www.eco.com" },
  ];

  return (
    <>
      {/* 🔹 Soluciones */}
      <div className="solutions-container" id="solutions">
        <h2>{t("solutions.title")}</h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-box">
              <h5>{solution.title}</h5>
              <p>{solution.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Clientes */}
      <div className="solutions-container">
        <h2>{t("solutions.customers")}</h2>
        <div className="solutions-grid">
          {customers.map((customer, index) => (
            <a
              key={index}
              href={customer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="customer-box"
            >
              <img src={customer.logo} alt={customer.name} className="customer-logo" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
