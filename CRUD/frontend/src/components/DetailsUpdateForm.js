// src/components/DetailsUpdateForm.js
import React, { useState, useEffect } from "react";
import api from "../services/api";

const DetailsUpdateForm = ({ id, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    city: "",
    country: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/details/${id}`);
      setFormData(response.data);
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/update/${id}`, formData);
    onUpdate();
  };

  return (
    <div>
      <h2>Update Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default DetailsUpdateForm;
