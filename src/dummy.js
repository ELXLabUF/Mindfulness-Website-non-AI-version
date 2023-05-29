datacenter id: ufl.yul1   ca1

api token: LGhSUEXkhKJCGrCYgKUMxCzc20nQaihrTZvWjTY6


import React, { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import './PostQuestionsPage.css'

const Question = ({ questionText, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="questions-page">
      
      <div className="question-container">
        <h2 className="question-title">
          {questionText}</h2>
          <div className="answer-options">
      <label>
        <input type="radio" value="1" checked={selectedValue === "1"} onChange={handleOptionChange} />
        Strongly disagree
      </label>
      <label>
        <input type="radio" value="2" checked={selectedValue === "2"} onChange={handleOptionChange} />
        Disagree
      </label>
      <label>
        <input type="radio" value="3" checked={selectedValue === "3"} onChange={handleOptionChange} />
        Somewhat disagree
       </label>
    </div>
    </div>
    
    </div>
  );
};

const PostQuestionsPage = () => {
  const questions = [
    { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.' },
    { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.' }
  ];

  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const {nextPage, videoUrl} = location.state;

  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    setAllQuestionsAnswered(
      questions.every((question) => responses[question.id])
    );
  }, [responses, questions]);


  const handleContinueClick = (e) => {
    e.preventDefault();
    console.log("responses-----",responses);
      navigate(nextPage, { state: {videoUrl: videoUrl} });
    
  };
  

  const handleBackClick = () => {

      navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <Question
          key={question.id}
          questionText={question.text}
          onChange={(value) => handleQuestionChange(question.id, value)}
        />
      ))}
      {/* <button type="submit">Submit</button> */}
      <div className="post-button-container">
        {/* <button className="back-button" onClick={handleBackClick}>Back</button> */}
        <button type="submit" className="continue-button" onClick={handleContinueClick} disabled={!allQuestionsAnswered}>Continue</button>
      </div>
    </form>
  );
};

export default PostQuestionsPage;



// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './QuestionsPage.css'

// function QuestionsPage(props) {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

//   const location = useLocation();
// //   const questions = location.state.questions;
//   const nextPage = location.state;
//   console.log("next-page::", nextPage);

//   const { questions, onAnswerSelected, onBackClick, onComplete } = props;
//   const currentQuestion = questions[currentQuestionIndex];

//   const navigate = useNavigate();

//   const handleAnswerSelected = (index) => {
//     setSelectedAnswerIndex(index);
//   };

//   const handleContinueClick = () => {
//     if (selectedAnswerIndex !== null) {
//       onAnswerSelected(currentQuestionIndex, selectedAnswerIndex);
//       setSelectedAnswerIndex(null);
//       if (currentQuestionIndex === questions.length - 1) {
//         navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } });
//       } else {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       }
//     }
//   };
  

//   const handleBackClick = () => {
//     if (currentQuestionIndex > 0) {
//       onBackClick(currentQuestionIndex);
//       setSelectedAnswerIndex(null);
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//     else{
//       navigate(-1);
//     }
//   };

//   return (
//     <div className="questions-page">
//       <div className="question-container">
//         <h2 className="question-title">{currentQuestion.question}</h2>
//         <div className="answer-options">
//           {currentQuestion.answers.map((answer, index) => (
//             <div
//               key={index}
//               className={`answer-option${selectedAnswerIndex === index ? ' selected' : ''}`}
//               onClick={() => handleAnswerSelected(index)}
//             >
//               {/* <span className="answer-index">{String.fromCharCode(index + 65)}</span> */}
//               <span className="answer-text">{answer}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="button-container">
//         <button className="back-button" onClick={handleBackClick}>Back</button>
//         <button className="continue-button" onClick={handleContinueClick}>Continue</button>
//       </div>
//     </div>
//   );
// }

// export default QuestionsPage;

// // import React from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './QuestionsPage.css';

// // function QuestionsPage() {
// //   const location = useLocation();
// //   const {nextPage} = location.state;
// //   const navigate = useNavigate();

// //   return (
// //     <div className="questions-page">
// //       <div className="question-container">
// //         <h2 className="question-title">Please complete the survey below</h2>
// //         <iframe 
// //           id="qualtrics_survey" 
// //           src="https://ufl.qualtrics.com/jfe/form/SV_2ivgxDgetjRcX2e" 
// //           frameBorder="0"
// //           style={{ width: '100%', height: '800px' }}
// //         />
// //       </div>
// //       <div className="button-container">
// //         <button className="back-button" onClick={() => navigate(-1)}>Back</button>
// //         <button className="continue-button" onClick={() => navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } })}>Continue</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default QuestionsPage;



