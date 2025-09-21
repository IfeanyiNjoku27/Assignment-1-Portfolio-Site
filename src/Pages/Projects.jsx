import "./Pages_CSS/Projects.css"
import reltortWeb from "../assets/realtor_webpage.jpg"
import mobileToDoList from "../assets/mobile_todo_list.jpg"
import vrPage from "../assets/vr_page.jpg"

export default function Projects() {
  {
    /* List of projects */
  }
  const projects = [
    {
      id: 1,
      projectName: "Diggs Realty Webpage",
      image: reltortWeb,
      description: "Created a realtor webpage in my spare time. This project was just me redoing a similar project from my first semester.",
    },
    {
        id: 2,
        projectName: "Andriod Todo List",
        image: mobileToDoList,
        description: "I made a simple ToDo list in android Studio. I didn't enhance it or make it complicated but I simply wanted to refresh my memery on kotlin and jetpackcompose so I made something simple."
    },
    {
        id: 3,
        projectName: "Experience VR Webpage",
        image: vrPage,
        description: "A small web project with dummy information using simple HTML, CSS and JavaScript to experiment with layout and design.",

    }
  ];

  return (
    <div className="project-container">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.image} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.projectName}
              className="project-image"
            />
            </a>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
