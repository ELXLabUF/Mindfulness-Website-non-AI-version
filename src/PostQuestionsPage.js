import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuestionsPage.css';

const PostQuestionsPage = () => {
  const questionSets = [
    {
      QsetID: 'mDES',
      introText: 'Based on your personal feelings gained from the above presented video, please indicate the greatest amount that you’ve experienced each of the following feelings using the 0-4 scale below.',
      agreementOptions: [
        '0 - Not at all',
        '1 - A little bit',
        '2 - Moderately',
        '3 - Quite a bit',
        '4 - Extremely',
      ],
      questions: [
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
      ],
    },
    {
      QsetID: 'PRS',
      introText: 'Based on your experience of the video watching, please indicate the extent of how each of the items reflects you.',
      agreementOptions: [
        '1 - Very untrue of me',
        '2 - Untrue of me',
        '3 - Somewhat untrue of me',
        '4 - Neutral',
        '5 - Somewhat true of me',
        '6 - True of me',
        '7 - Very true of me',
      ],
      questions: [
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
      ],
    },
    {
      QsetID: 'EQNS',
      introText: 'Please indicate the extent of agreement for the perception of experience quality of nature sounds based on your experience of the video watching.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree or disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
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
      ],
    },
    {
      QsetID: 'EQND',
      introText: 'Please indicate the extent of agreement for the perception of experience quality of nature destinations based on your experience of the video watching.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree or disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
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
      ],
    },
    {
      QsetID: 'EQGM',
      introText: 'Please indicate the extent of agreement for the perception of experience quality of guided meditation based on your experience of the video watching.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree or disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
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
      ],
    },
    {
      QsetID: 'OEQ',
      introText: 'Please indicate your level of feeling based on your experience of the video watching.',
      agreementOptions: [
        '1 - Extremely poor',
        '2 - Very poor',
        '3 - Poor',
        '4 - Moderate',
        '5 - Good',
        '6 - Very good',
        '7 - Extremely good',
      ],
      questions: [
        { id: 'OEQ1', text: 'Overall, how would you rate the experience quality of the nature sound presented on the website?',
          answerOptions: [
            { label: "Extremely poor", value: "1" },
            { label: "Very poor", value: "2" },
            { label: "Poor", value: "3" },
            { label: "Moderate", value: "4" },
            { label: "Good", value: "5" },
            { label: "Very Good", value: "6" },
            { label: "Extremely Good", value: "7" },
          ],
        },
      // ], [
        { id: 'OEQ2', text: 'Overall, how would you rate the experience quality of the nature destination presented on the website?',
          answerOptions: [
            { label: "Extremely poor", value: "1" },
            { label: "Very poor", value: "2" },
            { label: "Poor", value: "3" },
            { label: "Moderate", value: "4" },
            { label: "Good", value: "5" },
            { label: "Very Good", value: "6" },
            { label: "Extremely Good", value: "7" },
          ],
        },
      // ], [
        { id: 'OEQ3', text: 'Overall, how would you rate the experience quality of the guided meditation presented on the website?',
          answerOptions: [
            { label: "Extremely poor", value: "1" },
            { label: "Very poor", value: "2" },
            { label: "Poor", value: "3" },
            { label: "Moderate", value: "4" },
            { label: "Good", value: "5" },
            { label: "Very Good", value: "6" },
            { label: "Extremely Good", value: "7" },
          ],
        },
      ],
    },
    {
      QsetID: 'FPEB',
      introText: 'Please indicate the extent of agreement based on your experience of the video watching.',
      agreementOptions: [
        '1 - Strongly disagree',
        '2 - Disagree',
        '3 - Somewhat disagree',
        '4 - Neither agree or disagree',
        '5 - Somewhat agree',
        '6 - Agree',
        '7 - Strongly agree',
      ],
      questions: [
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
    },
    // SMSPA
    {
      QsetID: 'pSMSPA',
      introText: 'Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.',
      agreementOptions: [
        '0 - Not at all',
        '1 - A little',
        '2 - Moderately',
        '3 - Quite a bit',
        '4 - Very much',
      ],
      questions: [
        { id: 'pSMSPA1', text: 'I was aware of different emotions that arose in me.', 
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA2', text: 'I noticed pleasant and unpleasant emotions.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA3', text: 'I noticed pleasant and unpleasant thoughts.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA4', text: 'I noticed emotions come and go.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA5', text: 'I noticed thoughts come and go.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA6', text: 'It was interesting to see the patterns of my thinking.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA7', text: 'I focused on the movement of my body.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA8', text: 'I felt present in my body.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA9', text: 'I listened to what my body was telling me.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA10', text: 'I was aware of how my body felt.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA11', text: 'I noticed the sensations in my body.',
          answerOptions: [
            { label: "Not at all", value: "0" },
            { label: "A little", value: "1" },
            { label: "Moderately", value: "2" },
            { label: "Quite a bit", value: "3" },
            { label: "Very much", value: "4" },
          ],
        },
      // ], [
        { id: 'pSMSPA12', text: 'I was in tune with how hard my muscles were working.',
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
    // FFMQ1
    {
      QsetID: 'pFFMQ',
      introText: 'Please think back to how you have felt during the past 24 hours and use the1 (never or very rarely true) to 5 (very often or always true) scale provided to indicate how true the below statements are of you. Choose the number which represents your own opinion of what is generally true for you.',
      agreementOptions: [
        '0 - Never or very rarely true',
        '1 - Rarely true',
        '2 - Sometime true',
        '3 - Often true',
        '4 - Very often or always true',
      ],
      questions: [
        { id: 'pFFMQ1', text: 'When I take a shower or a bath, I stay alert to the sensations of water on my body.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ2', text: 'I’m good at finding words to describe my feelings.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
          },
        { id: 'pFFMQ3', text: 'I don’t pay attention to what I’m doing because I’m dreaming, worrying, or otherwise distracted.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ4', text: 'I believe some of my thoughts are abnormal or bad and I shouldn’t think that way.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
      
        { id: 'pFFMQ5', text: 'When I have distressing thoughts or images, I “step back” and am aware of the thought or image without getting taken over by it.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ6', text: 'I notice how foods and drinks affect my thoughts, bodily sensations, and emotions.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
      
        { id: 'pFFMQ7', text: 'I have trouble thinking of the right words to express how I feel about things.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
      
        { id: 'pFFMQ8', text: 'I do jobs or tasks automatically without being aware of what I’m doing.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
      
        { id: 'pFFMQ9', text: 'I think some of my emotions are bad or inappropriate and I shouldn’t feel them.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
      
        { id: 'pFFMQ10', text: 'When I have distressing thoughts or images I am able just to notice them without reacting.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ11', text: 'I pay attention to sensations, such as the wind in my hair or sun on my face.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ12', text: 'Even when I’m feeling terribly upset I can find a way to put it into words.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ13', text: 'I find myself doing things without paying attention.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ14', text: 'I tell myself I shouldn’t be feeling the way I’m feeling.',
          answerOptions: [
            { label: "Never or very rarely true", value: "1" },
            { label: "Rarely true", value: "2" },
            { label: "Sometime true", value: "3" },
            { label: "Often true", value: "4" },
            { label: "Very often or always true", value: "5" },
          ],
        },
        { id: 'pFFMQ15', text: 'When I have distressing thoughts or images I just notice them and let them go.',
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
  const { nextPage, videoUrl } = location.state;

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

    const allResponses = {
      ...responses,
      videoUrl: videoUrl
    };

    console.log("allResponses-----", allResponses);

    try {
      const response = await fetch('https://minfulness-api.ue.r.appspot.com/saveNonAISurveyResponse', {
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
      const { unique_id } = data;

      console.log("unique-id-----", unique_id);
  
      navigate(nextPage, {
        state: {
          videoUrl: videoUrl,
          description: "nature sound", benefits:"relax", unique_id: unique_id
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
      setResponses({});
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

export default PostQuestionsPage;


