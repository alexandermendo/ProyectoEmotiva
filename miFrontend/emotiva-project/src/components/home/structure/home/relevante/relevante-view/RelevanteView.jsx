import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { formatFechaHora, obtenerNoticias, url } from "../../../../../../../../common/utils";
import './relevanteView.css';

// Componente RelevanteView con varias tarjetas de noticias
export const RelevanteView = () => {
  const noticiasRef = useRef();
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => { await obtenerNoticias(setNoticias, setError) };
    fetchNews();
  }, []);

  return (
    <div ref={noticiasRef} id="noticias">
      <div className="custom-relev-container">
        <div className="relevante-title">
          <img src="../assets/Icono.png" alt="Logo de la empresa" className="logo" />
          <h2>Lo + Relevante</h2>
        </div>

        <div className="card-container">
          {noticias && noticias.length > 0 ? (
            noticias.map((noticia, index) => (
              <Link to={`/relevante/${noticia._id}`} key={index} className="custom-link">
                <div className="card custom-card">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img className="card-img custom-card-img" src={`${url}/${noticia.image}`} alt="Ligero" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body custom-card-body">
                        <p className="card-text custom-card-date">{formatFechaHora(noticia.publishDate)}</p>
                        <h5 className="card-title custom-card-title">{noticia.title}</h5>
                        <p className="card-text custom-card-text">{noticia.subtitle}</p>
                      </div>
                    </div>
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
  );
};
