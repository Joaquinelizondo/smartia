import React, { useEffect, useRef } from "react";
import "./index.css";
import profileImage from "../../assets/logo1.png";
import icono from "../../assets/icono.png";
import { SiGooglecloud } from "react-icons/si";

// 📌 Importar íconos de tecnologías
import {
  SiPython,
  SiPlotly,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiDatabricks,
  SiTableau,
  SiReact,
  SiPostgresql,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";

// 📌 Importar Material UI Icons para Google & Gemini AI
import GoogleIcon from "@mui/icons-material/Google";

const useIntersectionFadeIn = (refs) => {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);
};

const ContentBox = ({ title, content }) => {
  const ref = useRef(null);
  useIntersectionFadeIn([ref]);

  return (
    <div className="body1">
      <div className="content-box" ref={ref} style={{ fontFamily: "Lato, sans-serif" }}>
        {/* 📌 Contenedor para el icono dentro del box */}
        <div className="icon-container">
          <img src={icono} alt="Icon" className="icon-inside-box" />
        </div>

        <h2 className="section-title">{title}</h2>
        <ul className="spaced-list">
          {content.map((item, index) => (
            <li key={index} className="list-item">
              <span className="list-title">{item.title}:</span>{" "}
              <span className="list-description">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  const aboutTitleRef = useRef(null);
  const techIconsRef = useRef(null);

  useIntersectionFadeIn([aboutTitleRef, techIconsRef]);

  const sections = [
    {
      title: "Competitive Advantages",
      content: [
        { title: "Personalized Experience", description: "The agent learns from interactions to provide tailored recommendations and promotions for each customer." },
        { title: "Ease of Use", description: "Simplifies the purchase process, making it faster and more accessible." },
        { title: "Value for Businesses", description: "Optimizes marketing strategies, pricing, and provides valuable customer insights." },
      ],
    },
    {
      title: "Growth Strategy",
      content: [
        { title: "Onboarding New Businesses", description: "Partnering with small businesses initially and later with large brands to expand the product offering." },
        { title: "Targeted Marketing Campaigns", description: "Segmented advertising based on user behavior data." },
        { title: "International Expansion", description: "After consolidating in the local market, adapt to growing international ecommerce markets." },
      ],
    },
    {
      title: "Required Technologies",
      content: [
        { title: "Artificial Intelligence", description: "For personalization." },
        { title: "Natural Language Processing (NLP)", description: "For seamless interactions." },
        { title: "Data Analysis", description: "For insights and optimization." },
        { title: "Integration with Payment Systems", description: "For secure and efficient transactions." },
      ],
    },
  ];

  return (
    <section className="body">
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      <div className="title" ref={aboutTitleRef} style={{ fontFamily: "Lato, sans-serif" }}>
        <h1 className="about_us">About Us</h1>
      </div>

      {sections.map((section, index) => (
        <ContentBox key={index} title={section.title} content={section.content} />
      ))}

      <div className="tech-icons" ref={techIconsRef}>
        <h2 className="tech-title" style={{ fontFamily: "Lato, sans-serif" }}>
          Technologies We Use
        </h2>
        <div className="icons-container">
          {/* 📌 Íconos de Google & Gemini AI */}
          <GoogleIcon fontSize="large" className="tech-material-icon" titleAccess="Google" />
          <SiGooglecloud size={40} title="Google Cloud / Vertex AI" />

          {/* 📌 Otros íconos de tecnologías */}
          <SiPython title="Python" />
          <SiPandas title="Pandas" />
          <SiNumpy title="NumPy" />
          <SiPlotly title="Plotly" />
          <SiApachespark title="PySpark" />
          <SiPostgresql title="PostgreSQL" />
          <SiDatabricks title="Databricks" />
          <SiTableau title="Tableau" />
          <SiReact title="React" />
          <FaFileExcel title="Excel" />
        </div>
      </div>
    </section>
  );
};

export default Body;
