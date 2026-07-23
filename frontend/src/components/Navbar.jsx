import logo from "../images/logo/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="AnkVidya Logo" className="logo-image" />

        <div className="brand-text">
          <h2 className="logo">AnkVidya</h2>
          <p className="tagline">Ancient Knowledge • Modern Learning</p>
        </div>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Learn</li>
        <li>Explorer</li>
        <li>AI Tutor</li>
        <li>Quiz</li>
      </ul>
    </nav>
  );
}

export default Navbar;