import { Link } from "react-router-dom"

//Using NavBar for easier page switching
export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/about">About</Link> | {" "}
            <Link to="/projects">Projects</Link> | {" "}
            <Link to="/services">Services</Link> | {" "}
            <Link to="/contact">Contact</Link> | {" "}
        </nav>
    )
}