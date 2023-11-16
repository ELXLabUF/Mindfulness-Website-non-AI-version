import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './FinalPage.css'

function FinalPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const {videoUrl, unique_id} = location.state;

  const handleRegenerateRecommendation = () => {
    const nextPage = '/meditation';
  
    navigate('/', { state: nextPage  });
  };

  const handleRepeatMeditation = () => {
    navigate('/meditation', { state: {videoUrl: videoUrl, description: "nature sound", benefits:"relax"} });
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const uniqueId = uuidv4();

  return (
    <div className="final-page">
      <header className="header">
        <div className="logo-container">
          <img src="mlogo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
        <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="final-background-image"></div>
      <div className="message-container">
        <div className="thank-you-container">
          <h1>Congratulations! You have reached the end of the survey.</h1>
          <h1>Thank you for your responses!</h1>
          <h2>Send a screenshot of this page along with your unique identifier at adehoog@ufl.edu <br/>Your Unique identifier is: {unique_id} </h2>
        </div>
        <div className="button-container">
          <button className="regenerate-button" onClick={handleRegenerateRecommendation}>Regenerate Recommendation</button>
          <button className="repeat-button" onClick={handleRepeatMeditation}>Repeat Meditation</button>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;
