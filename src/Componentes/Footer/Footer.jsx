import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./index.css"; // ✅ Asegurar que el CSS esté bien importado

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            Empowering businesses with intelligent automation. Experts in Chatbots, 
            Artificial Intelligence, and creating personalized customer experiences.
          </p>
        </div>

        {/* Follow Us */}
        <div className="footer-section follow">
          <h4>Follow Us</h4>
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
          <h4>Contact Us</h4>
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
