import React from 'react';
import './index.css';

// Importar logos de clientes
import ecoLogo from "../../assets/eco.png";


const solutions = [
  {
    title: 'Interaction',
    objectives: 'The chatbot provides a friendly and natural conversational interface, allowing users to ask about products, explore different categories, and receive recommendations based on their preferences and shopping habits.',
  },
  {
    title: 'Data Generation through Interaction',
    objectives: 'The chatbot analyzes users, questions and answers, preferences, and shopping patterns. This data will be used to improve recommendations, offer more suitable products, and generate consumption profiles for partner businesses.',
  },
  {
    title: 'Promotions',
    objectives: 'Partner businesses will be able to launch promotional campaigns through the chatbot. The promotions will be personalized and presented based on the users’ previous interests and shopping behaviors, maximizing the likelihood of conversion.',
  },
  {
    title: 'Personalized Recommendations',
    objectives: 'Based on interaction and purchase history, the chatbot offers specific product recommendations that might interest the user. These recommendations will be optimized through an artificial intelligence system that learns from each interaction.',
  },
];

const customers = [
  { name: 'Eco', logo: ecoLogo, url: 'https://www.eco.com' },
];

const Main = () => {
  return (
    <>
      {/* 🔹 Sección Solutions */}
      <div className="solutions-container">
        <h2>Solutions</h2>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-box">
              <h5>{solution.title}</h5>
              <p>{solution.objectives}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Sección Our Customers */}
      <div className="solutions-container">  {/* Manteniendo los estilos de solutions-container */}
        <h2>Our Customers</h2>
        <div className="solutions-grid">  {/* Manteniendo la misma clase para diseño uniforme */}
          {customers.map((customer, index) => (
            <a key={index} href={customer.url} target="_blank" rel="noopener noreferrer" className="customer-box">
              <img src={customer.logo} alt={customer.name} className="customer-logo" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
