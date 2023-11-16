import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { url } from '../../../../../../../common/utils';
import './slider.css';

export const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSliderData() {
      try {
        const response = await fetch(`${url}/slider/getSlider`); // Reemplaza la URL con la correcta si es diferente
        if (!response.ok) {
          throw new Error('No se pudo obtener el slider');
        }
        const data = await response.json();
        setSliderData(data.data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchSliderData();
  }, []);

  return (
    <div className="slider-test">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {sliderData.map((slide, index) => (
              <Link to={`/news/${slide._id}`} key={index} className="slider-card">
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={`${url}/${slide.fotoFilePath}`} className="d-block w-100" alt={slide.title} style={{ width: '600px', height: '700px' }} />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="text-slider">
                      <h3>{slide.title}</h3>
                      <p>{slide.subtitle}</p>
                      <h1 className='text-sl'>{slide.description}</h1>
                      <h1 className='text-sl'>Haz clic sobre la imágen para ver más información</h1>
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
      )}
    </div>
  );
};
