import React from 'react';
import { useNavigate } from 'react-router-dom';

import './AboutUs.css'

function AboutUs() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="about-us-page">
      <header className="header">
        <div className="logo-container">
          <img src="mlogo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="background-image"></div>
    <div className="about-us-message-container">
      <section className="about-us-section">
        <div className="about-us-heading">
          <h1>About Us</h1>
        </div>
        <div className="about-us-message">
          <h1>Thank you for your participation and interest in Mindfulness!</h1>
          <h1>We are a group of researchers coming together to provide you with personalized meditation and help increase awareness and motivation around mindfulness.</h1>
        </div>
        <div className="about-us-team">
          {/* Team photos and information */}
        </div>
        <div className="about-us-contact">
          <h2>For any queries contact <a href="mailto:kumar.j@ufl.edu">Jayavidhi Kumar (kumar.j@ufl.edu)</a></h2>
        </div>
        <div className="about-us-meditating">
          <h3>Keep Meditating.</h3>
        </div>
      </section>
    </div>
    </div>
  );
}

export default AboutUs;
