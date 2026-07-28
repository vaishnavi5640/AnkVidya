import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo/logo.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);
  return (
    <nav className="navbar">

      <Link to="/" className="logo-section">
        <img
          src={logo}
          alt="AnkVidya Logo"
          className="logo"
        />

        <div>
          <h2>AnkVidya</h2>
          <span>Ancient Knowledge • Modern Learning</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/learn">📚 Learn</Link>
        <Link to="/explorer">🔢 Explorer</Link>
        <Link to="/mathematicians">👨‍🏫 Mathematicians</Link>
        <Link to="/quiz">🧠 Quiz</Link>
        <Link to="/aitutor">🤖 AI Tutor</Link>
        <button
  className="dark-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀ Light" : "🌙 Dark"}
</button>
      </div>

    </nav>
  );
}

export default Navbar;