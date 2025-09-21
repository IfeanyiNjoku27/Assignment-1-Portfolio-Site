//imports
import "./Pages_CSS/Services.css";
import service_web from "../assets/service_web.jpg";
import service_mobile from "../assets/service_mobile.jpg";
import devops from "../assets/devops.jpg";


export default function Services() {
  {
    /* List of services */
  }
  const services = [
    {
      id: 1,
      title: "Web Development",
      image: service_web,
      description:
        "Building responsive and modern websites using HTML, CSS, JavaScript, and React. I focus on clean code and great user experiences.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: service_mobile,
      description:
        "Creating simple and functional mobile applications with Kotlin and React Native to solve real-world problems.",
    },
    {
      id: 3,
      title: "Devops",
      image: devops,
      description:
        "Automating deployment pipelines, managing cloud infrastructure, and ensuring reliable software delivery with CI/CD and containerization.",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
