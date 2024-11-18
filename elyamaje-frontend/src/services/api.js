import axios from 'axios';

// URL de base de votre backend
const API_URL = 'http://localhost:3000'; // Remplacez par l'URL réelle de votre backend

// Instance Axios configurée
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json', // Envoie les données au format JSON
  },
});

// Fonction pour l'inscription (signup)
export const adminSignup = async (adminData) => {
  try {
    const response = await instance.post('/admin/signup', adminData); // Appel API backend
    return response.data; // Retourne la réponse du serveur
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error.response?.data || error.message);
    throw error; // Remontez l'erreur pour qu'elle puisse être gérée côté composant
  }
};

// Fonction pour la connexion (login)
export const adminLogin = async (credentials) => {
  try {
    const response = await instance.post('/admin/login', credentials); // Appel API backend
    return response.data; // Retourne le token ou les données
  } catch (error) {
    console.error('Erreur lors de la connexion :', error.response?.data || error.message);
    throw error;
  }
};

export default instance;
