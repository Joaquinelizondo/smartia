import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const ContactModel = ({ isOpen, onClose }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_d9mgshg",
      "template_jzsg3qs",
      formRef.current,
      "ws9ATcLxcA8G_GcHw"
    ).then(
      () => {
        alert("✅ Mensaje enviado correctamente");
        formRef.current.reset();
        onClose();
      },
      (error) => {
        alert("❌ Error al enviar el mensaje");
        console.error(error.text);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModel;
