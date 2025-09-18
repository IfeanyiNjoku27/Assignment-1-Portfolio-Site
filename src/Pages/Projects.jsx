import "./Pages_CSS/Projects.css"

export default function Projects() {
  {
    /* List of projects */
  }
  const projects = [
    {
      id: 1,
      projectName: "Luxury Resort Webpage",
      image: "",
      description: "Did something",
    },
    {
        id: 2,
        projectName: "Another Cool Project",
        image: "",
        description: "Did something here as well"
    },
    {
        id: 3,
        projectName: "Final Cool Project",
        image: "",
        description: "Final cool thing did"
    }
  ];

  return (
    <div className="project-container">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
