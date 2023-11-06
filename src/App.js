import { useEffect, useState } from "react";
import "./App.css";
import QuizData from "./QuizData/QuizData";

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmit = () => {
    const nextQues = currentQuestion + 1;
    setcurrentQuestion(nextQues);
    if (nextQues < QuizData.length) {
      setShowScore(false);
      setIsDisabled(false);
      setcurrentQuestion(nextQues);
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option, index, e) => {
    if (QuizData[currentQuestion].answer === option) {
      setScore(score + 10);
      document.getElementById(e.target.id).style.backgroundColor = "green";
      setIsDisabled(true);
    } else {
      document.getElementById(e.target.id).style.backgroundColor = "red";
      setIsDisabled(true);
    }
  };

  
  return (
    <div className=" d-flex justify-content-center align-items-center h-100 w-100 bg-info">
      {showScore ? (
        <div className="card">
          <div className="card-body">
            <h1>Your score is {score}.</h1>
          </div>
        </div>
      ) : (
        <div className="card d-flex flex-column justify-content-center align-items-center p-5 w-50">
          <h1>Quiz App</h1>

          <div className="question m-2">
            <h4>{QuizData[currentQuestion].question}</h4>
          </div>
          <div className="options d-flex flex-column justify-content-center align-items-center w-100">
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={option}
                id={option}
                disabled={isDisabled}
                onClick={(e) => {
                  handleOptionClick(option, index, e);
                }}
                className="btn  w-75 m-1"
                style={{ backgroundColor: "gray" }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="submit btn btn-dark w-75 m-1"
            onClick={() => {
              handleSubmit();
            }}
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
