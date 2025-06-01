import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const Plans = ({ openContactModalWithPlan }) => {
  const { t } = useTranslation();

  const plans = [
    {
      key: "basic",
      title: t("plans.basic.title"),
      description: t("plans.basic.description"),
      items: t("plans.basic.items", { returnObjects: true }),
      icon: "💡",
    },
    {
      key: "plus",
      title: t("plans.plus.title"),
      description: t("plans.plus.description"),
      items: t("plans.plus.items", { returnObjects: true }),
      icon: "🚀",
    },
    {
      key: "ultra",
      title: t("plans.ultra.title"),
      description: t("plans.ultra.description"),
      items: t("plans.ultra.items", { returnObjects: true }),
      icon: "⚙️",
    },
    {
      key: "business",
      title: t("plans.business.title"),
      description: t("plans.business.description"),
      items: t("plans.business.items", { returnObjects: true }),
      icon: "🧠",
    },
  ];

  return (
    <div className="plans-wrapper" id="plans">
      <h1 className="plans-title">{t("plans.title")}</h1>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card plan-${index}`}>
            <div className="plan-content">
              <div className="plan-icon">{plan.icon}</div>
              <h2 className="plan-title">{plan.title}</h2>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-items">
                {plan.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <button
              className="plan-button"
              onClick={() => openContactModalWithPlan(plan.title)}
            >
              {t("plans.button")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
