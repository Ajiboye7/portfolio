import React from 'react';
import '../Styles/Experience.css';

const Experience = () => {
  return (
    <section className="professional-experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <h4>Econnect Netpower Limited</h4>
          <p className="experience-duration">April 2021 – July 2022</p>
          <p className="experience-location">Lagos, Nigeria</p>
          <ul>
            <li>Developed highly scalable and performant RESTful APIs using Express and NestJS frameworks.</li>
            <li>Collaborated with front-end developers, UX/UI designers, and project managers to create functional and intuitive APIs.</li>
            <li>Implemented efficient data management solutions using MongoDB, MySQL, and PostgreSQL.</li>
            <li>Developed and maintained modular and scalable code bases using SOLID principles and design patterns.</li>
            <li>Built and implemented secure authentication and authorization systems using JWT and OAuth.</li>
            <li>Wrote comprehensive unit and integration tests using Jest and Supertest for reliable and high-quality code.</li>
            <li>Used Git for version control and collaborated with other developers</li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <h4>Fulus Investment Limited</h4>
          <p className="experience-duration">July 2023 – January 2024</p>
          <p className="experience-location">Lagos, Nigeria</p>
          <ul>
            <li>Developed and maintained cross-platform mobile applications using React Native.</li>
            <li>Built and optimized responsive web applications using React.</li>
            <li>Implemented state management using Redux.</li>
            <li>Consumed REST APIs and managed data using Axios.</li>
            <li>Contributed to code review and collaborated with cross-functional teams.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
