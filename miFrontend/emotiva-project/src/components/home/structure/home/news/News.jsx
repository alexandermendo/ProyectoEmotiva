import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSliderDetails, fetchUsuarios, formatFechaHora, url } from "../../../../../../../common/utils";
import './news.css';

export const News = () => {
  const [usuario, setUsuario] = useState(null);
  const { id } = useParams(); // Obtiene el valor del parámetro de la URL
  const [sliderDetails, setSliderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const usuariosData = await fetchUsuarios(localStorage.getItem("token"));
      setUsuario(usuariosData);
      await fetchSliderDetails(id, setSliderDetails, setLoading);
    };
    fetchData();
  }, [])

  if (loading) return <p>Cargando datos...</p>;
  const formatDate = formatFechaHora(sliderDetails.data.publishDate);

  return (
    <>
      <div className='cont-news'>
        <p>Noticias</p>
        <h1>{sliderDetails.data.title}</h1>
      </div>

      <div className='cont-pub'>
        {usuario && usuario.length > 0 && (
          <div className="pub-dat"><p>Publicado por: {usuario[0].nombre}{' '} - {formatDate}</p></div>
        )}
      </div>

      <div className='cont-img'>
        <img src={`${url}/${sliderDetails.data.image}`} alt="Foto 1" style={{ width: '1250px', height: '700px' }} />
      </div>

      <div className='cont-texto'>
        <div dangerouslySetInnerHTML={{ __html: sliderDetails.data.description }} />
      </div>
    </>
  )
}