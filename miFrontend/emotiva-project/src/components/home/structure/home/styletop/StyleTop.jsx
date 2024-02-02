import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { getLifestyleData, url } from '../../../../../../../common/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styleTop.css';

export const StyleTop = () => {
  const navigate = useNavigate();
  const styleRef = useRef();
  const [lifestyleData, setLifestyleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { await getLifestyleData(setLifestyleData) };
    fetchData();
  }, []);

  const goToNews = () => { navigate("/lifestyle"); }

  return (
    <div ref={styleRef} id="lifestyle">
      <div className="styletop-container st-cont-2">
        <div className="row align-items-start">
          <div className="col-md-6">
            <div className="header">
              <img src="../assets/Icono.png" alt="Logo de la empresa" className="logo" />
              <h2>Estilo de Vida</h2>
            </div>

            <div className="row">
              {lifestyleData.slice(0, 4).map((item, index) => (
                <Link to={`/lifestyle/${item._id}`} key={index} className="col-12 col-sm-6">
                  <div className="card estilo-card">
                    <img className="foto-card-2 img-fluid" src={`${url}/${item.image}`} alt={item.title} />
                    <div className="card-body">
                      <p>{item.subtitle}</p>
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </div>
                </Link>
              ))}
              <button className="btn-ver-mas" onClick={goToNews}>
                Ver Más <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className='top-10'>
              <div className="header">
                <img src="../assets/Icono.png" alt="Logo de la empresa" className="logo-e" />
                <h1>EMOTIVA Top 10</h1>
              </div>

              <ol>
                <li>
                  <img src="../assets/Paris.jpg" className="img-top-10" alt="Portada Canción 1" />
                  <div className='text-top'>
                    <h1>Top 1</h1>
                    <p>Top 1</p>
                  </div>
                </li>
                <li>
                  <img src="../assets/Buenos Aires.jpg" className="img-top-10" alt="Portada Canción 2" />
                  <div className='text-top'>
                    <h1>Top 2</h1>
                    <p>Top 2</p>
                  </div>
                </li>
                <li>
                  <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                  <div className='text-top'>
                    <h1>Top 3</h1>
                    <p>Top 3</p>
                  </div>
                </li>
                <li>
                  <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                  <div className='text-top'>
                    <h1>Top 4</h1>
                    <p>Top 4</p>
                  </div>
                </li>
                <li>
                  <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                  <div className='text-top'>
                    <h1>Top 5</h1>
                    <p>Top 5</p>
                  </div>
                </li>
              </ol>
              <button className='btn-top-list'>Ver la Lista Completa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
