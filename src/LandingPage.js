import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LandingPage.css';

function LandingPage(props) {

  const navigate = useNavigate();

  const handleStartClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://minfulness-api.ue.r.appspot.com/getNonAIVideo'
      // , {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(allResponses)
      // }
      );
  
      if (!response.ok) {
        throw new Error('Failed to get video URL');
      }
  
      const data = await response.json();
      const { videoUrl } = data;
  
      navigate('/meditation', {
        state: {
          videoUrl,
          description: "nature sound", benefits:"relax",
        }
      });
    } catch (error) {
      console.error(error);
    }

  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };
  

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src="mlogo.png" alt="Be Mindful" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="welcome-container">
        {/* <img src="mindfulness_welcome.jpg" alt="Welcome" className="landing-background-image" /> */}
        <div className="landing-background-image"></div>
        <div className="welcome-message">
          <h1>Practice Mindfulness with nature interactions</h1>
          <p></p>
          <button className="get-started-button" onClick={handleStartClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
