import React from 'react';
import '../Styles/Projects.css';
import image1 from "../Image/cryptoapp.png";
import image2 from "../Image/excercise photo.png";
import image3 from "../Image/ecommerce photo.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <p className="projects-intro">
        Here you will find some of the personal projects that I created from scratch based on my skillset.
      </p>
      <div className="project-container">
        <div className="project-card">
          <div className="project-content">
            <h3>Cryptocurrency App</h3>
            <p>This Cryptocurrency App is designed to provide users with the latest trends, prices, daily news, and more about various cryptocurrencies. The app integrates two different APIs to fetch real-time data and display it to the users in an intuitive manner.</p>
            <ul>
              <li>Real-Time Data: Utilizes two APIs to fetch up-to-date information on cryptocurrency trends and prices.</li>
              <li>Data Visualization: Implements Chart.js to create interactive and visually appealing charts for better data understanding.</li>
              <li>State Management: Employs state management techniques to ensure seamless data flow and efficient state handling throughout the app.</li>
              <li>Comprehensive Information: Provides daily news updates and detailed information on various cryptocurrencies.</li>
            </ul>
            <a href="https://cryptotradingapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="view-project-button">View Project</a>
          </div>
          <div className="project-image">
            <img src={image1} alt="Project 1" />
          </div>
        </div>
        <div className="project-card reverse">
          <div className="project-content">
            <h3>Workout App</h3>
            <p>The Workout App is a comprehensive fitness platform that provides users with various workout routines, exercise demonstrations, and videos tailored to their needs. It integrates two APIs to fetch workout data and instructional videos, and utilizes state management for a seamless user experience.</p>
            <ul>
              <li>Exercise Variety: Offers a wide range of workout routines and exercises targeting different muscle groups.</li>
              <li>Instructional Videos: Provides instructional videos for each exercise to ensure proper form and technique.</li>
              <li>Personalized Experience: Allows users to customize their workout plans based on their fitness goals and preferences.</li>
              <li>Data Visualization: Visualizes workout progress and performance metrics to track fitness goals.</li>
            </ul>
            <a href="https://excerciseapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="view-project-button">View Project</a>
          </div>
          <div className="project-image">
            <img src={image2} alt="Project 2" />
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>E-commerce App</h3>
            <p>The E-commerce App is a full-stack platform for selling high-quality suits and stylish shoes. It implements three APIs for product data, user authentication, and payment processing using Stripe. The app features a user-friendly interface, robust backend functionalities, and seamless integration with third-party services.</p>
            <ul>
              <li>Product Catalog: Offers a wide selection of suits and shoes with detailed descriptions and images.</li>
              <li>User Authentication: Implements secure authentication and authorization mechanisms for user accounts.</li>
              <li>Payment Integration: Utilizes Stripe for secure and convenient payment processing.</li>
              <li>Responsive Design: Ensures a seamless shopping experience across different devices and screen sizes.</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer" className="view-project-button">Still in production</a>
          </div>
          <div className="project-image">
            <img src={image3} alt="Project 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


