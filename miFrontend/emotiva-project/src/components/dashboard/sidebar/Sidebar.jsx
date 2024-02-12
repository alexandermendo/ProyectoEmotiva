import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import './sidebar.css';

export const SidebarDash = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  return (
    <>
      <div className="sidebar">
        <a className="navbar-brand" href="/"><img
          className="img-logo-emotiva-1"
          src="../assets/Emotiva_Logo.png"
          alt="Ligero"
        /></a>
        {isAuthenticated ? (
          rol === "Administrador" || rol === "Noticias"
            ? (
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
            )
            : (<div><ul>
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
            </ul></div>)
        ) : (<div><p>Debe iniciar sesión para acceder a esta página.</p></div>)}
      </div>
    </>
  )
}
