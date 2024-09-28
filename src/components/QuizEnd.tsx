import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const QuizEnd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const {
    fullName,
    topic,
    correct,
    incorrect,
    notAnswered,
    score,
    passed = false,
  } = data;
  return (
    <div className="quiz-end-main-container">
      <Navbar userName={fullName} />
      <image />
      {passed ? (
        <div>
          <div>CONGRATULATIONS</div>
          <div>You successfully completed the Quiz and holds</div>
          <div>Your Score</div>
          <div>{score}%</div>
          <div>Great job!</div>
        </div>
      ) : (
        <div>
          <div>You successfully completed the quiz but you need to</div>
          <div>KEEP PRACTICING!</div>
          <div className="circle">
            <div>Your Score</div>
            <div>{score}%</div>
          </div>
        </div>
      )}
      <div className="question-details">
        <div>Out of 10 question</div>
        <div className="detail-container">
          <div className="">{correct} correct</div>
          <div className="">{incorrect} incorrect</div>
          <div className="">{notAnswered} Not answered</div>
        </div>
      </div>
      <button
        onClick={() =>
          navigate("/", { state: { name: fullName, topic: topic } })
        }
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default QuizEnd;
