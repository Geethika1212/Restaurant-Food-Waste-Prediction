import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          🍽️ WasteWise
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/predict">Predict Waste</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;