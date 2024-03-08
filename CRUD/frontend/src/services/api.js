// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Replace with the actual backend server URL
});

export default api;
