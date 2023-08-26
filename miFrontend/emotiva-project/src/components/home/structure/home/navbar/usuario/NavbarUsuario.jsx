import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarUsuario.css";

export const NavbarUsuario = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = () => {
    // Eliminar el token de autenticación (usando localStorage o sessionStorage)
    localStorage.removeItem('token'); // Asegúrate de usar el mismo nombre de token que usaste para iniciar sesión
    // Verificar si el token se ha eliminado
    if (!localStorage.getItem('token')) {
      console.log('Token eliminado con éxito.'); // Esto se mostrará en la consola si el token se ha eliminado
    } else {
      console.log('Error al eliminar el token.'); // Esto se mostrará si no se pudo eliminar el token por algún motivo
    }
    // Realizar cualquier otra limpieza necesaria, como redireccionar a la página de inicio
    navigate("/login");
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg ligero-container-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/"><img
            className="img-logo-emotiva"
            src="../assets/Emotiva_Logo.png"
            alt="Ligero"
          /></a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Deportes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Entretenimiento</a>
              </li>
            </ul>
          </div>

          <div className="navbar-search">
            <button className="btn btn-outline-success" type="submit" onClick={logout}>Cerrar Sesión</button>
          </div>
        </div>
      </nav>
    </>
  );
};
