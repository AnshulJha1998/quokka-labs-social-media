import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import QuizEnd from "./components/QuizEnd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/end" element={<QuizEnd />} />
      </Routes>
    </Router>
  );
}

export default App;
