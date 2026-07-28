import Footer from "../components/Footer";
import { useState, useEffect } from "react";
const [timeLeft, setTimeLeft] = useState(30);
import Navbar from "../components/Navbar";
import "../styles/Game.css";
const questions = [
  { number: "1,00,000", answer: "1 Lakh" },
  { number: "2,00,000", answer: "2 Lakh" },
  { number: "5,00,000", answer: "5 Lakh" },
  { number: "10,00,000", answer: "10 Lakh" },
  { number: "15,00,000", answer: "15 Lakh" },
  { number: "1,00,00,000", answer: "1 Crore" },
  { number: "2,00,00,000", answer: "2 Crore" },
  { number: "5,00,00,000", answer: "5 Crore" },
  { number: "10,00,00,000", answer: "10 Crore" },
  { number: "2,50,00,000", answer: "2.5 Crore" }
];

function Game() {
  const [current, setCurrent] = useState(
  Math.floor(Math.random() * questions.length)
);
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
        setCurrent(
  Math.floor(Math.random() * questions.length)
);
        setInput("");
      } else {
        alert(`Game Over!\nYour Score: ${score + (input.trim().toLowerCase() === questions[current].answer.toLowerCase() ? 10 : 0)}`);
      }
    }, 1500);
  };
useEffect(() => {

  if (timeLeft === 0) {
    alert("⏰ Time's Up!");
    window.location.reload();
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearTimeout(timer);

}, [timeLeft]);
  return (
    <>
      <Navbar />

      <div className="game-page">

        <h1>🎮 Indian Number Challenge</h1>

        <p className="game-subtitle">
          Convert the number into the correct Indian Number name.
        </p>

        <div className="game-card">
<h3 className="timer">
  ⏳ Time Left: {timeLeft}s
</h3>
          <h2>{questions[current].number}</h2>

          <input
            type="text"
            placeholder="Example: 1 Lakh"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
<button
className="play-btn"
onClick={()=>window.location.reload()}
>

🔄 Play Again

</button>
          {message && (
            <p className="result">
              {message}
            </p>
          )}

          <h3>
            Score : {score}
          </h3>
          <h1>{score}</h1>

<h2>
  {score >= 80
    ? "🥇 Gold Medal"
    : score >= 50
    ? "🥈 Silver Medal"
    : "🥉 Bronze Medal"}
</h2>
<p>

{score >= 80
? "Excellent! You are an Indian Numeral Master!"

: score >= 50
? "Great Job! Keep Learning!"

: "Nice Try! Practice Again to Improve!"}

</p>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Game;