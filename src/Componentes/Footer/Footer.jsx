import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./index.css"; // Asegurar la importación correcta del CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Empowering businesses with intelligent automation. Experts in Chatbots, 
            Artificial Intelligence, and creating personalized customer experiences.
          </p>
        </div>

        {/* Follow Us */}
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/96257599/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://instagram.com/smartialab" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@smartialab.com</p>
          <p>Phone: +598 99 213 300</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Smartialab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
