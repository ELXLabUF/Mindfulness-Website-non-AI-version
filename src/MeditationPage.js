import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MeditationPage.css'

function MeditationPage(props) {
  const location = useLocation();
  const { videoUrl, description, benefits } = location.state;

  const navigate = useNavigate();

  const handleMeditateClick = () => {
    // navigate('/video');
    navigate('/video', { state: { videoUrl: videoUrl } });
    // alert('Survey completed!');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  }; 


  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src="mlogo.png" alt="Your Logo" />
        </div>
        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handleAboutClick}>About Us</a>
        </div>
      </header>
      <div className="meditation-background-image"></div>
      {/* <div className="background-image-med"></div> */}
      
    <div className="meditation-page">
      <h2 className="title">Recommended Meditation</h2>
      <div className="video-container">
        <div className="video-wrapper">
          <video
            className="video"
            src={videoUrl}
            onClick={handleMeditateClick}
            // autoPlay
          />
        </div>
      </div>
      <div className="button-container">
        {/* <Link to="/video"> */}
          <button className="meditate-button" 
           onClick={handleMeditateClick}
          >Meditate</button>
        {/* </Link> */}
      </div>
    </div>
    </div>
  );
}


export default MeditationPage;