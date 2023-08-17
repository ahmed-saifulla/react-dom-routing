import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <a className="logo">
        Logo
      </a>

      <ul className="nav-list">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
