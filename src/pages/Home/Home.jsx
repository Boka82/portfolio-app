import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './home.style.css';
import profil from './profil.jpeg'

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="image-container">
          <img 
            src={profil}
            alt="Boris Keser" 
            className="profile-image"
          />
        </div>
        <div className="home-content">
          <h1>Hi, I am Boris Keser!</h1>
          <h2>Frontend Web Developer</h2>
          <p>I can provide clean code and pixel perfect design. I also make websites more & more interactive with web animations.</p>
          
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;