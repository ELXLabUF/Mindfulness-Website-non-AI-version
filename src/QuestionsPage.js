import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuestionsPage.css';

const QuestionsPage = () => {
  const questionSets = [
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [ ],
      questions: [
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
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV2', text: 'With which gender orientation do you most identify?',
          answerOptions: [
            { label: "Male", value: "1" },
            { label: "Female", value: "2" },
            { label: "Non-binary/third gender", value: "3" },
            { label: "Prefer not to say", value: "4" },
            { label: "Prefer to self-describe", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
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
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV4', text: 'Which living community do you feel at home?',
          answerOptions: [
            { label: "Rural area", value: "1" },
            { label: "Large city", value: "2" },
            { label: "Suburb near a large city (peri-urban)", value: "3" },
            { label: "Small city or town", value: "4" },
            { label: "Others", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
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
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV6', text: 'How often do you engage in outdoor activities (in nature)?',
          answerOptions: [
            { label: "Less than once per week", value: "1" },
            { label: "More than once per week", value: "2" },
            { label: "Once weekly", value: "3" },
            { label: "Once Monthly", value: "4" },
            { label: "Twice or more times per month", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
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
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV8', text: 'Humans are intimately connected to oceans, rivers, mountains, and forests',
          answerOptions: [
            { label: "Strongly disagree", value: "1" },
            { label: "Somewhat disagree", value: "2" },
            { label: "Neither agree nor disagree", value: "3" },
            { label: "Somewhat agree", value: "4" },
            { label: "Strongly agree", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV9', text: 'How many credit hours do you take this semester?',
          answerOptions: [
            { label: "Equal or less than 3", value: "1" },
            { label: "3< and =<6", value: "2" },
            { label: "6< and =<9", value: "3" },
            { label: "More than 9", value: "4" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV11', text: 'What is your academic class standing?',
          answerOptions: [
            { label: "First-year", value: "1" },
            { label: "Sophomore", value: "2" },
            { label: "Junior", value: "3" },
            { label: "Senior", value: "4" },
            { label: "Graduate or Professional", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV12', text: 'Do you have a part-time job apart from your study?',
          answerOptions: [
            { label: "Yes", value: "1" },
            { label: "No", value: "2" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV13', text: 'In the last month, how often were you in an anxious mood (felt worried, anticipation of the worst, fearful anticipation, irritable)?',
          answerOptions: [
            { label: "Never", value: "0" },
            { label: "Almost Never", value: "1" },
            { label: "Sometimes", value: "2" },
            { label: "Fairly Often", value: "3" },
            { label: "Very Often", value: "4" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV14', text: 'In the last month, how often have you found that you could not cope with all the things that you had to do?',
          answerOptions: [
            { label: "Never", value: "0" },
            { label: "Almost Never", value: "1" },
            { label: "Sometimes", value: "2" },
            { label: "Fairly Often", value: "3" },
            { label: "Very Often", value: "4" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV15', text: 'What’s your perceived level of financial burden?',
          answerOptions: [
            { label: "None", value: "0" },
            { label: "Slight", value: "1" },
            { label: "Somewhat", value: "2" },
            { label: "Significant", value: "3" },
            { label: "Unmanageable", value: "4" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV16', text: 'Thinking about the last month, on average, how many nights a week do you have a problem with your sleep?',
          answerOptions: [
            { label: "0 to 1 Night", value: "1" },
            { label: "2 Nights", value: "2" },
            { label: "3 Nights", value: "3" },
            { label: "4 Nights", value: "4" },
            { label: "5 to 7 Nights", value: "5" },
          ],
        },
      ],
    },
    {
      QsetID: 'BV',
      introText: '',
      agreementOptions: [],
      questions: [
        { id: 'BV17', text: 'Thinking about a typical night in the last month, how would you rate your sleep quality?',
          answerOptions: [
            { label: "Very good", value: "1" },
            { label: "Good", value: "2" },
            { label: "Average", value: "3" },
            { label: "Poor", value: "4" },
            { label: "Very Poor", value: "5" },
          ],
        },
      ],
    },
    // SMSPA
    {
      QsetID: 'SMSPA',
      introText: 'Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.',
      agreementOptions: [
        '0 - Not at all',
        '1 - A little',
        '2 - Moderately',
        '3 - Quite a bit',
        '4 - Very much',
      ],
      questions: [
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
    },
    // FFMQ
    {
      QsetID: 'FFMQ',
      introText: 'Please think back to how you have felt during the past 24 hours and use the1 (never or very rarely true) to 5 (very often or always true) scale provided to indicate how true the below statements are of you. Choose the number which represents your own opinion of what is generally true for you.',
      agreementOptions: [
        '0 - Never or very rarely true',
        '1 - Rarely true',
        '2 - Sometime true',
        '3 - Often true',
        '4 - Very often or always true',
      ],
      questions: [
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
      ],
    },
  ];


  const [currentQuestionSetIndex, setCurrentQuestionSetIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const currentQuestionSet = questionSets[currentQuestionSetIndex];
  const { introText, questions, agreementOptions } = currentQuestionSet;


  const handleQuestionChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };
  

  useEffect(() => {
    // Check if all questions in the current question set have been answered
    setAllQuestionsAnswered(
      questions.every((question) => responses[question.id])
    );
  }, [responses, questions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allResponses = {...responses};
    console.log("allResponses-----", allResponses);
    
    // navigate('/meditation', { state: { videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: "nature sound", benefits:"relax" } });

    try {
      const response = await fetch('https://minfulness-api.ue.r.appspot.com/recommendVideo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allResponses)
      });
  
      if (!response.ok) {
        throw new Error('Failed to get video URL');
      }
  
      const data = await response.json();
      const { videoUrl } = data;
  
      navigate('/meditation', {
        state: {
          videoUrl,
          description: "nature sound", benefits:"relax", preSurveyResponses: allResponses,
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
        questions.map(({ id }) => [id, prevResponses[id] || null])
      )
    }));
    setCurrentQuestionSetIndex((prevIndex) => prevIndex + 1);
    window.scrollTo(0, 0);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (currentQuestionSetIndex > 0) {
      setCurrentQuestionSetIndex((prevIndex) => prevIndex - 1);
    } else {
      navigate(-1);
    }
  };

  return (
<form onSubmit={handleSubmit} className='form-questions'>
    <div className="mcq-question">
      <p>{introText}</p>
      <div className="mcq-agreement">
        {agreementOptions.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div>
    </div>
    {questions.map((question) => (
      <Question
        key={question.id}
        questionText={question.text}
        answerOptions={question.answerOptions}
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