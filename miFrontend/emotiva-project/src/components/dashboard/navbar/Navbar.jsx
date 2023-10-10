import { useNavigate } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) console.log('Token eliminado con éxito.');
    else console.log('Error al eliminar el token.');
    navigate("/login");
  }

  return (
    <nav className="navbar-1">
      <ul className="nav-list">
        <div className="text-user">
          <h1>Hola Mundo</h1>
          <p>Hola Mundo</p>
        </div>
        
        <li className="nav-item">
          <button className="btn-cer-ses mobile-menu-btn" type="button" onClick={logout}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
};

