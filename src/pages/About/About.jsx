import React from 'react';
import './about.style.css';
import about from './about.jpeg'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src={about}
            alt="Boris Keser" 
            className="profile-img"
          />
        </div>
        
        <div className="about-content">
          <h2 className="section-subtitle">ABOUT ME</h2>
          <h1 className="section-title">Hi, I am Boris Keser</h1>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">First Name:</span>
              <span className="info-value">Boris</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Name:</span>
              <span className="info-value">Keser</span>
            </div>
            <div className="info-item">
              <span className="info-label">Age:</span>
              <span className="info-value">27 years</span>
            </div>
            <div className="info-item">
              <span className="info-label">Nationality:</span>
              <span className="info-value">Serbian</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">English, Bosnian</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">Sime Miljusa, Banja Luka, Republika Srpska</span>
            </div>
            <div className="info-item">
              <span className="info-label">Freelance:</span>
              <span className="info-value available">Available</span>
            </div>
          </div>
        </div>
        <a 
  href="/resume.pdf"
  download
  className="download-btn"
>
  Download Resume
</a>
      </div>
    </section>
  );
};

export default About;