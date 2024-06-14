import React from "react";
import "../Styles/Experience.css";

const Experience = () => {
  return (
    <section className="professional-experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-container">
      <div className="experience-card">
          <h3>Software Engineer</h3>
          <h4>Xenturylens</h4>
          <p className="experience-duration">January 2023 – Present</p>
          <p className="experience-location">London, United Kingdom</p>
          <ul>
            <li>
              Designed and developed scalable and high-performance backend systems using Express and NestJS frameworks.
            </li>
            <li>
              Employed data structures and algorithms to optimize system performance andsolve computational problems effectively.
            </li>
            <li>
              Utilized Azure services for various purposes, such as cloud infrastructure, hosting, and deployment.
            </li>
            <li>
              Collaborated with frontend developers, designers, and product managers to define API requirements and ensure seamless
              integration with the frontend
            </li>
            <li>
              Implemented various backend functionalities such as authentication, authorization, payment processing, data storage and retrieval, and API documentation
            </li>
            <li>
              Worked with SQL and NoSQL databases like PostgreSQL MongoDB, and Redux to store and retrieve data.
            </li>
            <li>
              Utilized Docker to containerize and deploy backend applications.
            </li>
            <li>
              Conducted code reviews and provided constructive feedback to ensure code quality and maintainability.
            </li>
            <li>
              Implemented and maintained continuous integration and deployment (CI/CD) pipelines to automate the build, testing, and deployment processes.
            </li>
            <li>
              Optimized backend systems for performance and scalability by monitoring and analyzing system metrics and logs.
            </li>
            <li>
              Troubleshot and resolved complex technical issues in a timely and efficient.
            </li>
            <li>
              manner, ensuring minimal downtime and disruption to business operations.
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <h4>Econnect Netpower Limited</h4>
          <p className="experience-duration">April 2021 – July 2022</p>
          <p className="experience-location">Lagos, Nigeria</p>
          <ul>
            <li>
              Developed highly scalable and performant RESTful APIs using
              Express and NestJS frameworks.
            </li>
            <li>
              Collaborated with front-end developers, UX/UI designers, and
              project managers to create functional and intuitive APIs.
            </li>
            <li>
              Implemented efficient data management solutions using MongoDB,
              MySQL, and PostgreSQL.
            </li>
            <li>
              Developed and maintained modular and scalable code bases using
              SOLID principles and design patterns.
            </li>
            <li>
              Built and implemented secure authentication and authorization
              systems using JWT and OAuth.
            </li>
            <li>
              Wrote comprehensive unit and integration tests using Jest and
              Supertest for reliable and high-quality code.
            </li>
            <li>
              Used Git for version control and collaborated with other
              developers
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <h4>Fulus Investment Limited</h4>
          <p className="experience-duration">September 2022 – January 2023</p>
          <p className="experience-location">Lagos, Nigeria</p>
          <ul>
            <li>
              Developed and maintained cross-platform mobile applications using
              React Native.
            </li>
            <li>
              Built and optimized responsive web applications using React.
            </li>
            <li>Implemented state management using Redux.</li>
            <li>Consumed REST APIs and managed data using Axios.</li>
            <li>
              Contributed to code review and collaborated with cross-functional
              teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
