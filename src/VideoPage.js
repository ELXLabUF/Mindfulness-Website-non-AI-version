import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './VideoPage.css';

function VideoPage() {
  const location = useLocation();
  const { videoUrl } = location.state;
  const navigate = useNavigate();

	const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
		setVideoEnded(true);
  };

  const handleCompleteClick = () => {
  
    const nextPage = '/final';  
    navigate('/survey', { state: {nextPage : nextPage, videoUrl: videoUrl } });
  };
  

  return (
    <div className="video-page-container">
      <video
        className="video-page-player"
        src={videoUrl}
        onEnded={handleVideoEnded}
        autoPlay
      />
			{videoEnded && (
      <div className="video-page-button-container">
        <button className="video-page-complete-button" onClick={handleCompleteClick}>Complete Survey</button>
      </div>
			)}
    </div>
  );
}

export default VideoPage;
