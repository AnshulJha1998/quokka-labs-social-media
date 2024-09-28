import React from "react";

const Navbar = ({
  userName,
  page,
  handleExitQuiz,
}: {
  userName?: string;
  page?: number;
  handleExitQuiz?: () => void;
}) => {
  const handleRightStuff = () => {
    if (page === 2 && handleExitQuiz)
      return <button onClick={handleExitQuiz}>Exit Quiz</button>;

    if (userName) return <div>{userName}</div>;
  };
  return (
    <div
      className="py-4 px-40 text-magenta text-[x-large] flex justify-between"
      style={{ borderBottom: "1px solid #e5e7eb" }}
    >
      <p>
        QUIZ<span className="font-bold">Mania</span>
      </p>
      <p>{handleRightStuff()}</p>
    </div>
  );
};

export default Navbar;
