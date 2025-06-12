import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section about">
          <h4>{t("footer.about")}</h4>
          <p>{t("footer.aboutText")}</p>
        </div>

        {/* Follow Us */}
        <div className="footer-section follow">
          <h4>{t("footer.follow")}</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/96257599/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://instagram.com/smartialab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://x.com/smartialab"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M939 0L582 490 228 0H0l426 620L0 1227h228l348-500 349 500h228L774 618 1200 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h4>{t("footer.contact")}</h4>
          <p>{t("footer.email")}: info@smartialab.com</p>
          <p>{t("footer.phone")}: +598 99 213 300</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Smartialab. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
