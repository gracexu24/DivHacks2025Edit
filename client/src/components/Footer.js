import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        id="footer-text"
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        MLH Code of Conduct
      </a>
      <div className="footer-icons">
        <a href="mailto:cu.divhacks@gmail.com">
          <img id="contact-icon" src="/assets/email-icon.png" alt="Contact Us" />
        </a>
        <a href="https://instagram.com/divhacks">
          <img id="contact-icon" src="/assets/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com/divhacks">
          <img id="contact-icon" src="/assets/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com/company/divhacks">
          <img id="contact-icon" src="/assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/divhacks">
          <img id="contact-icon" src="/assets/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 