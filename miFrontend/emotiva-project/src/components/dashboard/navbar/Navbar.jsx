import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los datos del usuario
    const fetchUsuario = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/listaUsuarios", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Asegúrate de enviar el token de autenticación si es necesario
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setUsuario(data.data); // Establece los datos del usuario en el estado
        } else {
          console.error("Error al obtener los datos del usuario");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    fetchUsuario();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')) console.log('Token eliminado con éxito.');
    else console.log('Error al eliminar el token.');
    navigate("/private/logout");
  }

  console.log("Usuario::", usuario);

  return (
    <nav className="navbar-1">
      <ul className="nav-list">
        {usuario ? (
          <div className="text-user">
            <h1>{usuario[0].nombre}</h1>
            <p>{usuario[0].rol}</p>
          </div>
        ) : null}

        <li className="nav-item">
          <button className="btn-cer-ses mobile-menu-btn" type="button" onClick={logout}><FontAwesomeIcon icon={faRightFromBracket}/></button>
        </li>
      </ul>
    </nav>
  );
};
