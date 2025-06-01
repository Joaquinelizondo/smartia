import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";

import NavigationBar from "./Componentes/NavigationBar/NavigationBar";
import Header from "./Componentes/Header/Header";
import Body from "./Componentes/Body/Body";
import Main1 from "./Componentes/Main1/Main1";
import Main from "./Componentes/Main/Main";
import Plans from "./Componentes/Plans/Plans";
import Footer from "./Componentes/Footer/Footer";
import ContactModal from "./Componentes/ContactModal/ContactModal";
import Agent from "./Componentes/Agent/Agent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preFilledMessage, setPreFilledMessage] = useState("");
  const sectionsRef = useRef([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openContactModalWithPlan = (planTitle) => {
    setPreFilledMessage(`Estoy interesado/a en el plan: ${planTitle}`);
    openModal();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <Header openContactModal={openModal} />
      <Body />
      <div ref={(el) => (sectionsRef.current[0] = el)} className="show">
        <Main1 />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="show">
        <Main />
      </div>
      <Plans openContactModalWithPlan={openContactModalWithPlan} />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultMessage={preFilledMessage}
      />
      <Agent />
    </div>
  );
}

export default App;
