import React, { useState } from 'react';
import { adminLogin } from '../services/api';
import '../styles/Login.css';

function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await adminLogin({ email, password });
      setToken(response.token); // Stocke le token retourné par l'API
      localStorage.setItem('token', response.token); // Facultatif : stocker le token dans localStorage
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Identifiants incorrects ou problème serveur.');
    }
  };

  return (
    <div>
      <h2>Connexion Administrateur</h2>
      {token && <p style={{ color: 'green' }}>Connexion réussie. Votre token : {token}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Mot de passe :
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
