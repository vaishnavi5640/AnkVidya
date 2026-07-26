import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">

        <div className="hero">

          <div className="hero-text">

            <span className="tag">
              🇮🇳 Indian Knowledge System
            </span>

            <h1>AnkVidya</h1>

            <h2>
              Discover the Beauty of the Ancient Indian Number System
            </h2>

            <p>
              Learn the evolution of Indian numerals through interactive lessons,
              AI guidance, quizzes, mathematicians, and engaging activities.
              Explore how India shaped the world's understanding of numbers.
            </p>

            <div className="button-group">
              <Link to="/learn">
                <button className="primary-btn">
                  🚀 Start Learning
                </button>
              </Link>

              <Link to="/explorer">
                <button className="secondary-btn">
                  🔢 Explore Numbers
                </button>
              </Link>
            </div>

          </div>

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Learning"
            />

          </div>

        </div>

        <section className="features">

          <div className="card">
            <div className="icon">📚</div>

            <h3>Learn</h3>

            <p>
              Understand the origin and evolution of the Indian Number System.
            </p>
          </div>

          <div className="card">
            <div className="icon">🔢</div>

            <h3>Number Explorer</h3>

            <p>
              Convert numbers into Indian, International, Brahmi and Devanagari formats.
            </p>
          </div>

          <div className="card">
            <div className="icon">🧠</div>

            <h3>Quiz</h3>

            <p>
              Test your knowledge with interactive quizzes and earn a certificate.
            </p>
          </div>

          <div className="card">
            <div className="icon">🤖</div>

            <h3>AI Tutor</h3>

            <p>
              Ask questions about Indian mathematics and receive instant guidance.
            </p>
          </div>

          <div className="card">
            <div className="icon">👨‍🏫</div>

            <h3>Great Mathematicians</h3>

            <p>
              Learn about Aryabhata, Brahmagupta, Bhaskara II and other pioneers.
            </p>
          </div>

          <div className="card">
            <div className="icon">🏛️</div>

            <h3>Indian Heritage</h3>

            <p>
              Discover how India's mathematical innovations influenced the world.
            </p>
          </div>

        </section>

      </section>
    </>
  );
}

export default Home;