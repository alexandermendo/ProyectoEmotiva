import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuthContext } from '../../../../../contexts/AuthContext';
import './loginComponent.css';

export const LoginComponent = () => {
  const { login } = useAuthContext();
  const [alert, setAlert] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('Por favor, ingresa tu nombre de usuario.');
  const [passwordError, setPasswordError] = useState('Por favor, ingresa tu contraseña.');
  const [selectedRole, setSelectedRole] = useState('Por favor, selecciona un rol.'); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      setUsernameError('Por favor, ingresa tu email.');
      setAlert(<Alert variant="warning">{usernameError}</Alert>);
      return;
    }
    if (!password) {
      setPasswordError('Por favor, ingresa tu contraseña.');
      setAlert(<Alert variant="warning">{passwordError}</Alert>);
      return;
    }
    if (!selectedRole) {
      setSelectedRole('Por favor, selecciona un rol.');
      setAlert(<Alert variant="warning">{selectedRole}</Alert>);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: username,
          contraseña: password,
          rol: selectedRole, 
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        console.log('Token:', data.token);
        login(selectedRole); 
      } else {
        setAlert(<Alert variant="danger" style={{ width: "42rem" }}>{data.message}</Alert>);
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

        {alert}

        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
            placeholder='Nombre'
          />
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
        </div>
        <div className="form-group">
          <select value={selectedRole} onChange={handleRoleChange} className='sel-rol'>
            <option value="">-- Seleccionar Rol --</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" onClick={handleSubmit} className="btn-login">Continuar</button>
          {/* <button type="submit" className="btn-login">Iniciar Sesión con Google</button> */}
        </div>
      </div>
    </div>
  );
}
