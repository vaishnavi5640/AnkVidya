import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">

        <div className="hero">

          <div className="hero-text">

            <h1>AnkVidya</h1>

            <h2>Discover India's Mathematical Heritage</h2>

            <p>
              Learn the Indian Numeral System through AI-powered guidance,
              interactive lessons, quizzes and exciting activities inspired
              by the Indian Knowledge System.
            </p>

            <div className="button-group">
              <button>Start Learning</button>
              <button>AI Tutor</button>
            </div>

          </div>

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
              alt="Learning"
            />

          </div>

        </div>

        <div className="features">

          <div className="card">
            <h3>📖 Learn</h3>
            <p>Explore the history and evolution of the Indian Numeral System.</p>
          </div>

          <div className="card">
            <h3>🔢 Number Explorer</h3>
            <p>Convert numbers into the Indian Number System instantly.</p>
          </div>

          <div className="card">
            <h3>🤖 AI Tutor</h3>
            <p>Ask questions and receive intelligent explanations.</p>
          </div>

          <div className="card">
            <h3>🧠 Quiz</h3>
            <p>Challenge yourself with interactive quizzes.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;