import { useEffect, useRef } from "react";
import "./App.css";  // ✅ Importa el CSS de forma correcta
import Header from "./Componentes/Header/Header";
import Body from "./Componentes/Body/Body";
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import Main1 from "./Componentes/Main1/Main1";
import "./index.css"; // ✅ Asegurar que se carga bien

// ✅ No usamos ref en los componentes funcionales
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
      <Header className="hidden" />
      <Body className="hidden" />
      <Main1 className="hidden" />
      <Main className="hidden" />
      <Footer className="hidden" />
    </div>
  );
}

export default App;

