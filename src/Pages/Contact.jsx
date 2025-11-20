//Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages_CSS/Contact.css"
import api from "../services/api";

export default function ContactMe() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Send post request to backend
    try {
      await api.post('/contacts', inputs);
      alert("Message Sent Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <label>
        Email Address: 
        <input 
            type="email"
            name="email"
            value={inputs.emailAddress}
            onChange={handleChange}
            className="form-input"
        />
      </label>

      <label>
        Message: 
        <textarea 
            name="message"
            value={inputs.message}
            onChange={handleChange}
            className="form-textarea"
        ></textarea>
      </label>

      <button type="submit" className="form-submit-btn">
        Send Message
        </button>
    </form>
  );
}
