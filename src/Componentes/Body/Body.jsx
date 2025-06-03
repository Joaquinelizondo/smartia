import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

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

// Ruta del video (en /public)
const videoSrc = "src/assets/body_video.mp4";

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
    <div className="content-box" ref={ref}>
      <h2 className="section-title">{title}</h2>
      <ul className="spaced-list">
        {content.map((item, index) => (
          <li key={index} className="list-item">
            <span className="list-title">{item.title}:</span>
            <span className="list-description">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Body = () => {
  const { t } = useTranslation();
  const aboutTitleRef = useRef(null);
  const techIconsRef = useRef(null);

  useIntersectionFadeIn([aboutTitleRef, techIconsRef]);

  const sections = t("about.sections", { returnObjects: true });
  const sectionTitles = Object.keys(sections);
  const sectionContents = Object.values(sections);

  return (
    <section className="body">
      <div className="main-layout">

        {/* Primera fila: Título + primera caja */}
        <div className="row-layout">
          <div className="title" ref={aboutTitleRef}>
            <h1 className="about_us">{t("about.title")}</h1>
          </div>
          <div className="content-box-wrapper">
            <ContentBox
              title={sectionTitles[0]}
              content={sectionContents[0]}
            />
          </div>
        </div>

        {/* Segunda fila: Video + segunda caja */}
        <div className="row-layout">
          <div className="video-container">
            <video
              className="blurred-video"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="content-box-wrapper">
            <ContentBox
              title={sectionTitles[1]}
              content={sectionContents[1]}
            />
          </div>
        </div>

        {/* Tecnologías */}
        <div className="tech-icons" ref={techIconsRef}>
          <h2 className="tech-title">{t("about.technologies")}</h2>
          <div className="icons-container">
            <GoogleIcon fontSize="large" titleAccess="Google" />
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
      </div>
    </section>
  );
};

export default Body;
