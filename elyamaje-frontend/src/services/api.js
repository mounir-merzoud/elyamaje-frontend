// src/services/api.js

// Définissez API_URL en premier
const API_URL = "http://localhost:5000"; // Remplacez par l'URL de votre backend

// Exportez API_URL et fetchData
export default API_URL;

export async function fetchData() {
  const response = await fetch(`${API_URL}/api/data`);
  return await response.json();
}
