import { useState } from 'react';
import Swal from 'sweetalert2';
import './FormLogin.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: username,
          contraseña: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire('¡Inicio de sesión exitoso!', 'Bienvenido', 'success');
        localStorage.setItem('token', data.token);
        console.log('Token:', data.token);
      } else {
        Swal.fire('¡Error!', data.message, 'error');
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn-login">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
