import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import './index.css';
import profileImage1 from '../../assets/smartia.png';


const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Empowering businesses with intelligent automation. Experts in Chatbots, Artificial Intelligence, and creating personalized customer experiences.
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/96257599/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a> */}
            <a href="https://instagram.com/smartialab" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@smartialab.com</p>
          <p>Phone: +598 99 213 300</p>
        </div>
      </div>

      {/* Imagen debajo de los tres elementos */}
      <div className="footer-image-container">
        <img src={profileImage1} alt="Smartia logo" className="profile-image1" />
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Smartialab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
