import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './AboutUs.css'

function AboutUs() {
  const navigate = useNavigate();

  const location = useLocation();
  const { videoUrl, description, benefits } = location.state;

  const handleMeditateClick = () => {
    const nextPage = '/final';
    navigate('/postquestions', { state: {nextPage : nextPage, videoUrl: videoUrl } });
  };

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
          <img src="your-logo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="guide-background-image"></div>
    <div className="about-us-message-container">
      <section className="guide-section">
        <div className="about-us-heading">
          <h1>IRB Study #IRB202200973</h1>
        </div>
        <div className="about-us-message">
          <h1>In this study, you will be asked to complete a questionnaire after watching the nature video.</h1>
          <h1>We encourage you to answer these questions as honestly and thoughtfully as possible, as your responses will be an important contribution to our research.</h1>
        </div>
        <div className="about-us-team">
        </div>
        <div className="button-container">
          <button className="meditate-button" 
           onClick={handleMeditateClick}
          >Continue</button>
      </div>
      </section>

    </div>
    </div>
  );
}

export default AboutUs;
