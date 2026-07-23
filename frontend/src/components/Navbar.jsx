import logo from "../images/logo/logo.png";
import { NavLink } from "react-router-dom";

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
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/learn">Learn</NavLink>
        </li>

        <li>
          <NavLink to="/explorer">Explorer</NavLink>
        </li>

        <li>
          <NavLink to="/aitutor">AI Tutor</NavLink>
        </li>

        <li>
          <NavLink to="/quiz">Quiz</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;