// // import React, { useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import './QuestionsPage.css';

// // function QuestionsPage() {
// //   const location = useLocation();
// //   const { nextPage } = location.state;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // API endpoint to get survey responses
// //     const apiEndpoint = `https://ufl.ca1.qualtrics.com/API/v3/surveys/SV_2ivgxDgetjRcX2e/export-responses`;
    
// //     // Replace 'yourapitoken' with your API token
// //     const apiToken = 'LGhSUEXkhKJCGrCYgKUMxCzc20nQaihrTZvWjTY6';

// //     fetch(apiEndpoint, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'X-API-TOKEN': apiToken,
// //       },
// //       body: JSON.stringify({
// //         format: 'json',
// //         useLabels: true,
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => console.log(data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <div className="questions-page">
// //       <div className="question-container">
// //         <h2 className="question-title">Please complete the survey below</h2>
// //         <iframe
// //           id="qualtrics_survey"
// //           src="https://ufl.qualtrics.com/jfe/form/SV_2ivgxDgetjRcX2e"
// //           frameBorder="0"
// //           style={{ width: '100%', height: '800px' }}
// //         />
// //       </div>
// //       <div className="button-container">
// //         <button className="back-button" onClick={() => navigate(-1)}>
// //           Back
// //         </button>
// //         <button
// //           className="continue-button"
// //           onClick={() =>
// //             navigate('/meditation', {
// //               state: {
// //                 videoUrl:
// //                   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
// //                 description: 'nature sound',
// //                 benefits: 'relax',
// //               },
// //             })
// //           }
// //         >
// //           Continue
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default QuestionsPage;






import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuestionsPage.css';

const QuestionsPage = () => {

  const questionSets = [
    {
      QsetID: 'BV',
      introText: 'Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree nor disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
        {
          id: 'BV1',
          text: 'What is your ethnicity?',
          answerOptions: [
            { label: 'American', value: '1' },
            { label: 'Asian', value: '2' },
          ],
        },
        {
          id: 'BV2',
          text: 'Another question...',
          answerOptions: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ],
        },
      ],
    },
    {
      QsetID: 'SMSPA',
      introText: 'Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree nor disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
        {
          id: 'SMSPA1',
          text: 'What is your age?',
          answerOptions: [
            { label: 'Under 18', value: '1' },
            { label: '18-24', value: '2' },
            { label: '25-34', value: '3' },
            { label: '35-44', value: '4' },
          ],
        },
        {
          id: 'SMSPA2',
          text: 'Another question...',
          answerOptions: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ],
        },
      ],
    },
  ];
  
  const [currentQuestionSetIndex, setCurrentQuestionSetIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  // const { nextPage, videoUrl } = location.state;

  const currentQuestions = questionSets[currentQuestionSetIndex];

  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    setAllQuestionsAnswered(
      // questionSets[currentQuestionSetIndex].every((question) => responses[question.id])
      currentQuestions.every((question) => responses[question.id])
    );
  }, [responses, questionSets, currentQuestionSetIndex]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allResponses = {...responses};
    console.log("allResponses-----", allResponses);
    
    // navigate('/meditation', { state: { videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: "nature sound", benefits:"relax" } });

    try {
      const response = await fetch('http://minfulness-api.ue.r.appspot.com/recommendVideo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allResponses)
      });
  
      if (!response.ok) {
        throw new Error('Failed to get video URL');
        // navigate('/meditation', { state: { videoUrl: 'https://www.dropbox.com/s/mvu95wbgrjsln94/1.mp4?raw=1', description: "nature sound", benefits:"relax" } });
      }
  
      const data = await response.json();
      const { videoUrl } = data;
  
      navigate('/meditation', {
        state: {
          videoUrl,
          description: "nature sound", benefits:"relax"
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleContinueClick = (e) => {
    e.preventDefault();

    setResponses((prevResponses) => ({
      ...prevResponses,
      ...Object.fromEntries(
        currentQuestions.map(({ id }) => [
          id,
          prevResponses[id] || null
        ])
      )
    }));
    setCurrentQuestionSetIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (currentQuestionSetIndex > 0) {
      // setCurrentQuestionSetIndex(currentQuestionSetIndex - 1);
      setCurrentQuestionSetIndex((prevIndex) => prevIndex - 1);
      setResponses({});
    } else {
      navigate(-1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-questions'>
      {/* {questionSets[currentQuestionSetIndex].map((question) => (
         */}
        {currentQuestions.map((question) => (
        <Question
          key={question.id}
          questionText={question.text}
          answerOptions={question.answerOptions}
          questionSets={questionSets}
          onChange={(value) => handleQuestionChange(question.id, value)}
        />
      ))}
      <div className="post-button-container">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>

{currentQuestionSetIndex < questionSets.length - 1 ? (
          <button
            type="submit"
            className="continue-button"
            onClick={handleContinueClick}
            disabled={!allQuestionsAnswered}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="submit-button"
            disabled={!allQuestionsAnswered}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default QuestionsPage;


{questionSets.map((questionSet) => {
  return (
    <div className="mcq-question">
      <p>{questionSet.introText}</p>
      <div className="mcq-agreement">
        <p>1 - Strongly disagree</p>
        <p>2 - Disagree</p>
        <p>3 - Somewhat disagree</p>
        <p>4 - Neither agree or disagree</p>
        <p>5 - Somewhat agree</p>
        <p>6 - Agree</p>
        <p>7 - Strongly agree</p>
      </div>
      {currentQuestions.map((question) => {
        return (
          <Question
            key={question.id}
            questionText={question.text}
            answerOptions={question.answerOptions}
            onChange={(value) => handleQuestionChange(question.id, value)}
          />
        );
      })}
    </div>
  );
})}






import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuestionsPage.css';

const QuestionsPage = () => {
  const questionSets = [
    {
      QsetID: 'BV',
      introText: 'Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree nor disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
        {
          id: 'BV1',
          text: 'What is your ethnicity?',
          answerOptions: [
            { label: 'American', value: '1' },
            { label: 'Asian', value: '2' },
          ],
        },
        {
          id: 'BV2',
          text: 'Another question...',
          answerOptions: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ],
        },
      ],
    },
    {
      QsetID: 'SMSPA',
      introText: 'SMSPA intro text',
      agreementOptions: [
        '1 - true disagree',
        '2 - very true',
        '3 - Somewhat true',
        '4 - Neither agree nor disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
        {
          id: 'SMSPA1',
          text: 'What is your age?',
          answerOptions: [
            { label: 'Under 18', value: '1' },
            { label: '18-24', value: '2' },
            { label: '25-34', value: '3' },
            { label: '35-44', value: '4' },
          ],
        },
        {
          id: 'SMSPA2',
          text: 'Another question...',
          answerOptions: [
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ],
        },
      ],
    },
  ];

  const [currentQuestionSetIndex, setCurrentQuestionSetIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  // const { nextPage, videoUrl } = location.state;

  const currentQuestions = questionSets[currentQuestionSetIndex].questions;
  const agreementOptions = questionSets[currentQuestionSetIndex].agreementOptions;

  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  useEffect(() => {
    // Check if all questions have been answered
    setAllQuestionsAnswered(
      // questionSets[currentQuestionSetIndex].every((question) => responses[question.id])
      currentQuestions.every((question) => responses[question.id])
    );
  }, [responses, questionSets, currentQuestionSetIndex]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const allResponses = {...responses};
  //   console.log("allResponses-----", allResponses);
  //   navigate('/meditation', { state: { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', description: "nature sound", benefits:"relax" } });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allResponses = {...responses};
    console.log("allResponses-----", allResponses);
    
    // navigate('/meditation', { state: { videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: "nature sound", benefits:"relax" } });

    try {
      const response = await fetch('http://minfulness-api.ue.r.appspot.com/recommendVideo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allResponses)
      });
  
      if (!response.ok) {
        throw new Error('Failed to get video URL');
        // navigate('/meditation', { state: { videoUrl: 'https://www.dropbox.com/s/mvu95wbgrjsln94/1.mp4?raw=1', description: "nature sound", benefits:"relax" } });
      }
  
      const data = await response.json();
      const { videoUrl } = data;
  
      navigate('/meditation', {
        state: {
          videoUrl,
          description: "nature sound", benefits:"relax"
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleContinueClick = (e) => {
    e.preventDefault();
    // console.log('responses-----', responses);
    // if (allQuestionsAnswered) {
    //   if (currentQuestionSetIndex === questionSets.length - 1) {
    //     navigate(nextPage, { state: { videoUrl: videoUrl } });
    //   } else {
    //     setCurrentQuestionSetIndex(currentQuestionSetIndex + 1);
    //     setResponses({});
    //   }
    // }

    setResponses((prevResponses) => ({
      ...prevResponses,
      ...Object.fromEntries(
        currentQuestions.map(({ id }) => [
          id,
          prevResponses[id] || null
        ])
      )
    }));
    setCurrentQuestionSetIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (currentQuestionSetIndex > 0) {
      // setCurrentQuestionSetIndex(currentQuestionSetIndex - 1);
      setCurrentQuestionSetIndex((prevIndex) => prevIndex - 1);
      setResponses({});
    } else {
      navigate(-1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-questions'>
      
      {questionSets.map((questionSet) => (
          <div key={questionSet.QsetID} className="mcq-question">
            <p>{questionSet.introText}</p>
            <div className="mcq-agreement">
              <p>1 - Strongly disagree</p>
              <p>2 - Disagree</p>
              <p>3 - Somewhat disagree</p>
              <p>4 - Neither agree or disagree</p>
              <p>5 - Somewhat agree</p>
              <p>6 - Agree</p>
              <p>7 - Strongly agree</p>
            </div>
          </div>
          ))}
        {currentQuestions.map((question) => (
        <Question
          key={question.id}
          questionText={question.text}
          answerOptions={question.answerOptions}
          // questionSets={questionSets}
          onChange={(value) => handleQuestionChange(question.id, value)}
        />
      ))}
      
      
      <div className="post-button-container">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
        {/* <button
          type="submit"
          className="continue-button"
          onClick={handleContinueClick}
          disabled={!allQuestionsAnswered}
        >
          Continue
        </button> */}

{currentQuestionSetIndex < questionSets.length - 1 ? (
          <button
            type="submit"
            className="continue-button"
            onClick={handleContinueClick}
            disabled={!allQuestionsAnswered}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="submit-button"
            disabled={!allQuestionsAnswered}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default QuestionsPage;




// Questions

const questionSets = [
    // Background Variables
    [
      { id: 'BV1', text: 'What is your ethnicity?', 
        answerOptions: [
          { label: "American Indian or Alaska Native", value: "1" },
          { label: "Asian", value: "2" },
          { label: "Black or African American", value: "3" },
          { label: "Hispanic or Latino", value: "4" },
          { label: "Native Hawaiian or Other Pacific Islander", value: "5" },
          { label: "White or Caucasian", value: "6" },
          { label: "Others", value: "7" },
        ],
      },
    ], [
      { id: 'BV2', text: 'With which gender orientation do you most identify?',
        answerOptions: [
          { label: "Male", value: "1" },
          { label: "Female", value: "2" },
          { label: "Non-binary/third gender", value: "3" },
          { label: "Prefer not to say", value: "4" },
          { label: "Prefer to self-describe", value: "5" },
        ],
      },
    // ],
    ], [
      { id: 'BV3', text: 'What is your current religion or spiritual orientation, if any?',
        answerOptions: [
          { label: "Christian", value: "1" },
          { label: "Jewish", value: "2" },
          { label: "Muslim", value: "3" },
          { label: "Sikh", value: "4" },
          { label: "Hindu", value: "5" },
          { label: "Buddhist", value: "6" },
          { label: "Atheist('do not belive in God')", value: "7" },
          { label: "Agnostic('not sure if there is God')", value: "8" },
          { label: "Something else", value: "9" },
          { label: "Nothing in particular", value: "10" },
          { label: "Refuse to say", value: "11" },
        ],
      },
    ], [
      { id: 'BV4', text: 'Which living community do you feel at home?',
        answerOptions: [
          { label: "Rural area", value: "1" },
          { label: "Large city", value: "2" },
          { label: "Suburb near a large city (peri-urban)", value: "3" },
          { label: "Small city or town", value: "4" },
          { label: "Others", value: "5" },
        ],
      },
    ], [
      { id: 'BV5', text: 'How often did you visit natural attractions around Gainesville (e.g., Kanapaha Botanical Garden, Loblollywoods South, or St. Augustine Beach) within the last 6 months?',
        answerOptions: [
          { label: "Never", value: "1" },
          { label: "A few times", value: "2" },
          { label: "Around once a month", value: "3" },
          { label: "Around twice a week", value: "4" },
          { label: "Around once a week", value: "5" },
          { label: "More than once a week", value: "6" },
        ],
      },
    ], [
      { id: 'BV6', text: 'How often do you engage in outdoor activities (in nature)?',
        answerOptions: [
          { label: "Less than once per week", value: "1" },
          { label: "More than once per week", value: "2" },
          { label: "Once weekly", value: "3" },
          { label: "Once Monthly", value: "4" },
          { label: "Twice or more times per month", value: "5" },
        ],
      },
    ], [
      { id: 'BV7', text: 'How often do you meditate?',
        answerOptions: [
          { label: "I don't know how to meditate", value: "1" },
          { label: "I know how to meditate but did not meditate in the past 12 months ", value: "2" },
          { label: "A few times over the past 12 months but less than once a week", value: "3" },
          { label: "Once a week", value: "4" },
          { label: "More than once a week but not daily", value: "5" },
          { label: "Daily", value: "6" },
        ],
      },
    ], [
      { id: 'BV8', text: 'Humans are intimately connected to oceans, rivers, mountains, and forests',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Somewhat disagree", value: "2" },
          { label: "Neither agree nor disagree", value: "3" },
          { label: "Somewhat agree", value: "4" },
          { label: "Strongly agree", value: "5" },
        ],
      },
    ], [
      { id: 'BV9', text: 'How many credit hours do you take this semester?',
        answerOptions: [
          { label: "Equal or less than 3", value: "1" },
          { label: "3< and =<6", value: "2" },
          { label: "6< and =<9", value: "3" },
          { label: "More than 9", value: "4" },
        ],
      },
    ], [
      // { id: 'BV10', text: 'In which academic college is your major at UF?',
      // // ************************************************************************
      //   answerOptions: [
      //     { label: "Equal or less than 3", value: "1" },
      //     { label: "3< and =<6", value: "2" },
      //     { label: "6< and =<9", value: "3" },
      //     { label: "More than 9", value: "4" },
      //   ],
      // },
      { id: 'BV11', text: 'What is your academic class standing?',
        answerOptions: [
          { label: "First-year", value: "1" },
          { label: "Sophomore", value: "2" },
          { label: "Junior", value: "3" },
          { label: "Senior", value: "4" },
          { label: "Graduate or Professional", value: "5" },
        ],
      },
    ], [
      { id: 'BV12', text: 'Do you have a part-time job apart from your study?',
        answerOptions: [
          { label: "Yes", value: "1" },
          { label: "No", value: "2" },
        ],
      },
    ], [
      { id: 'BV13', text: 'In the last month, how often were you in an anxious mood (felt worried, anticipation of the worst, fearful anticipation, irritable)?',
        answerOptions: [
          { label: "Never", value: "0" },
          { label: "Almost Never", value: "1" },
          { label: "Sometimes", value: "2" },
          { label: "Fairly Often", value: "3" },
          { label: "Very Often", value: "4" },
        ],
      },
    ], [
      { id: 'BV14', text: 'In the last month, how often have you found that you could not cope with all the things that you had to do?',
        answerOptions: [
          { label: "Never", value: "0" },
          { label: "Almost Never", value: "1" },
          { label: "Sometimes", value: "2" },
          { label: "Fairly Often", value: "3" },
          { label: "Very Often", value: "4" },
        ],
      },
    ], [
      { id: 'BV15', text: 'What’s your perceived level of financial burden?',
        answerOptions: [
          { label: "None", value: "0" },
          { label: "Slight", value: "1" },
          { label: "Somewwhat", value: "2" },
          { label: "Significant", value: "3" },
          { label: "Unmanageable", value: "4" },
        ],
      },
    ], [
      { id: 'BV16', text: 'Thinking about the last month, on average, how many nights a week do you have a problem with your sleep?',
        answerOptions: [
          { label: "0 to 1 Night", value: "1" },
          { label: "2 Nights", value: "2" },
          { label: "3 Nights", value: "3" },
          { label: "4 Nights", value: "4" },
          { label: "5 to 7 Nights", value: "5" },
        ],
      },
    ], [
      { id: 'BV17', text: 'Thinking about a typical night in the last month, how would you rate your sleep quality?',
        answerOptions: [
          { label: "very good", value: "1" },
          { label: "Good", value: "2" },
          { label: "Average", value: "3" },
          { label: "Poor", value: "4" },
          { label: "Very Poor", value: "5" },
        ],
      },
    ],
    
    // SMSPA
    [
      { id: 'SMSPA1', text: 'I was aware of different emotions that arose in me.', 
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA2', text: 'I noticed pleasant and unpleasant emotions.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA3', text: 'I noticed pleasant and unpleasant thoughts.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA4', text: 'I noticed emotions come and go.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA5', text: 'I noticed thoughts come and go.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA6', text: 'It was interesting to see the patterns of my thinking.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA7', text: 'I focused on the movement of my body.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA8', text: 'I felt present in my body.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA9', text: 'I listened to what my body was telling me.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA10', text: 'I was aware of how my body felt.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA11', text: 'I noticed the sensations in my body.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    // ], [
      { id: 'SMSPA12', text: 'I was in tune with how hard my muscles were working.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Very much", value: "4" },
        ],
      },
    ],
    [
      { id: 'FFMQ1', text: 'When I take a shower or a bath, I stay alert to the sensations of water on my body.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ2', text: 'I’m good at finding words to describe my feelings.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
        },
      { id: 'FFMQ3', text: 'I don’t pay attention to what I’m doing because I’m dreaming, worrying, or otherwise distracted.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ4', text: 'I believe some of my thoughts are abnormal or bad and I shouldn’t think that way.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    
      { id: 'FFMQ5', text: 'When I have distressing thoughts or images, I “step back” and am aware of the thought or image without getting taken over by it.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ6', text: 'I notice how foods and drinks affect my thoughts, bodily sensations, and emotions.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    
      { id: 'FFMQ7', text: 'I have trouble thinking of the right words to express how I feel about things.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    
      { id: 'FFMQ8', text: 'I do jobs or tasks automatically without being aware of what I’m doing.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    
      { id: 'FFMQ9', text: 'I think some of my emotions are bad or inappropriate and I shouldn’t feel them.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    
      { id: 'FFMQ10', text: 'When I have distressing thoughts or images I am able just to notice them without reacting.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ11', text: 'I pay attention to sensations, such as the wind in my hair or sun on my face.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ12', text: 'Even when I’m feeling terribly upset I can find a way to put it into words.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ13', text: 'I find myself doing things without paying attention.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ14', text: 'I tell myself I shouldn’t be feeling the way I’m feeling.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
      { id: 'FFMQ15', text: 'When I have distressing thoughts or images I just notice them and let them go.',
        answerOptions: [
          { label: "Never or very rarely true", value: "1" },
          { label: "Rarely true", value: "2" },
          { label: "Sometime true", value: "3" },
          { label: "Often true", value: "4" },
          { label: "Very often or always true", value: "5" },
        ],
      },
    ]
  ];



  // PostQuestions


  const questionSets = [
    [
      { id: 'mDES1', text: 'I felt amused, fun-loving, or silly.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES2', text: 'I felt angry, irritated, or annoyed.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES3', text: 'I felt ashamed, humiliated, or disgraced.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES4', text: 'I felt awe, wonder, or amazement.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES5', text: 'I felt contemptuous, scornful, or distainful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES6', text: 'I felt disgust, distaste, or revulsion.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES7', text: 'I felt embarrassed, self-conscious, or blushing.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES8', text: 'I felt grateful, appreciative, or thankful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES9', text: 'I felt guilty, repentant, or blame worthy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES10', text: 'I felt hate, distrust, or suspicion.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES11', text: 'I felt hopeful, optimistic, or encouraged.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES12', text: 'I felt inspired, uplifted, or elevated.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES13', text: 'I felt interested, alert, or curious.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES14', text: 'I felt joyful, glad, or happy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES15', text: 'I felt love, closeness, or trust.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES16', text: 'I felt proud, confident, or self-assured.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES17', text: 'I felt sad, downhearted, or unhappy.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES18', text: 'I felt scared, fearful, or afraid.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES19', text: 'I felt serene, content, or peaceful.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    // ], [
      { id: 'mDES20', text: 'I felt stressed, nervous, or overwhelmed.',
        answerOptions: [
          { label: "Not at all", value: "0" },
          { label: "A little bit", value: "1" },
          { label: "Moderately", value: "2" },
          { label: "Quite a bit", value: "3" },
          { label: "Extremely", value: "4" },
        ],
      },
    ], [
      // PRS
      { id: 'PRSB1', text: 'It is an escape experience.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSB2', text: 'Spending time here gives me a good break from my day-to-day routine.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSF1', text: 'The setting has fascinating qualities.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSF2', text: 'My attention is drawn to many interesting things.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSF3', text: 'I would like to get to know this place better.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSF4', text: 'There is much to explore and discover here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSF5', text: 'I would like to spend more time looking at the surroundings.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCh1', text: 'There is too much going on.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCh2', text: 'It is a confusing place.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCh3', text: 'There is a great deal of distraction.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCh4', text: 'It is chaotic here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCp1', text: 'I can do things I like here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCp2', text: 'I have a sense that I belong here.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCp3', text: 'I have a sense of oneness with this setting.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCp4', text: 'Being here suits my personality.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    // ], [
      { id: 'PRSCp5', text: 'I could find ways to enjoy myself in a place like this.',
        answerOptions: [
          { label: "Very untrue of me", value: "1" },
          { label: "Untrue of me", value: "2" },
          { label: "Somewhat untrue of me", value: "3" },
          { label: "Neutral", value: "4" },
          { label: "Somewhat true of me", value: "5" },
          { label: "True of me", value: "6" },
          { label: "Very true of me", value: "7" },
        ],
      },
    ], [
    //  EQNS
      { id: 'EQNS1', text: 'I think that I would like to visit the website in the future because of the experience quality of the nature sounds.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQNS2', text: 'The nature sounds on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQNS3', text: 'I would imagine that people would learn to experience this new type of nature sounds virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQNS4', text: 'I felt confident experiencing the nature sounds on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQNS5', text: 'I felt the nature sounds were well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      // EQND
      { id: 'EQND1', text: 'I think that I would like to visit the website in the future because of the experience quality of the nature destinations.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQND2', text: 'The nature destinations on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQND3', text: 'I would imagine that people would learn to experience this new type of nature destinations virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQND4', text: 'I felt confident experiencing the nature destinations on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQND5', text: 'I felt the nature destinations were well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      // EQGM
      { id: 'EQGM1', text: 'I think that I would like to visit the website in the future because of the experience quality of the guided meditation.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQGM2', text: 'The guided meditation on the website is easy to experience virtually.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQGM3', text: 'I would imagine that people would learn to experience this new type of guided meditation virtual display in the future.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQGM4', text: 'I felt confident experiencing the guided meditation on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'EQGM5', text: 'I felt the guided meditation was well integrated with other elements to be displayed on the website.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], [
      { id: 'OEQ1', text: 'Overall, how would you rate the experience quality of the nature sound presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    // ], [
      { id: 'OEQ2', text: 'Overall, how would you rate the experience quality of the nature destination presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    // ], [
      { id: 'OEQ3', text: 'Overall, how would you rate the experience quality of the guided meditation presented on the website?',
        answerOptions: [
          { label: "Extremly good disagree", value: "1" },
          { label: "Very good", value: "2" },
          { label: "Good", value: "3" },
          { label: "Moderate", value: "4" },
          { label: "Poor", value: "5" },
          { label: "Very Poor", value: "6" },
          { label: "Extremely poor", value: "7" },
        ],
      },
    // ], [
      // FPEB
      { id: 'FPEB1', text: 'In the future, I will adequately complete assigned duties in environmentally friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'FPEB2', text: 'In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'FPEB3', text: 'In the future, I will perform tasks that are expected of me in environmentally-friendly ways.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'FPEB4', text: 'In the future, I will take a chance to get actively involved in environmental protection at work.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'FPEB5', text: 'In the future, I will take initiative to act in environmentally-friendly ways at work.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    // ], [
      { id: 'FPEB6', text: 'In the future, I will do more for the environment at work than I was expected to.',
        answerOptions: [
          { label: "Strongly disagree", value: "1" },
          { label: "Disagree", value: "2" },
          { label: "Somewhat disagree", value: "3" },
          { label: "Neither agree or disagree", value: "4" },
          { label: "Somewhat agree", value: "5" },
          { label: "Agree", value: "6" },
          { label: "Strongly agree", value: "7" },
        ],
      },
    ], 
  ];