import React from "react";
import "./index.css";

const plans = [
  {
    title: "SmartIA Basic",
    description: "Ideal for entrepreneurs or teams starting with an agent",
    items: [
      "Up to 500 monthly sessions",
      "1 integration channel (web or WhatsApp)",
      "Design of up to 5 frequently asked questions",
      "Support via email or WhatsApp",
    ],
    icon: "💡",
  },
  {
    title: "SmartIA Plus",
    description: "Designed for shops, medical centers, and SMEs looking to automate customer service",
    items: [
      "Up to 2,000 monthly sessions",
      "Web + WhatsApp integration",
      "Automated responses",
      "Data capture",
      "Customization of up to 5 flows",
      "Support via email or WhatsApp",
    ],
    icon: "🚀",
  },
  {
    title: "SmartIA Ultra",
    description: "Designed for companies with high demand for inquiries or 24/7 service",
    items: [
      "Up to 10,000 monthly sessions",
      "Integrations with CRMs, ERPs, or ecommerce",
      "Unlimited personalized automated responses",
      "Advanced flows",
      "Data capture",
      "Personalized support",
      "Metrics dashboard",
    ],
    icon: "⚙️",
  },
  {
    title: "SmartIA Business",
    description: "Custom-made solution for companies seeking unlimited development",
    items: [
      "Unlimited monthly sessions",
      "Custom integrations as needed",
      "Unlimited response automation",
      "Development of fully customized flows",
      "Premium 24/7 support",
    ],
    icon: "🧠",
  },
];

const Plans = () => {
  return (
    <div className="plans-wrapper" id="plans">
      <h1 className="plans-title">Our Plans</h1>
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
