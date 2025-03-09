import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Renombrado para más claridad

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Sección About Us */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Empowering businesses with intelligent automation. Experts in Chatbots, 
            Artificial Intelligence, and creating personalized customer experiences.
          </p>
        </div>

        {/* 🔹 Sección Follow Us */}
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/96257599/" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="LinkedIn">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://instagram.com/smartialab" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Instagram">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        {/* 🔹 Sección Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@smartialab.com</p>
          <p>Phone: +598 99 213 300</p>
        </div>
      </div>

      {/* 🔹 Parte Inferior del Footer */}
      <div className="footer-bottom">
        <p>&copy; 2025 Smartialab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
