import { Link } from "react-router-dom";
import './sidebar.css';

export const SidebarDash = ({ userRole }) => {
  // Función para verificar si un rol tiene permiso para ver cierta sección
  const hasPermission = (allowedRoles) => {
    return allowedRoles.includes(userRole);
  };

  return (
    <>
      <div className="sidebar">
        <a className="navbar-brand" href="/"><img
          className="img-logo-emotiva-1"
          src="../assets/Emotiva_Logo.png"
          alt="Ligero"
        /></a>
        <ul>
          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/users" className="title-text">Usuarios</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/resumen" className="title-text">Slider</Link>
              {hasPermission(["Administrador", "Noticias"]) && (
                <Link to="/dashboard/add-slider" className="text-add-note">Ingresar Nota</Link>
              )}
            </div>

          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/staff" className="title-text">Staff</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/relevante-dash" className="title-text">Lo + relevante</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/lifestyle" className="title-text">Estilo de Vida</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/usuarios" className="title-text">Top 10</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/sports" className="title-text">Deportes</Link>
            </div>
          </li>

          <li className="dash-item">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo-dash"
            />
            <div className="text-side">
              <Link to="/dashboard/entertainment" className="title-text">Entretenimiento</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
