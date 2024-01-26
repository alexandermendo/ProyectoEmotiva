import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../../../../contexts/AuthContext";
import { url } from "../../../../../../../../../common/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbarFijo.css";

export const NavbarFijo = () => {
  const value = useAuthContext();
  const navigate = useNavigate();
  const [imageData, setImageData] = useState([{ fotoFileLogoPath: "" }]);
  const [setError] = useState(null);

  useEffect(() => {
    async function fetchLogoData() {
      try {
        const response = await fetch(`${url}/logo/getLogo`);
        if (!response.ok) throw new Error('No se pudo obtener el slider');
        const data = await response.json();
        setImageData(data.data);
      } catch (err) { setError(err.message); }
    }
    fetchLogoData();
  }, [])

  const login = () => {
    navigate("/login");
  }

  return (
    <>
      <nav className={`emotiva-navbar navbar navbar-light justify-content-between`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className="img-logo-emotiva" src={`${url}/${imageData[0].fotoFileLogoPath}`}
            alt="Ligero" /></a>
          <form className="form-inline d-flex">
            <h1 className="home-auth">Página de Inicio: {value.isAuthenticated ? 'SI' : 'NO'} </h1>
            <button className="btn-cer-ses mobile-menu-btn" type="button" onClick={login}>Iniciar Sesión</button>
          </form>
        </div>
      </nav>
    </>
  );
};
