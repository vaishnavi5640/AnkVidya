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

            <span className="hero-tag">
              🇮🇳 Indian Knowledge System
            </span>

            <h1>AnkVidya</h1>

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
            <h2>2000+</h2>
            <p>Years of Mathematical Heritage</p>
          </div>

          <div className="stat-card">
            <h2>4</h2>
            <p>Interactive Learning Modules</p>
          </div>

          <div className="stat-card">
            <h2>AI</h2>
            <p>Smart Tutor Assistance</p>
          </div>

          <div className="stat-card">
            <h2>∞</h2>
            <p>Knowledge to Explore</p>
          </div>

        </section>

        <section className="features">

          <h2 className="section-title">
            Why Choose AnkVidya?
          </h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>📖 Learn</h3>
              <p>
                Study the complete history of the Indian Number System.
              </p>
            </div>

            <div className="feature-card">
              <h3>🔢 Number Explorer</h3>
              <p>
                Convert numbers into Indian, International, Devanagari and Brahmi formats.
              </p>
            </div>

            <div className="feature-card">
              <h3>👨‍🏫 Great Mathematicians</h3>
              <p>
                Learn about Aryabhata, Brahmagupta, Bhaskara II and Pingala.
              </p>
            </div>

            <div className="feature-card">
              <h3>🧠 Quiz</h3>
              <p>
                Test your understanding through interactive quizzes.
              </p>
            </div>

            <div className="feature-card">
              <h3>🤖 AI Tutor</h3>
              <p>
                Ask doubts anytime and receive instant explanations.
              </p>
            </div>

            <div className="feature-card">
              <h3>🏛️ Indian Knowledge System</h3>
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
              <h3>300 BCE</h3>
              <p>Brahmi Numerals</p>
            </div>

            <div className="time-box">
              <h3>499 CE</h3>
              <p>Aryabhata</p>
            </div>

            <div className="time-box">
              <h3>628 CE</h3>
              <p>Brahmagupta</p>
            </div>

            <div className="time-box">
              <h3>1114 CE</h3>
              <p>Bhaskara II</p>
            </div>

            <div className="time-box">
              <h3>Today</h3>
              <p>Modern Indian Number System</p>
            </div>

          </div>
          <section className="stats">

  <div className="stat-card">
    <h2>5000+</h2>
    <p>Years of Mathematical Heritage</p>
  </div>

  <div className="stat-card">
    <h2>4</h2>
    <p>Legendary Indian Mathematicians</p>
  </div>

  <div className="stat-card">
    <h2>10+</h2>
    <p>Interactive Learning Modules</p>
  </div>

  <div className="stat-card">
    <h2>100%</h2>
    <p>Free Learning Experience</p>
  </div>

</section>

        </section>
        <section className="why-section">

  <h2>✨ Why Choose AnkVidya?</h2>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">📖</div>
      <h3>Interactive Learning</h3>
      <p>
        Learn through engaging lessons instead of long textbooks.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🧠</div>
      <h3>Fun Quizzes</h3>
      <p>
        Test your knowledge with exciting quizzes and instant results.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🤖</div>
      <h3>AI Tutor</h3>
      <p>
        Ask questions anytime and receive intelligent explanations.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🏛️</div>
      <h3>Indian Heritage</h3>
      <p>
        Explore India's rich mathematical history in an enjoyable way.
      </p>
    </div>

  </div>

</section>

      </section>
    </>
  );
}

export default Home;