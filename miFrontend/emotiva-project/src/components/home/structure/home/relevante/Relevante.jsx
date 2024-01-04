import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../../../../../../common/utils";
import './relevante.css';

export const Relevante = () => {
  const noticiasRef = useRef();
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await fetch(`${url}/news/getNews`);
        if (!response.ok) {
          throw new Error('Error al obtener las noticias');
        }
        const data = await response.json();
        console.log(data);
        // Verificar si la propiedad 'data' está presente en la respuesta
        if (!data || !data.length) {
          throw new Error('La respuesta del servidor no tiene la estructura esperada.');
        }
        setNoticias(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    obtenerNoticias();
  }, []);

  return (
    <div ref={noticiasRef} id="noticias">
      <div className="relevante-container relev-cont">
        <div className="header">
          <img
            src="../assets/Icono.png"
            alt="Logo de la empresa"
            className="logo"
          />
          <h2>Lo + Relevante</h2>
        </div>

        <div className="col-md-12">
          <div className="row">
            {noticias && noticias.length > 0 ? (
              noticias.map((noticia, index) => (
                <Link to={`/relevante/${noticia._id}`} key={index} className="col-md-4">
                  <div className="card">
                    <img
                      className='card-img-top img-fluid'
                      src={`${url}/${noticia.image}`}
                      alt="Ligero"
                    />
                    <div className="card-body-rel">
                      <h5 className="card-title-rel">{noticia.title}</h5>
                      <p className="card-text-rel">{noticia.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>{error && <p>Error: {error}</p>}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
