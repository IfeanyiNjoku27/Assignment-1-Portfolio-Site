// src/components/NavBar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import nav_logo from "./assets/nav_logo.jpg";
import "./App.css"

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#000000" : "#666666", 
    fontWeight: isActive ? "600" : "400",
    borderBottom: isActive ? "2px solid #000" : "2px solid transparent", 
    padding: "5px 0",
    transition: "color 0.2s, border-bottom 0.2s"
  });

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <Link to="/">
        <img src={nav_logo} alt="logo" className="logo" />
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/projects" style={navLinkStyles}>Projects</NavLink>
        <NavLink to="/services" style={navLinkStyles}>Services</NavLink>
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
        
        {/* Auth Section */}
        {token ? (
          <>
            <NavLink to="/admin" style={navLinkStyles}>Admin</NavLink>
            <button 
              onClick={handleSignOut}
              style={{
                background: "transparent",
                border: "1px solid #ddd",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.9rem",
                marginLeft: "10px"
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="/signin" style={navLinkStyles}>Sign In</NavLink>
        )}
      </div>
    </nav>
  );
}