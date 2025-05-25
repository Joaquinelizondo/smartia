import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./index.css";

const ContactModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9mgshg",
        "template_jzsg3qs",
        formRef.current,
        "ws9ATcLxcA8G_GcHw"
      )
      .then(
        () => {
          alert("✅ " + t("contact.success"));
          formRef.current.reset();
          onClose();
        },
        (error) => {
          alert("❌ " + t("contact.error"));
          console.error(error.text);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">{t("contact.title")}</h2>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder={t("contact.name")} required />
          <input type="email" name="email" placeholder={t("contact.email")} required />
          <input type="tel" name="phone" placeholder={t("contact.phone")} />
          <textarea name="message" placeholder={t("contact.message")} rows="5" required></textarea>
          <button type="submit" className="btn-primary">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
