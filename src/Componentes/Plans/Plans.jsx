import React from "react";
import "./index.css";

const plans = [
  {
    title: "SmartIA Basic",
    description: "Ideal para emprendedores o equipos que están comenzando con un agente",
    items: [
      "Hasta 500 sesiones mensuales",
      "1 canal de integración (web o WhatsApp)",
      "Diseño de hasta 5 preguntas frecuentes",
      "Soporte via mail o WhatsApp",
    ],
    icon: "💡",
  },
  {
    title: "SmartIA Plus",
    description: "Pensado para tiendas, centros médicos y pymes que quieren automatizar su atención",
    items: [
      "Hasta 2.000 sesiones mensuales",
      "Integración web + WhatsApp",
      "Automatización de respuestas",
      "Captación de datos",
      "Personalización de hasta 5 flujos",
      "Soporte via mail o WhatsApp",
    ],
    icon: "🚀",
  },
  {
    title: "SmartIA Ultra",
    description: "Diseñado para empresas con alta demanda de consultas o atención 24/7",
    items: [
      "Hasta 10.000 sesiones mensuales",
      "Integraciones con CRM, ERPs o ecommerce",
      "Automatización de respuestas personalizadas sin límite",
      "Flujos avanzados",
      "Captación de datos",
      "Soporte personalizado",
      "Dashboard de métricas",
    ],
    icon: "⚙️",
  },
  {
    title: "SmartIA Business",
    description: "Solución hecha a medida para empresas que buscan un desarrollo sin límites",
    items: [
      "Sesiones mensuales ilimitadas",
      "Integraciones a medida según necesidad",
      "Automatización de respuestas ilimitada",
      "Desarrollo de flujos personalizados sin restricción",
      "Soporte premium 24/7",
    ],
    icon: "🧠",
  },
];

const Plans = () => {
  return (
    <div className="plans-wrapper">
      <h1 className="plans-title">Our Plans</h1> {/* 👈 Título agregado */}
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-icon">{plan.icon}</div>
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-items">
              {plan.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
