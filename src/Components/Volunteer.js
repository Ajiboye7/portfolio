import React from 'react';
import '../Styles/Volunteer.css';

const Volunteer = () => {
  return (
    <section className="volunteer-experience-section">
      <h2>Volunteer Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <h4>Rizz's Work</h4>
          <p className="experience-duration">2023</p>
          <p className="experience-location">Nigeria</p>
          <ul>
            <h5>Project: Figma to React Conversion</h5>
            <li>Utilize ReactJS and Tailwind CSS to convert Figma mockup designs into code.</li>
            <li>Created React components for the landing page, and authentication pages such as Login, Sign Up, and Forgot Password.</li>
            <li>Utilize Tailwind CSS to make all the pages responsive across multiple screen sizes.</li>
            <hr />
            <h5>Project: Online Room Allocation Portal</h5>
            <li>Part of a team that developed a room allocation portal for students, where they could pay for hostels and have rooms assigned to them.</li>
            <hr />
            <h5>Project: Online Registration and Admission Portal</h5>
            <li>Part of a team that developed a registration portal for students, where they could register, submit necessary details, pay when needed, and follow up on the processes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
