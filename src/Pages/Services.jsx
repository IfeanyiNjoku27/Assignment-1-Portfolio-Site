//imports
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import './Pages_CSS/Services.css';


export default function Services() {
 const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // Fetch all services
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await api.get('/services');
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      }
    };
    fetchService();
  }, []);

  // Delete/remove a service
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      
      try {
        await api.delete(`/services/${id}`);
        setServices(services.filter((s) => s._id != id));
      } catch (error) {
        alert("Error deleting service");
      }
    }
  };


  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>

      <button
        style={{ marginBottom: '20px', padding: '10px', 
          background: '#28a745', color: 'white',
          border: 'none', borderRadius: '5px'
        }}
        onClick={() => navigate('/service/add')}
      >
        + Add New Service
      </button>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button onClick={() => navigate(`/service/edit/${service._id}`)}>Edit Project</button>
              <button onClick={() => handleDelete(service._id)} style={{ background: 'red'}}>Delete Service</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
