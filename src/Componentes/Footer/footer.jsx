import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; // Estilos de AOS
import AOS from 'aos';
import './index.css';

const Footer = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      offset: 200, // Desplazamiento antes de activar la animación
      once: true, // La animación se ejecutará solo una vez
    });
  }, []);

  const projects = [
    {
      title: 'Interaction',
      details: {
        title: 'Interaction',
        objectives: 'The chatbot provides a friendly and natural conversational interface, allowing users to ask about products, explore different categories, and receive recommendations based on their preferences and shopping habits.',
      },
    },
    {
      title: 'Data Generation through Interaction',
      details: {
        title: 'Data Generation through Interaction',
        objectives: 'The chatbot analyzes users, questions and answers, preferences, and shopping patterns. This data will be used to improve recommendations, offer more suitable products, and generate consumption profiles for partner businesses.',
      },
    },
    {
      title: 'Promotions',
      details: {
        title: 'Promotions',
        objectives: 'Partner businesses will be able to launch promotional campaigns through the chatbot. The promotions will be personalized and presented based on the users previous interests and shopping behaviors, maximizing the likelihood of conversion.',
      },
    },
    {
      title: 'Personalized Recommendations',
      details: {
        title: 'Personalized Recommendations',
        objectives: 'Based on interaction and purchase history, the chatbot offers specific product recommendations that might interest the user. These recommendations will be optimized through an artificial intelligence system that learns from each interaction.',
      },
    
    },
  ];

  const handleViewMore = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="footer-container">
      <h1 data-aos="fade-up">Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-slide"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleViewMore(project)}>Ver más</button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{activeProject.details.name}</h2>
            <p><strong>Title:</strong> {activeProject.details.title}</p>
            <p><strong>Objectives:</strong> {activeProject.details.objectives}</p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      <div>
      </div>
    </div>
  );
};

export default Footer;
