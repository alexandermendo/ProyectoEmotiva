import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../../../../../../common/utils';
import './slider.css';

export const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSliderData() {
      try {
        const response = await fetch(`${url}/slider/getSlider`);
        if (!response.ok) {
          throw new Error('No se pudo obtener el slider');
        }
        const data = await response.json();
        if (data) {
          setSliderData(data);
        } else {
          throw new Error('Datos de slider no válidos');
        }
      } catch (err) {
        console.error('Error al obtener datos del slider:', err);
        setError('No se pudo obtener el slider. Consulta la consola para más detalles.');
      }
    }
    fetchSliderData();
  }, []);

  return (
    <div className="slider-test">
      {sliderData && sliderData.length > 0 ? (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {sliderData.map((slide, index) => (
              <Link to={`/news/${slide._id}`} key={index} className="slider-card">
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img
                    src={`${url}/${slide.image}`}
                    className="d-block w-100"
                    alt={slide.title}
                    style={{ width: '600px', height: '700px' }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="text-slider">
                      <h3>{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                      <h1 className="text-sl">Haz clic sobre la imágen para ver más información</h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <div>{error ? `Error: ${error}` : 'Cargando datos...'}</div>
      )}
    </div>
  );
};
