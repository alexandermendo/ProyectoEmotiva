import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarUsuario.css";

export const NavbarUsuario = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

  useEffect(() => { window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); 
    if (!localStorage.getItem('token')) console.log('Token eliminado con éxito.');
    else console.log('Error al eliminar el token.'); 
    navigate("/login");
  }

  const gotoDashboard = () => {
    navigate("/dashboard");
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg ligero-container-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMobileMenu}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </button>
          <a className="navbar-brand" href="/"><img
            className="img-logo-emotiva"
            src="../assets/Emotiva_Logo.png"
            alt="Ligero"
          /></a>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
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
            <form className="d-flex" role="search">
              <button className="btn-cre-usu mobile-menu-btn" type="button" onClick={gotoDashboard}>Dashboard</button>
              <button className="btn-cer-ses mobile-menu-btn" type="button" onClick={logout}>Cerrar Sesión</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
