//imports
import "./Pages_CSS/Services.CSS"

export default function Services() {
  {
    /* List of services */
  }
  const services = [
    {
      id: 1,
      title: "Web Development",
      image: "/images/service-web.jpg",
      description:
        "Building responsive and modern websites using HTML, CSS, JavaScript, and React. I focus on clean code and great user experiences.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: "/images/service-mobile.jpg",
      description:
        "Creating simple and functional mobile applications with Kotlin and React Native to solve real-world problems.",
    },
    {
      id: 3,
      title: "General Programming",
      image: "/images/service-coding.jpg",
      description:
        "Writing efficient and maintainable code in Python, Java, and C#. I enjoy solving problems and automating workflows.",
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
  )
}
