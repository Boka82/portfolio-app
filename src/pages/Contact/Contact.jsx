import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import './contact.style.css';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
 };

  return (
    <section className="contacts">
      <div className="contacts-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quisquam dolore quibusdam. Excepturi eius odit magni!
             Quam iure nam dolores odit quidem quasi libero fuga qui, laborum magni excepturi quos.</p>
          
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon wrapper">                
                  <FaPhone className="contact-icon" />                
              </div>
              <div className="contact-text">
              <h3>Contact on phone</h3>
              <p>00 387 65 851 620</p>
              <p>00 387 51 337 988</p>
            </div>
            </div>
            

            <div className="contact-item">
              <div className="contact-item">
              <div className="icon wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="contact-text">
              <h3>Contact on Email</h3>
              <p>boris.keser@gmail.com</p>
              <p>boris.keser@tropic.ba</p>
            </div>
            </div>
            </div>

            <div className="contact-item">
              <div className="contact-item">
              <div className="icon wrapper">
                <FaMapMarker className="contact-icon" />
              </div>
              <div className="contact-text">
              <h3>Contact address</h3>
              <p>Ivana Gorana Kovacica, Banja Luka, Republika Srpska</p>
            </div>
          </div>
        </div>
        </div>
        </div>


        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="form-group">
              <input type="text" placeholder="Enter your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Enter your message" rows="8" required></textarea>
            </div>
            <button type="submit" className="send-button">
              SEND MAIL
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;