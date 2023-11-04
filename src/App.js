import { useState } from "react";
import "./App.css";
import QuizData from "./QuizData/QuizData";

function App(props) {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [selectOption, setSelectOption] = useState(null)
  const [bgColor, setBgColor] = useState('gray')


  const handleSubmit = () => {
    const nextQues = currentQuestion + 1;
    setcurrentQuestion(nextQues);
    if (nextQues < QuizData.length) {
      setcurrentQuestion(nextQues);
    } else {
      alert("you reacted at the end.");
    }
  };

 
  function handleOptionClick(option, isCorrect) {
    if (isCorrect === true) {
      setBgColor('green')
    } else {
      setBgColor('red')
    }
    setSelectOption(option)
  }
  return (
    
    <div className=" d-flex justify-content-center align-items-center h-100 w-100"
    >
      <div className="card d-flex flex-column justify-content-center align-items-center border border-dark p-5 w-50"
      bgColor={bgColor}>
        <h1 className=" card-header">Quiz App</h1>

        <div className="question ">{QuizData[currentQuestion].question}</div>
        <div className="options d-flex flex-column justify-content-center align-items-center w-100">
          {QuizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                handleOptionClick(option, QuizData[currentQuestion].answer.isCorrect);
              }}
              isCorrect={option.answer.isCorrect}
              bgColor={QuizData[currentQuestion].answer=== selectOption ? bgColor : 'gray'}
              className="btn  w-75 m-1"
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
    </div>
  );
}

export default App;
