import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Quiz.css";

const questions = [
  {
    question: "Who explained the mathematical rules for Zero?",
    options: [
      "Aryabhata",
      "Brahmagupta",
      "Bhaskara II",
      "Pingala"
    ],
    answer: "Brahmagupta"
  },
  {
    question: "1 Lakh is equal to:",
    options: [
      "10,000",
      "1,00,000",
      "10,00,000",
      "1,000"
    ],
    answer: "1,00,000"
  },
  {
    question: "Who wrote Aryabhatiya?",
    options: [
      "Bhaskara",
      "Pingala",
      "Aryabhata",
      "Brahmagupta"
    ],
    answer: "Aryabhata"
  },
  {
    question: "The Indian Number System uses:",
    options: [
      "Million",
      "Billion",
      "Lakh & Crore",
      "Trillion"
    ],
    answer: "Lakh & Crore"
  },
  {
    question: "Pingala is known for:",
    options: [
      "Binary concepts",
      "Geometry",
      "Calculus",
      "Statistics"
    ],
    answer: "Binary concepts"
  }
];

function Quiz() {

  const [current,setCurrent]=useState(0);
  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);

  function check(option){

      if(option===questions[current].answer){
          setScore(score+1);
      }

      if(current+1<questions.length){
          setCurrent(current+1);
      }
      else{
          setFinished(true);
      }

  }

  function restart(){
      setCurrent(0);
      setScore(0);
      setFinished(false);
  }

  return(
    <>
    <Navbar/>

    <div className="quiz-page">

      <h1>🧠 Indian Numeral Quiz</h1>

      {!finished ? (

      <div className="quiz-card">

        <h2>
          Question {current+1} / {questions.length}
        </h2>

        <h3>
          {questions[current].question}
        </h3>

        <div className="options">

        {questions[current].options.map((option)=>(
          <button
          key={option}
          onClick={()=>check(option)}
          >
            {option}
          </button>
        ))}

        </div>

      </div>

      ):(

      <div className="result-card">

        <h2>🎉 Quiz Completed</h2>

        <h1>
          {score} / {questions.length}
        </h1>

        <button onClick={restart}>
          Play Again
        </button>

      </div>

      )}

    </div>

    </>
  )

}

export default Quiz;