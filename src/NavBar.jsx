import { Link, NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#eeb632ff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

//Using NavBar
export default function Navbar() {
  return (
    <nav>
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
      <hr />
    </nav>
  );
}
