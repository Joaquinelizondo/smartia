import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";

// Componentes
import NavigationBar from "./Componentes/NavigationBar/Navigation";
import Header from "./Componentes/Header/Header";
import Body from "./Componentes/Body/Body";
import Main1 from "./Componentes/Main1/Main1";
import Main from "./Componentes/Main/Main";
import Plans from "./Componentes/Plans/Plans";
import Footer from "./Componentes/Footer/Footer";
import ContactModal from "./Componentes/ContactModal/ContactModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionsRef = useRef([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

      <Plans />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
