export default function About() {
  return (
    <div className="about-me-container">
      {/* Page Title */}
      <h1>About Me</h1>

      {/* Profile Image (Will be added Later) */}

      {/* About me Paragraph */}
      <p>
        I am a Software Engineering student, currently attending Centennial College, that 
        has a passion for building creative and meaningful applications. My interests include web
        development, DevOps, game development and solving real-world problems through code.
      </p>

      {/* Resume Download */}
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
