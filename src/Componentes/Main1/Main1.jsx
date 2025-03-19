import React from "react";
import "./index.css"; 
import fotoMain from "../../assets/fotom.jpeg";

const Main1 = () => {
  return (
    <div className="container">
      {/* 📌 Imagen dentro de un div para asegurar tamaño y forma */}
      <div className="image-container">
        <div className="image-wrapper">
          <img src={fotoMain} alt="Smartialab AI Solutions" />
        </div>
      </div>

      {/* 📌 Contenedor del texto */}
      <div className="text-container">
        <h2 className="title_main1">Smartialab: AI Solutions for Business Growth</h2>
        <p className="text_main1">
          At Smartialab, we harness the power of Artificial Intelligence to transform the way businesses interact with their customers. Our intelligent agents provide personalized recommendations, seamless interactions, and valuable business insights, optimizing marketing strategies and improving customer experiences.
        </p>
        <p className="text_main1">
          By leveraging Natural Language Processing (NLP), Data Analytics, and AI-driven automation, we help businesses enhance efficiency, drive engagement, and scale globally. Whether you're a small business or a large enterprise, Smartialab empowers you with the technology needed to stay ahead in the digital market.
        </p>
      </div>
    </div>
  );
};

export default Main1;
