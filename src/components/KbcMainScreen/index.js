import { useState } from "react";
import {
  MainContainer,
  MainHeading,
  MainEnterContainer,
  NameInput,
  StartBtn,
  StartGameCard,
  QuestionCard,
  Question,
  OptionsContainer,
  OptionCard,
  Option,
  WrongAns,
  WinGame,
} from "./styledComponents";

import Timer from "../Timer";

const questionsAndAnsList = [
  {
    question: "What is the capital of India?",
    options: [
      ["A", "New Delhi"],
      ["B", "Mumbai"],
      ["C", "Goa"],
      ["D", "Chennai"],
    ],
    ans: "New Delhi",
  },
  {
    question: "What is the capital of Maharashtra?",
    options: [
      ["A", "Pune"],
      ["B", "Mumbai"],
      ["C", "Jaipur"],
      ["D", "Goa"],
    ],
    ans: "Mumbai",
  },
  {
    question: "Who wrote India's National Anthem?",
    options: [
      ["A", "Chetan Bhagat"],
      ["B", "R K Narayan"],
      ["C", "Rabindranath Tagor"],
      ["D", "Mahatma Gandhi"],
    ],
    ans: "Rabindranath Tagor",
  },
  {
    question: "Which city is known as the Pink City of India?",
    options: [
      ["A", "Mumbai"],
      ["B", "Jaipur"],
      ["C", "Patna"],
      ["D", "Goa"],
    ],
    ans: "Jaipur",
  },
  {
    question: "Which of the following is not a state of India?",
    options: [
      ["A", "Maharashtra"],
      ["B", "Panjab"],
      ["C", "Kochi"],
      ["D", "Bihar"],
    ],
    ans: "Kochi",
  },
];

const KbcMainScreen = () => {
  const [start, setStart] = useState(false);
  const [name, setName] = useState("");
  const [questionNo, setQuestionNo] = useState(0);
  const [timeout, setTimeOut] = useState(false);
  const [isCorrectAns, setIsCorrectAns] = useState(null);
  const [status, setStatus] = useState(null);

  const onchangeName = (event) => {
    setName(event.target.value);
  };

  const onClickAns = (item) => {
    setTimeout(() => {
      if (item === questionsAndAnsList[questionNo].ans && questionNo < 4) {
        setIsCorrectAns(true);
        setQuestionNo((prev) => prev + 1);
      } else if (
        item === questionsAndAnsList[questionNo].ans &&
        questionNo === 4
      ) {
        setIsCorrectAns(true);
        setStatus(true);
      } else {
        setIsCorrectAns(false);
      }
    }, 3000);

    setTimeout(() => {
      if (item === questionsAndAnsList[questionNo].ans) {
        setIsCorrectAns(null);
      } else {
        setTimeOut(true);
      }
    }, 5000);
    console.log(isCorrectAns);
  };

  const onClickStart = () => {
    if (name.length > 0) {
      setStart(true);
    }
  };

  return (
    <MainContainer>
      <MainHeading>KBC GAME</MainHeading>
      {!start ? (
        <MainEnterContainer>
          <NameInput
            type="text"
            placeholder="Enter your name here..."
            value={name}
            onChange={onchangeName}
          />
          <StartBtn type="button" onClick={onClickStart}>
            Start
          </StartBtn>
        </MainEnterContainer>
      ) : timeout ? (
        <WrongAns>Sorry {name} , Your answer is wrong !</WrongAns>
      ) : status ? (
        <WinGame>Congratulations {name}, You Won the Game !</WinGame>
      ) : (
        <StartGameCard>
          <Timer setTimeOut={setTimeOut} questionNo={questionNo} />
          <QuestionCard>
            <Question>{questionsAndAnsList[questionNo].question}</Question>
          </QuestionCard>
          <OptionsContainer>
            {questionsAndAnsList[questionNo].options.map((each) => (
              <OptionCard onClick={() => onClickAns(each[1])}>
                <Option>
                  {each[0]}. <span>{each[1]}</span>
                </Option>
              </OptionCard>
            ))}
          </OptionsContainer>
        </StartGameCard>
      )}
    </MainContainer>
  );
};

export default KbcMainScreen;
