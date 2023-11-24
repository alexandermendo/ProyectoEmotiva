import { Link } from "react-router-dom";
import './sidebar.css';

export const SidebarDash = () => {
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
              <Link to="/dashboard/resumen" className="title-text">Inicio</Link>
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
              <Link to="/dashboard/add-slider" className="text-add-note">Ingresar Nota</Link>
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
              <Link to="/dashboard/add-staff" className="text-add-note">Ingresar Celebridad</Link>
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
              <Link to="/dashboard/add-relevante" className="text-add-note">Ingresar Nota</Link>
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
              <Link to="/dashboard/add-lifestyle" className="text-add-note">Ingresar Nota</Link>
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
              <Link to="#" className="text-add-note">Ingresar Nota</Link>
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
              <Link to="/dashboard/add-sports" className="text-add-note">Ingresar Nota</Link>
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
              <Link to="/dashboard/add-entertainment" className="text-add-note">Ingresar Nota</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}