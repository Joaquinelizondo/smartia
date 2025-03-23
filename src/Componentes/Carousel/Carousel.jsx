import React, { useState, useEffect } from "react";
import "./index.css"; // CSS del carrusel

// ✅ Importación correcta de imágenes desde src/assets
import logo1 from "../../assets/personai2.jpg";
import fotom from "../../assets/personai.jpg";
import fotom1 from "../../assets/personai3.jpg";

const images = [logo1, fotom, fotom1]; // podés cambiar el orden o usar más

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
      <button
        className="prev"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
      >
        ❮
      </button>

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

      <button
        className="next"
        onClick={() =>
          setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        ❯
      </button>

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
