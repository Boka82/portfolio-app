import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.style.css';
import logo from './react-icon.png';


const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img 
            src={logo}
            alt="Logo" 
            className="logo-image"
          />
        </div>
        
        <div className="nav-links">
          <NavLink 
            to="/" 
            className="nav-link"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="nav-link"
            activeclassname="active"
          >
            About
          </NavLink>
          <NavLink 
            to="/works" 
            className="nav-link"
            activeclassname="active"
          >

           Work
          </NavLink>
          <NavLink 
            to="/contact" 
            className="nav-link"
            activeclassname="active"
          >

            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;