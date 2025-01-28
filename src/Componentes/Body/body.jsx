import React, { useEffect, useRef } from 'react';
import './index.css';
import profileImage from '../../assets/logo1.png';
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
} from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';

/* Hook optimizado para múltiples referencias */
const useIntersectionFadeIn = (refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
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

const Body = () => {
  const aboutTitleRef = useRef(null);
  const aboutContentRef = useRef(null);
  const techIconsRef = useRef(null);

  useIntersectionFadeIn([aboutTitleRef, aboutContentRef, techIconsRef]);

  return (
    <section className="body">
      {/* Profile Image */}
      <div className="profile">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      {/* Title Section */}
      <div className="title" ref={aboutTitleRef}>
        <h1>About Us</h1>
      </div>

      {/* About Content */}
      <div className="body1">
      <div className="content-box" ref={aboutContentRef}>
  <p>
    <strong>Competitive Advantages:</strong>
  </p>
  <ul>
    <li>
      <strong>Personalized Experience:</strong> The chatbot learns from
      interactions to provide tailored recommendations and promotions for
      each customer.
    </li>
    <li>
      <strong>Ease of Use:</strong> Simplifies the purchase process, making it
      faster and more accessible.
    </li>
    <li>
      <strong>Value for Businesses:</strong> Optimizes marketing strategies,
      pricing, and provides valuable customer insights.
    </li>
  </ul>

  <p>
    <strong>Growth Strategy:</strong>
  </p>
  <ul>
    <li>
      <strong>Onboarding New Businesses:</strong> Partnering with small
      businesses initially and later with large brands to expand the product
      offering.
    </li>
    <li>
      <strong>Targeted Marketing Campaigns:</strong> Segmented advertising
      based on user behavior data.
    </li>
    <li>
      <strong>International Expansion:</strong> After consolidating in the
      local market, adapt to growing international ecommerce markets.
    </li>
  </ul>

  <p>
    <strong>Required Technologies:</strong>
  </p>
  <ul>
    <li>Artificial intelligence for personalization.</li>
    <li>
      Natural Language Processing (NLP) for seamless interactions.
    </li>
    <li>Data analysis for insights and optimization.</li>
    <li>Integration with payment gateways and ecommerce systems.</li>
  </ul>
</div>


      </div>

      {/* Technologies Section */}
      <div className="tech-icons" ref={techIconsRef}>
        <h2 className="tech-title">Technologies We Use</h2>
        <div className="icons-container">
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
