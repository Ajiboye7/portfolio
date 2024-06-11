import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import picture from "../Image/portfolio.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const text = "A Full Stack Web Developer dedicated to crafting exceptional user experiences by seamlessly integrating frontend and backend technologies. With a strong emphasis on both the frontend and backend development, I specialize in architecting robust, scalable solutions that drive the success of digital products.";

    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-card">
        <div className="hero-image">
          <img src={picture} alt="Software Developer" />
        </div>
        <div className="hero-content">
          <h1>Ajiboye</h1>
          <p>{typedText}</p>
          <div className="hero-links">
            <a href="https://github.com/Ajiboye7" target="_blank" rel="noopener noreferrer" className="hero-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="/path/to/your/cv.pdf" download className="hero-link">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
