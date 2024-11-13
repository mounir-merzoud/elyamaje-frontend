// // src/pages/Login.js
// import React, { useState } from 'react';
// import '../styles/Login.css';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Logique pour l'authentification, par exemple, en envoyant une requête à une API
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Vous pourrez ici rediriger vers le tableau de bord après une authentification réussie
//   };

//   return (
//     <div className="login-container">
//       <h2>Connexion</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Mot de passe:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
