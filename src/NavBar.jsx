import { Link, NavLink, useNavigate } from "react-router-dom";
import nav_logo from "./assets/nav_logo.jpg";

//NavLink Style
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#92f4f3ff" : "#f7f7f7ff",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

//Using NavBar
export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <img src={nav_logo} alt="logo" className="logo" />
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      |{" "}
      <NavLink to="/projects" style={navLinkStyles}>
        Projects
      </NavLink>
      |{" "}
      <NavLink to="/services" style={navLinkStyles}>
        Services
      </NavLink>
      |{" "}
      <NavLink to="/contact" style={navLinkStyles}>
        Contact
      </NavLink>
      <NavLink to="/admin" style={navLinkStyles}>
        Admin
      </NavLink>
      
      {token ? (
        <button
          onClick={handleSignOut}
          style={{
            ...navLinkStyles,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "inherit",
          }}
        >
          Sign Out
        </button>
      ) : (
        <NavLink to="/signin" style={navLinkStyles}>
          Sign In
        </NavLink>
      )}
      <hr />
    </nav>
  );
}
