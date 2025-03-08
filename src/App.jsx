import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Body from "./Componentes/Body/Body";
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import Main1 from "./Componentes/Main1/Main1";
import './index.css'
import 'typeface-lato';


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
      <Header ref={(el) => (sectionsRef.current[0] = el)} className="hidden" />
      <Body ref={(el) => (sectionsRef.current[1] = el)} className="hidden" />
      <Main1 ref={(el) => (sectionsRef.current[3] = el)} className="hidden" />
      <Main ref={(el) => (sectionsRef.current[2] = el)} className="hidden" />
      <Footer ref={(el) => (sectionsRef.current[3] = el)} className="hidden" />
    </div>
  );
}

export default App;
