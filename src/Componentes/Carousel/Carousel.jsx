import React, { useState, useEffect } from "react";
import "./index.css"; 

import logo1 from "../../assets/logo1.png";  // 📌 Ruta relativa a "src/Componentes/Carousel/"
import fotom from "../../assets/fotom.jpeg"; 


const images = [logo1, fotom, logo1];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="prev" onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}>❮</button>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>
      <button className="next" onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}>❯</button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
