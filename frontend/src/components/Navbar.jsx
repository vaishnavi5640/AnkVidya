import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        AnkVidya
      </div>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/learn">Learn</Link>
        </li>

        <li>
          <Link to="/explorer">Explorer</Link>
        </li>

        <li>
          <Link to="/mathematicians">Mathematicians</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;