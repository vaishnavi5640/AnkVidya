import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Quiz.css";

const questions = [
  {
    question: "Who is known as the Father of Indian Mathematics?",
    options: ["Aryabhata", "Brahmagupta", "Bhaskara II", "Pingala"],
    answer: "Aryabhata",
  },
  {
    question: "Which number system uses Lakh and Crore?",
    options: [
      "Roman Number System",
      "Indian Number System",
      "Binary Number System",
      "Decimal Number System",
    ],
    answer: "Indian Number System",
  },
  {
    question: "Who gave mathematical rules for Zero?",
    options: ["Aryabhata", "Pingala", "Brahmagupta", "Bhaskara II"],
    answer: "Brahmagupta",
  },
  {
    question: "Brahmi numerals belong to which civilization?",
    options: ["Ancient India", "China", "Egypt", "Rome"],
    answer: "Ancient India",
  },
  {
    question: "How are digits grouped in the Indian Number System?",
    options: ["3-3-3", "2-2-2", "3-2-2", "4-4-4"],
    answer: "3-2-2",
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <>
      <Navbar />

      <div className="quiz-container">
        {!finished ? (
          <>
            <h1>🧠 AnkVidya Quiz</h1>

            <div className="progress">
              Question {current + 1} of {questions.length}
            </div>

            <div className="quiz-card">
              <h2>{questions[current].question}</h2>

              {questions[current].options.map((option) => (
                <button
                  key={option}
                  className="option-btn"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="result-card">
            <h1>🎉 Quiz Completed!</h1>

            <h2>
              Your Score: {score} / {questions.length}
            </h2>

            {score === 5 && (
              <p className="excellent">
                🌟 Excellent! You have mastered the basics of the Indian
                Number System.
              </p>
            )}

            {score >= 3 && score < 5 && (
              <p className="good">
                👍 Good Job! Keep learning with AnkVidya.
              </p>
            )}

            {score < 3 && (
              <p className="retry">
                📚 Keep practicing and try again!
              </p>
            )}

            <button
              className="restart-btn"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;