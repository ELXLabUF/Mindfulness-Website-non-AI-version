import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import QuestionsPage from './QuestionsPage';
import PostQuestionsPage from './PostQuestionsPage';
import MeditationPage from './MeditationPage';
import VideoPage from './VideoPage';
import FinalPage from './FinalPage';
import AboutUs from './AboutUs';
import SurveyGuide from './SurveyGuide';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'How are you feeling today?',
      answers: ['Stressed', 'Tired', 'Relaxed', 'Energetic'],
      selectedAnswerIndex: null
    }
  ]);

  const [currentPage, setCurrentPage] = useState('landing');

  const handleAnswerSelected = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedAnswerIndex = answerIndex;
    setQuestions(updatedQuestions);
  };

  const handleBackClick = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedAnswerIndex = null;
    setQuestions(updatedQuestions);
  };

  const handleStartClick = () => {
    setCurrentPage('questions');
  };

  const handleQuestionsComplete = () => {
    setCurrentPage('meditation');
  };

  return (
    <Router basename='/Mindulness-Website-non-AI-version'>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage onStartClick={handleStartClick} />}/>
          <Route path="/questions" element={
            <QuestionsPage
              questions={questions}
              onAnswerSelected={handleAnswerSelected}
              onBackClick={handleBackClick}
              onComplete={handleQuestionsComplete}
            />
          }/>
          <Route path="/meditation" element={<MeditationPage />}/>
          <Route path="/video" element={<VideoPage />}/>
          <Route path="/postquestions" element={
            <PostQuestionsPage
              questions={questions}
              onAnswerSelected={handleAnswerSelected}
              onBackClick={handleBackClick}
              onComplete={handleQuestionsComplete}
            />
          }/>
          <Route path="/final" element={<FinalPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/survey" element={<SurveyGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;