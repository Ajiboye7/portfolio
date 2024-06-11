import React from 'react';
import '../Styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>A Web Developer from Lagos, Nigeria, with 3 years of experience creating dynamic and user-friendly web applications.</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Lagos, Nigeria</p>
          <p><i className="fas fa-phone"></i> +234 8172710973</p>
          <p><i className="fas fa-envelope"></i> ajiboyemuyiden7@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
         Designed by Ajiboye
      </div>
    </footer>
  );
};

export default Footer;
