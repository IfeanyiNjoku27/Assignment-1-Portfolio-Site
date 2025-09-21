import about_me from "../assets/about_me.jpg"
import "./Pages_CSS/About.css"


export default function About() {
  return (
    <div className="about-me-container">
      {/* Page Title */}
      <h1>About Me</h1>

      {/* Profile Image */}

      <img src={about_me} alt="Head and shoulder picture of me" className="selfie"/>

      {/* About me Paragraph */}
      <p>
        I am a Software Engineering student, currently attending Centennial College, that 
        has a passion for building creative and meaningful applications. My interests include web
        development, DevOps, game development and solving real-world problems through code.
      </p>

      {/* Resume Link To View */}
      <a
        href="public/Ifeanyi-Njoku-2.pdf"
        target="_blank"
        rel="noreferrer noopener"
      >
        View My Resume
      </a>
    </div>
  );
}
