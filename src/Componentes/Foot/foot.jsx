import React from 'react';
import './index.css';
import profileImage1 from '../../assets/smartia.png';

const Foot = () => {
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
            <a
              href="https://www.linkedin.com/company/96257599/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/joaquinelizondo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/joaquinelizondo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/joaquinelizondo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sales@smartialab.com</p>
          <p>Phone: +598 99 213 300</p>
        </div>
      </div>
      {/* Imagen debajo de los tres elementos */}
      <div className="footer-image-container">
        <img
          src={profileImage1}
          alt="Smartiia logo"
          className="profile-image1"
        />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Smartialab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;
