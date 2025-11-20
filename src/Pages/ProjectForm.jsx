import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import "./Pages_CSS/Contact.css";

export default function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams(); //if id exists then user is in edit mode
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completion: "",
  });

  // load data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      api.get(`/projects/${id}`).then((res) => {
        // Date formattter
        const dateStr = res.data.completion
          ? new Date(res.data.completion).toISOString().split("T")[0]
          : "";
        setFormData({ ...res.data, completion: dateStr });
      });
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditMode) {
        //update
        await api.put(`/projects/${id}`, formData);
        alert("Project Updated!");
      } else {
        //create project
        await api.post("/projects", formData);
        alert("Project Created!");
      }
      navigate("/projects");
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  return (
    <div className="contact-form" style={{ marginTop: "50px", color: "black" }}>
      <h2>{isEditMode ? "Edit Project" : "Add New Project"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Completion Date:
          <input
            type="date"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{isEditMode ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
