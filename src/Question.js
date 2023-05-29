import React, { useState } from 'react';
import './QuestionsPage.css'

const Question = ({ key, questionText, answerOptions, onChange, questionSets }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };  

  return (
    <div className="questions-page">

    <div className="mcq-container">
        <div key={key} className="mcq-question">
          <p>{questionText}</p>
          <div className="mcq-response">
          {answerOptions.map((option, index) => (
              <label key={index}>
                <input type="radio" value={option.value} checked={selectedValue === option.value} onChange={handleOptionChange} />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="question-container">
      </div>
    
    </div>
  );
};

export default Question;
