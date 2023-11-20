import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../../../../../../../common/utils";
import './sportNews.css';


export const SportNews = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [sportsDetails, setSportsDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`${url}/users/listaUsuarios`, {
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

  const fetchSportsDetails = async () => {
    try {
      const response = await fetch(`${url}/sports/${id}`);
      if (response.ok) {
        const data = await response.json();
        setSportsDetails(data);
      } else {
        console.error("Error al obtener los detalles del personal.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSportsDetails();
  }, [id]);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <>
      <div className='cont-news'>
        <p>Deportes</p>
        <h1>{sportsDetails.data.title}</h1>
      </div>

      <div className='cont-pub'>
        {usuario && usuario.length > 0 && (
          <p>Publicado por: {usuario[0].nombre} </p>
        )}
      </div>

      <div className='cont-img'>
        <img src={`${url}/${sportsDetails.data.image}`} alt="Foto 1" style={{ width: '1250px', height: '700px' }} />
      </div>

      <div className='cont-texto'>
        <p>
          {sportsDetails.data.description}
          Descripción
        </p>
      </div>
    </>
  )
}