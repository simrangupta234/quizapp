import { useState } from "react";
import "./App.css";
import QuizData from "./QuizData/QuizData";

function App(props) {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [bgColor, setBgColor] = useState("gray");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmit = () => {
    const nextQues = currentQuestion + 1;
    setcurrentQuestion(nextQues);
    if (nextQues < QuizData.length) {
      setShowScore(false);
      setBgColor("grey");
      setcurrentQuestion(nextQues);
    } else {
      setShowScore(true);
    }
  };

  function handleOptionClick(option) {
    if (QuizData[currentQuestion].answer === option) {
      setScore(score + 10);
      setBgColor("green");
    } else {
      setBgColor("red");
    }
  }

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
                key={index}
                onClick={() => {
                  handleOptionClick(option);
                }}
                className="btn  w-75 m-1"
                style={{ backgroundColor: bgColor }}
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
