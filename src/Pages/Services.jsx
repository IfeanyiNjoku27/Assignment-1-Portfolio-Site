//imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Pages_CSS/Services.css";
import toast from "react-hot-toast";

export default function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // Fetch all services
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchService();
  }, []);

  // Delete/remove a service
  const handleDelete = async (id) => {
    toast((t) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span style={{ fontWeight: "600" }}>
          Are you sure you want to delete this service? This cannot be undone.
        </span>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await api.delete(`/services/${id}`);
                setServices(services.filter((s) => s._id != id));
                toast.success("Service Deleted Successfully!");
              } catch (error) {
                toast.error("Error deleting service");
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
            Yes. Delete
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
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        border: '1px solid #eaeaea',
        padding: '16px',
      },
    });
  };

  // Helper function to assign icons based on keywords in the title
  const getIconForService = (title) => {
    const t = title.toLowerCase();
    if (t.includes("mobile") || t.includes("app")) return "📱";
    if (t.includes("backend") || t.includes("api")) return "⚙️";
    if (t.includes("devops") || t.includes("cloud") || t.includes("slice"))
      return "🚀";
    if (t.includes("design") || t.includes("ui")) return "🎨";
    return "💻"; // Default icon
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Engineering Capabilities</h1>
        <p>
          Delivering end-to-end technical solutions with a focus on performance,
          scalability, and user experience.
        </p>

        {/* Admin Add Button */}
        <button
          style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
          onClick={() => navigate("/service/add")}
        >
          + Add Capability
        </button>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <div className="service-icon">
              {getIconForService(service.title)}
            </div>

            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>

            <div className="service-actions">
              <button
                className="action-btn edit-btn"
                onClick={() => navigate(`/service/edit/${service._id}`)}
              >
                Edit
              </button>
              <button
                className="action-btn delete-btn"
                onClick={() => handleDelete(service._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
