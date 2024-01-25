import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url, fetchUsuarios, fetchRelevanteDetails, formatFechaHora } from "../../../../../../../../common/utils";
import './relevanteNews.css';

export const RelevanteNews = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [relevanteDetails, setRelevanteDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const usuariosData = await fetchUsuarios(localStorage.getItem("token"));
      setUsuario(usuariosData);
      await fetchRelevanteDetails(id, setRelevanteDetails, setLoading);  // Llamada a la función fetchRelevanteDetails desde utils.js
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  const formatDate = formatFechaHora(relevanteDetails.data.publishDate);

  return (
    <>
      <div className='cont-news'>
        <p>Lo + Relevante</p>
        <h1>{relevanteDetails.data.title}</h1>
      </div>

      <div className='cont-pub'>
        {usuario && usuario.length > 0 && (
          <div className="pub-dat"><p>Publicado por: {usuario[0].nombre}{' '} - {formatDate}</p></div>
        )}
      </div>

      <div className='cont-img'>
        <img src={`${url}/${relevanteDetails.data.image}`} alt="Foto 1" style={{ width: '1250px', height: '700px' }} />
      </div>

      <div className='cont-texto'>
        <div dangerouslySetInnerHTML={{ __html: relevanteDetails.data.description }} />
      </div>
    </>
  )
}