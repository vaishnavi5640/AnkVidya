import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>📘 AnkVidya</h2>
          <p>
            Discover the rich history of the Indian Number System through
            interactive learning, quizzes, games and AI guidance.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>🏠 Home</p>
          <p>📚 Learn</p>
          <p>🔢 Explorer</p>
          <p>👨‍🏫 Mathematicians</p>
          <p>🧠 Quiz</p>
          <p>🎮 Game</p>
          <p>🤖 AI Tutor</p>
        </div>

        <div className="footer-section">
          <h3>Project</h3>

          <p>Indian Knowledge System (IKS)</p>
          <p>React + Vite</p>
          <p>Educational Project</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 AnkVidya | Made with ❤️ by Vaishnavi Santosh Tiwari
      </p>

    </footer>
  );
}

export default Footer;