import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Game.css";


function Game() {


  const questions = [
    {
      question: "Who explained the rules of zero?",
      answer: "brahmagupta"
    },
    {
      question: "1 Lakh equals how many?",
      answer: "100000"
    },
    {
      question: "Who wrote Aryabhatiya?",
      answer: "aryabhata"
    },
    {
      question: "1 Crore equals how many?",
      answer: "10000000"
    },
    {
      question: "Which system uses Lakh and Crore?",
      answer: "indian number system"
    }
  ];



  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [message, setMessage] = useState("");

  const [gameOver, setGameOver] = useState(false);



  const checkAnswer = () => {


    const userAnswer = answer.toLowerCase().trim();



    if(userAnswer === questions[currentQuestion].answer){

      setScore(score + 1);

      setMessage("✅ Correct Answer!");

    }
    else{

      setMessage(
        "❌ Wrong Answer! Correct answer: " +
        questions[currentQuestion].answer
      );

    }



    setAnswer("");



    setTimeout(()=>{


      if(currentQuestion < questions.length - 1){

        setCurrentQuestion(currentQuestion + 1);

        setMessage("");

      }
      else{

        setGameOver(true);

      }


    },1500);


  };




  const restartGame = () => {


    setCurrentQuestion(0);

    setScore(0);

    setAnswer("");

    setMessage("");

    setGameOver(false);


  };




  return (

    <>

      <Navbar />


      <div className="game-page">


        <h1>
          🎮 AnkVidya Math Challenge
        </h1>


        {!gameOver ? (

          <div className="game-card">


            <h2>
              Question {currentQuestion + 1} / {questions.length}
            </h2>



            <h3>
              {questions[currentQuestion].question}
            </h3>




            <input

              type="text"

              placeholder="Enter your answer"

              value={answer}

              onChange={(e)=>setAnswer(e.target.value)}

              onKeyDown={(e)=>{

                if(e.key==="Enter"){

                  checkAnswer();

                }

              }}

            />




            <button onClick={checkAnswer}>

              Submit Answer

            </button>




            {message && (

              <p className="game-message">

                {message}

              </p>

            )}




            <h3>

              Score: {score}

            </h3>



          </div>


        ) : (


          <div className="game-card">


            <h2>
              🎉 Game Completed!
            </h2>


            <h1>
              Your Score: {score}/{questions.length}
            </h1>



            <button onClick={restartGame}>

              Play Again

            </button>


          </div>


        )}



      </div>


      <Footer />


    </>

  );

}



export default Game;