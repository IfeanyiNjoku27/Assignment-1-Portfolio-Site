import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import './Pages_CSS/Projects.css';

export default function Projects() {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch all projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  // Delete/remove a project
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      
      try {
        await api.delete(`/projects/${id}`);
        setProjects(projects.filter((p) => p._id != id));
      } catch (error) {
        alert("Error deleting project");
      }
    }
  };

  //Render
  return (
    <div className="project-container">
      <h1>My Projects</h1>
      <button
        style={{ marginBottom: '20px', padding: '10px', 
          background: '#28a745', color: 'white',
          border: 'none', borderRadius: '5px', cursor: 'pointer'
        }}
        onClick={() => navigate('/project/add')}
      >
        + Add New Project
      </button>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <small>Completed: {new Date(project.completion).toLocaleDateString()}</small>
            <p className="project-description">{project.description}</p>
            
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button onClick={() => navigate(`/project/edit/${project._id}`)}>Edit Project</button>
              <button onClick={() => handleDelete(project._id)} style={{ background: 'red'}}>Delete Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
