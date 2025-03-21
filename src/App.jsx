import { useEffect, useRef } from "react";
import "./App.css";  // ✅ Importa el CSS correctamente
import Header from "./Componentes/Header/Header";
import Body from "./Componentes/Body/Body";
import Carousel from "./Componentes/Carousel/Carousel";  // ✅ Se agrega el Carrusel aquí
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import Main1 from "./Componentes/Main1/Main1";
import "./index.css"; // ✅ Asegurar que se carga bien

function App() {
  const sectionsRef = useRef([]);

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
      <Header className="header" />
      <div className="carousel-wrapper">
        <Carousel /> {/* 📌 Carrusel con margen superior */}
      </div>
      <Body />
      <div ref={(el) => (sectionsRef.current[0] = el)} className="hidden">
        <Main1 />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="hidden">
        <Main />
      </div>
      <Footer />
    </div>
  );
  
}

export default App;
