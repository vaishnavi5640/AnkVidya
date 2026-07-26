import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/AITutor.css";

const knowledgeBase = {
  "what is indian number system":
    "The Indian Number System groups digits as Ones, Tens, Hundreds, Thousands, Lakhs, Crores, and beyond. Example: 1,23,45,678.",

  "who invented zero":
    "Brahmagupta is credited with giving mathematical rules for zero in the 7th century.",

  "who was aryabhata":
    "Aryabhata was a great Indian mathematician and astronomer who wrote the Aryabhatiya and calculated the value of π.",

  "what are brahmi numerals":
    "Brahmi numerals are among the earliest numeral symbols used in ancient India and are the ancestors of many modern numeral systems.",

  "difference between lakh and million":
    "1 Lakh = 100,000 while 1 Million = 1,000,000.",

  "who was bhaskara":
    "Bhaskara II was an Indian mathematician known for his work in algebra, arithmetic, and astronomy.",

  "what is place value":
    "Place value tells us the value of a digit based on its position in a number."
};

function AITutor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = () => {
    const q = question.toLowerCase().trim();

    if (knowledgeBase[q]) {
      setAnswer(knowledgeBase[q]);
    } else {
      setAnswer(
        "I don't have an answer for that yet. Try asking about Aryabhata, Zero, Brahmi Numerals, Place Value, or the Indian Number System."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="ai-page">
        <h1>🤖 AI Tutor</h1>

        <p className="subtitle">
          Ask questions about the Indian Knowledge System.
        </p>

        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askQuestion}>
          Ask AI
        </button>

        {answer && (
          <div className="answer-box">
            <h2>Answer</h2>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AITutor;