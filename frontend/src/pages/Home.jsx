import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";


function Home() {


  const facts = [
    "Zero as a number was first explained by Brahmagupta.",
    "The Indian Number System uses Lakh and Crore instead of Million and Billion.",
    "Aryabhata calculated an accurate approximation of π in the 5th century.",
    "Pingala described binary-like concepts centuries before computers.",
    "The decimal place-value system originated in ancient India.",
    "Indian numerals spread to the world through Arab scholars."
  ];


  // Welcome popup state FIXED
  const [showWelcome, setShowWelcome] = useState(true);


  const [fact, setFact] = useState(facts[0]);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");


  const [students, setStudents] = useState(0);
  const [lessons, setLessons] = useState(0);
  const [quiz, setQuiz] = useState(0);



  useEffect(() => {


    let s = 0;
    let l = 0;
    let q = 0;


    const timer = setInterval(() => {


      if (s < 5000) {
        s++;
        setStudents(s);
      }


      if (l < 4) {
        l++;
        setLessons(l);
      }


      if (q < 10) {
        q++;
        setQuiz(q);
      }


    }, 1);



    return () => clearInterval(timer);


  }, []);




  const randomFact = () => {

    const index = Math.floor(Math.random() * facts.length);

    setFact(facts[index]);

  };




  const checkAnswer = () => {


    if(answer.trim() === "100000"){

      setMessage("✅ Correct! 1 Lakh = 100000");

    }
    else{

      setMessage("❌ Try Again!");

    }


  };



  return (

    <>

      <Navbar />


      {showWelcome && (

        <div className="welcome-popup">

          <h2>
            🙏 Welcome to AnkVidya
          </h2>


          <p>
            Explore India's rich mathematical heritage through interactive learning.
          </p>


          <button onClick={() => setShowWelcome(false)}>
            Start Learning
          </button>


        </div>

      )}



      <section className="home">


        <div className="hero">


          <div className="hero-text">


            <span className="hero-tag">
              🇮🇳 Indian Knowledge System
            </span>



            <h1>
              AnkVidya
            </h1>



            <h2>
              Discover India's Mathematical Heritage
            </h2>



            <p>
              Explore the fascinating journey of the Indian Numeral System,
              learn from legendary mathematicians, convert numbers instantly,
              practice through quizzes and ask questions with your AI Tutor.
            </p>



            <div className="button-group">


              <Link to="/learn">

                <button className="primary-btn">
                  📚 Start Learning
                </button>

              </Link>



              <Link to="/aitutor">

                <button className="secondary-btn">
                  🤖 AI Tutor
                </button>

              </Link>


            </div>


          </div>



          <div className="hero-image">


            <img
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=700"
              alt="Ancient Mathematics"
            />


          </div>


        </div>
                <section className="stats">


          <div className="stat-card">

            <h2>
              {students}+
            </h2>

            <p>
              Years of Mathematical Heritage
            </p>

          </div>



          <div className="stat-card">

            <h2>
              {lessons}
            </h2>

            <p>
              Legendary Indian Mathematicians
            </p>

          </div>



          <div className="stat-card">

            <h2>
              {quiz}+
            </h2>

            <p>
              Interactive Learning Modules
            </p>

          </div>



          <div className="stat-card">

            <h2>
              100%
            </h2>

            <p>
              Free Learning Experience
            </p>

          </div>


        </section>




        <section className="features">


          <h2 className="section-title">
            Why Choose AnkVidya?
          </h2>



          <div className="feature-grid">


            <div className="feature-card">

              <h3>
                📖 Learn
              </h3>

              <p>
                Study the complete history of the Indian Number System.
              </p>

            </div>




            <div className="feature-card">

              <h3>
                🔢 Number Explorer
              </h3>

              <p>
                Convert numbers into Indian, International, Devanagari and Brahmi formats.
              </p>

            </div>





            <div className="feature-card">

              <h3>
                👨‍🏫 Great Mathematicians
              </h3>

              <p>
                Learn about Aryabhata, Brahmagupta, Bhaskara II and Pingala.
              </p>

            </div>





            <div className="feature-card">

              <h3>
                🧠 Quiz
              </h3>

              <p>
                Test your understanding through interactive quizzes.
              </p>

            </div>





            <div className="feature-card">

              <h3>
                🤖 AI Tutor
              </h3>

              <p>
                Ask doubts anytime and receive instant explanations.
              </p>

            </div>





            <div className="feature-card">

              <h3>
                🏛️ Indian Knowledge System
              </h3>

              <p>
                Experience India's ancient mathematical brilliance in a modern way.
              </p>

            </div>


          </div>


        </section>





        <section className="timeline-preview">


          <h2 className="section-title">
            Journey Through Time
          </h2>




          <div className="timeline-line">


            <div className="time-box">

              <h3>
                300 BCE
              </h3>

              <p>
                Brahmi Numerals
              </p>

            </div>





            <div className="time-box">

              <h3>
                499 CE
              </h3>

              <p>
                Aryabhata
              </p>

            </div>





            <div className="time-box">

              <h3>
                628 CE
              </h3>

              <p>
                Brahmagupta
              </p>

            </div>





            <div className="time-box">

              <h3>
                1114 CE
              </h3>

              <p>
                Bhaskara II
              </p>

            </div>





            <div className="time-box">

              <h3>
                Today
              </h3>

              <p>
                Modern Indian Number System
              </p>

            </div>


          </div>


        </section>
                <section className="why-section">


          <h2>
            ✨ Why Choose AnkVidya?
          </h2>



          <div className="why-grid">


            <div className="why-card">

              <div className="why-icon">
                📖
              </div>

              <h3>
                Interactive Learning
              </h3>

              <p>
                Learn through engaging lessons instead of long textbooks.
              </p>

            </div>





            <div className="why-card">

              <div className="why-icon">
                🧠
              </div>

              <h3>
                Fun Quizzes
              </h3>

              <p>
                Test your knowledge with exciting quizzes and instant results.
              </p>

            </div>





            <div className="why-card">

              <div className="why-icon">
                🤖
              </div>

              <h3>
                AI Tutor
              </h3>

              <p>
                Ask questions anytime and receive intelligent explanations.
              </p>

            </div>





            <div className="why-card">

              <div className="why-icon">
                🏛️
              </div>

              <h3>
                Indian Heritage
              </h3>

              <p>
                Explore India's rich mathematical history in an enjoyable way.
              </p>

            </div>


          </div>


        </section>





        <section className="fact-section">


          <h2>
            💡 Did You Know?
          </h2>



          <div className="fact-display">


            <p>
              {fact}
            </p>



            <button onClick={randomFact}>

              Show Another Fact

            </button>


          </div>


        </section>





        <section className="challenge-section">


          <h2>
            🏆 Today's Challenge
          </h2>




          <div className="challenge-card">


            <h3>
              How many digits are there in <strong>1 Lakh</strong>?
            </h3>




            <input

              type="text"

              placeholder="Enter your answer"

              value={answer}

              onChange={(e)=>setAnswer(e.target.value)}

            />





            <button onClick={checkAnswer}>

              Check Answer

            </button>





            {message && (

              <p className="challenge-result">

                {message}

              </p>

            )}



          </div>


        </section>




      </section>




      <Footer />


    </>

  );

}



export default Home;