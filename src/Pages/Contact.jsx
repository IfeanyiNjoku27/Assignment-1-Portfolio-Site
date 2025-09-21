//Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages_CSS/Contact.css"

export default function ContactMe() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    contactNumber: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data: ", inputs);
    alert("Message Submitted! Redirecting to Home...");
    navigate("/"); //redirect to home
  }

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
        Contact Number: 
        <input 
            type="tel"
            name="contactNumber"
            value={inputs.contactNumber}
            onChange={handleChange}
            className="form-input"
        />
      </label>

      <label>
        Email Address: 
        <input 
            type="email"
            name="emailAddress"
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
