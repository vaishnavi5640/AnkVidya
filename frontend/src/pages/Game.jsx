import Footer from "../components/Footer";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Game.css";

const questions = [
  {
    number: "1,00,000",
    answer: "1 Lakh",
  },
  {
    number: "10,00,000",
    answer: "10 Lakh",
  },
  {
    number: "1,00,00,000",
    answer: "1 Crore",
  },
  {
    number: "5,00,000",
    answer: "5 Lakh",
  },
  {
    number: "2,50,00,000",
    answer: "2.5 Crore",
  },
];

function Game() {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (
      input.trim().toLowerCase() ===
      questions[current].answer.toLowerCase()
    ) {
      setScore(score + 10);
      setMessage("✅ Correct!");
    } else {
      setMessage(
        `❌ Correct Answer: ${questions[current].answer}`
      );
    }

    setTimeout(() => {
      setMessage("");

      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setInput("");
      } else {
        alert(`Game Over!\nYour Score: ${score + (input.trim().toLowerCase() === questions[current].answer.toLowerCase() ? 10 : 0)}`);
      }
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <div className="game-page">

        <h1>🎮 Indian Number Challenge</h1>

        <p className="game-subtitle">
          Convert the number into the correct Indian Number name.
        </p>

        <div className="game-card">

          <h2>{questions[current].number}</h2>

          <input
            type="text"
            placeholder="Example: 1 Lakh"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={checkAnswer}>
            Submit
          </button>

          {message && (
            <p className="result">
              {message}
            </p>
          )}

          <h3>
            Score : {score}
          </h3>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Game;