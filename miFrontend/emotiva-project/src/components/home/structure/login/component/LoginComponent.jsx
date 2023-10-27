import { useState } from 'react';
import { useAuthContext } from '../../../../../contexts/AuthContext';
import './loginComponent.css';


export const LoginComponent = () => {
  const { login } = useAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  let [hasErrors] = useState(false);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      setUsernameError('Por favor, ingresa tu email.');
      hasErrors = true;
    }
    if (!password) {
      setPasswordError('Por favor, ingresa tu contraseña.');
      hasErrors = true;
    }
    if (hasErrors) return;

    try {
      const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: username,
          contraseña: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Token:', data.token);
        login();
      } else {
        alert('¡Error!', data.message, 'error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <hr />

        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
            placeholder='Email'
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            placeholder='Password'
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className="form-group">
          <button type="submit" onClick={handleSubmit} className="btn-login">Continuar</button>
        </div>
      </div>
    </div>
  );
}