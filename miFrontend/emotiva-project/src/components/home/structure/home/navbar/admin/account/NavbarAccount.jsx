import { useNavigate } from "react-router";
import './navbarAccount.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarAccount = () => {
  let navigate = useNavigate();

  const goToBack = (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm("¿Estás seguro de que deseas abandonar el proceso de registro? Tus datos no se guardarán.");
    if (userConfirmed) navigate('/login');
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg account-container-navbar`}>
        <div className="container-fluid">
          <img
            className="img-logo-account"
            src="../assets/Emotiva_Logo.png"
            alt="Ligero" />
          <div className="navbar-search-1">
            <button className="btn-back btn" type="submit" onClick={goToBack}>Atrás</button>
          </div>
        </div>
      </nav>
    </>
  );
};
