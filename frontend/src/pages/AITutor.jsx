import Footer from "../components/Footer";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/AITutor.css";

function AITutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const replies = {
    "who invented zero":
      "Zero was mathematically explained by Brahmagupta in the 7th century.",
    "what is lakh":
      "1 Lakh = 100,000.",
    "what is crore":
      "1 Crore = 10,000,000.",
    "who was aryabhata":
      "Aryabhata was a famous Indian mathematician and astronomer who wrote the Aryabhatiya.",
    "who was brahmagupta":
      "Brahmagupta introduced rules for zero and negative numbers.",
    "what is indian number system":
      "The Indian Number System uses Ones, Tens, Hundreds, Thousands, Lakhs and Crores.",
  };

  const askQuestion = () => {
    const q = question.toLowerCase().trim();

    if (replies[q]) {
      setAnswer(replies[q]);
    } else {
      setAnswer(
        "Sorry! I don't know that yet. Try asking about Zero, Lakh, Crore, Aryabhata or Brahmagupta."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="ai-page">

        <h1>🤖 AI Tutor</h1>

        <p>
          Ask anything about the Indian Number System.
        </p>

        <div className="chat-box">

          <div className="bot-message">
            👋 Hello! Ask me something about Indian Mathematics.
          </div>

          {answer && (
            <div className="bot-reply">
              🤖 {answer}
            </div>
          )}

          <input
            type="text"
            placeholder="Example: Who invented Zero?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={askQuestion}>
            Ask
          </button>

        </div>

        <div className="suggestions">

          <h3>Suggested Questions</h3>

          <ul>
            <li>Who invented Zero?</li>
            <li>What is Lakh?</li>
            <li>What is Crore?</li>
            <li>Who was Aryabhata?</li>
            <li>Who was Brahmagupta?</li>
          </ul>

        </div>

      </div>
<Footer />
    </>
  );
}

export default AITutor;