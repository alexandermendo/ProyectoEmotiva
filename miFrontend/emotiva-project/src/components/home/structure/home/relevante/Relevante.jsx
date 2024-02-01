import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerNoticias, url } from "../../../../../../../common/utils";
import './relevante.css';

export const Relevante = () => {
  const noticiasRef = useRef();
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => { await obtenerNoticias(setNoticias, setError)};
    fetchNews();
  }, []);

  return (
    <div ref={noticiasRef} id="noticias">
      <div className="relevante-container relev-cont">
        <div className="header">
          <img src="../assets/Icono.png" alt="Logo de la empresa" className="logo" />
          <h2>Lo + Relevante</h2>
        </div>

        <div className="col-md-12">
          <div className="row">
            {noticias && noticias.length > 0 ? (
              noticias.slice(0, 3).map((noticia, index) => (
                <Link to={`/relevante/${noticia._id}`} key={index} className="col-md-4">
                  <div className="card">
                    <img className='card-img-top img-fluid' src={`${url}/${noticia.image}`} alt="Ligero" />
                    <div className="card-body-rel">
                      <h5 className="card-title-rel">{noticia.title}</h5>
                      <p className="card-text-rel">{noticia.subtitle}</p>
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
