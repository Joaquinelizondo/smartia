import React from "react";
import "./index.css";
import logo1 from "../../assets/personai2.jpg";
import fotom from "../../assets/personai.jpg";
import fotom1 from "../../assets/personai3.jpg";

const Header = ({ openContactModal }) => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content-left">
        <h1>
          All-in-one AI Conversational Platform for <span className="highlight">Businesses</span>
        </h1>
        <p className="subtext">
          Engagement, automation, and intelligence in every customer interaction — powered by conversational AI.
        </p>
        <div className="button-group">
          <a href="#solutions" className="btn-primary">View Solutions</a>
          <button className="btn-secondary" onClick={openContactModal}>Contact Us</button>
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
