// src/Pages/Projects.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import "./Pages_CSS/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch all projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  // Delete/remove a project
  // Inside Projects.jsx or Services.jsx

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontWeight: "600" }}>
            Delete this item? This cannot be undone.
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  await api.delete(`/projects/${id}`);
                  setProjects(projects.filter((p) => p._id !== id));
                  toast.success("Deleted successfully");
                } catch (error) {
                  toast.error("Failed to delete");
                }
              }}
              style={{
                background: "#dc2626",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Yes, Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              style={{
                background: "#eee",
                color: "#333",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: "top-center",
        style: {
          border: "1px solid #eaeaea",
          padding: "16px",
        },
      },
    );
  };

  return (
    <div className="project-container">
      <h1>My Projects</h1>

      {/* "Add Project" Button - Centered and prominent */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button
          style={{
            padding: "12px 24px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          onClick={() => navigate("/project/add")}
        >
          + Add New Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            {/* 1. Project Thumbnail */}
            <img
              src={
                project.imageUrl || "https://placehold.co/600x400?text=No+Image"
              }
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              {/* 2. Title & Date */}
              <h2 className="project-title">{project.title}</h2>
              <small className="project-date">
                Completed:{" "}
                {project.completion
                  ? new Date(project.completion).toLocaleDateString()
                  : "Ongoing"}
              </small>

              {/* 3. Tech Stack Badges */}
              {project.tags && project.tags.length > 0 && (
                <div className="tech-stack">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* 4. Description */}
              <p className="project-description">{project.description}</p>

              {/* 5. Footer: Links & Admin Controls */}
              <div className="card-footer">
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      View Code &rarr;
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                </div>

                <div className="admin-controls">
                  <button
                    className="btn-edit"
                    onClick={() => navigate(`/project/edit/${project._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
