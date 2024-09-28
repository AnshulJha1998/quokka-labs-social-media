import React, { useEffect, useState } from "react";
import { QUESTION_CATEGORY_TYPE, SELECT_BOX_ARG } from "../utils/types";
import { Navbar, SelectCheckbox } from "../components";
import { QuizData } from "../utils/quizData";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  //   const { name, topic } = data;

  const [fullName, setFullName] = useState<string>("");
  const [page, setPage] = useState<1 | 2>(1);
  const [selectedTopic, setSelectedTopic] =
    useState<QUESTION_CATEGORY_TYPE | null>(null);
  const [selectedOption, setSelectedOption] = useState<SELECT_BOX_ARG | null>(
    null
  );
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [unansweredCount, setUnansweredCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [passed, setPassed] = useState<boolean>(false);

  const handleSelect = (args: SELECT_BOX_ARG) => {
    const { id: questionId, topic } = args;
    const data = QuizData.categories.find((item) => item.id === questionId);

    if (!data) {
      console.log("No Questions found for the matching ID");
      return alert("Some error occurred");
    }

    setSelectedTopic({
      id: args.id,
      name: args.topic,
      questions: data.questions,
    });
  };

  useEffect(() => {
    if (timerActive) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSkip();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerActive]);

  const handleSkip = () => {
    console.log(
      currentQuestionIndex,
      (selectedTopic?.questions.length || 0) - 1
    );
    setUnansweredCount((prev) => prev + 1);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < (selectedTopic?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      setTimeLeft(10);
    } else {
      navigate("/end", {
        state: {
          fullName: fullName,
          topic: selectedTopic,
          correct: correctCount,
          incorrect: incorrectCount,
          notAnswered: unansweredCount,
          score: totalScore,
          passed: passed,
        },
      });
    }
  };

  const startQuiz = () => {
    setPage(2);
    setTimerActive(true);
  };

  const handleExitQuiz = () => {
    setPage(1);
    setTimerActive(false);
  };

  return (
    <div className="main-quiz-container ">
      <Navbar page={page} handleExitQuiz={handleExitQuiz} />
      {page === 1 ? (
        <div className="flex justify-center items-center flex-col">
          <div className="text-[xxx-large] mb-4">
            Welcome to{" "}
            <span className="text-magenta">
              QUIZ<span className="font-bold">Mania</span>
            </span>
          </div>

          <div className="form-container w-[30%]">
            <div className="info-box bg-[#e5e7eb] p-4 rounded-[7px] mb-4">
              Please read all the rules about this quiz before you start.
              <span className="text-magenta">Quiz rules</span>
            </div>
            <div className="quiz-details">
              <div className="mb-4">
                <label htmlFor="fullName ">Full name</label>
                <input
                  className="border-[1px] border-[solid] border-[#e5e7eb] rounded-[7px] p-4 w-full mt-3"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label>Please select a topic to continue</label>
                {QuizData.categories.map((item) => {
                  return (
                    <div key={item.id}>
                      <SelectCheckbox
                        value={item.name}
                        quizTopic={item.name}
                        id={item.id}
                        onCheckboxSelect={handleSelect}
                        color="magenta"
                        size="small"
                        isChecked={selectedTopic?.id === item.id}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                disabled={!selectedTopic?.id || !fullName}
                onClick={startQuiz}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestionIndex + 1}:</h2>
          <p>{selectedTopic?.questions[currentQuestionIndex].question}</p>
          <ul>
            {selectedTopic?.questions[currentQuestionIndex].options.map(
              (option, index) => (
                <li key={index}>{option}</li>
              )
            )}
          </ul>
          <p>Time left: {timeLeft} seconds</p>
          <div>
            <button onClick={nextQuestion}>Next</button>
            <button onClick={handleSkip}>Skip this question</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
