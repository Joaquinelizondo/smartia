import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

import profileImage from "/src/assets/logo1.png";
import icono from "/src/assets/icono.png";

// Icons
import {
  SiGooglecloud,
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
    <div className="body1" id="about">
      <div className="content-box" ref={ref} style={{ fontFamily: "Lato, sans-serif" }}>
        {/* <div className="icon-container">
          <img src={icono} alt="Icon" className="icon-inside-box" />
        </div> */}

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
  const { t } = useTranslation();
  const aboutTitleRef = useRef(null);
  const techIconsRef = useRef(null);

  useIntersectionFadeIn([aboutTitleRef, techIconsRef]);

  const sections = t("about.sections", { returnObjects: true });

  return (
    <section className="body">
      <div className="title" ref={aboutTitleRef} style={{ fontFamily: "Lato, sans-serif" }}>
        <h1 className="about_us">{t("about.title")}</h1>
      </div>

      {Object.entries(sections).map(([sectionTitle, items], index) => (
        <ContentBox key={index} title={sectionTitle} content={items} />
      ))}

      <div className="tech-icons" ref={techIconsRef}>
        <h2 className="tech-title" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {t("about.technologies")}
        </h2>
        <div className="icons-container">
          <GoogleIcon fontSize="large" className="tech-material-icon" titleAccess="Google" />
          <SiGooglecloud size={40} title="Google Cloud / Vertex AI" />
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
