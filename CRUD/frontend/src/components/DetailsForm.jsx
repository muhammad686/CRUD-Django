// src/components/DetailsForm.js
import React, { useState } from "react";
import "../styles.css";
import api from "../services/api";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("", formData);
    // You might want to refresh the details list or handle it based on your requirements.
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <div className="form-container">
        <form action="/add" method="POST">
          <div className="input-name">
            <i className="fa fa-user email"></i>
            <input
              type="text"
              placeholder="Name"
              className="text-name"
              name="name" // Updated to match "name" attribute
              required
            />
          </div>

          <div className="input-name">
            <i className="fa fa-envelope email"></i>
            <input
              type="number" // Changed to number input for age
              placeholder="Age"
              className="text-name"
              name="age" // Updated to match "age" attribute
              required
            />
          </div>

          <div className="input-name">
            <i className="fa fa-map-marker"></i>
            <input
              type="text"
              placeholder="City"
              className="text-name"
              name="city" // Updated to match "city" attribute
              required
            />
          </div>

          <div className="input-name">
            <i className="fa fa-globe"></i>
            <input
              type="text"
              placeholder="Country"
              className="text-name"
              name="country" // Updated to match "country" attribute
              required
            />
          </div>

          <div className="input-name">
            <input
              type="submit"
              className="button"
              name="submit"
              value="Submit"
            />
          </div>

          {/* {msg && <p>{msg}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
