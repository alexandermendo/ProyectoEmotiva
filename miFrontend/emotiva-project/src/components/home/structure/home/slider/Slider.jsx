import { useState, useEffect } from 'react';
import './slider.css';

export const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [error, setError] = useState(null);
  const serverUrl = "http://localhost:3000"

  useEffect(() => {
    async function fetchSliderData() {
      try {
        const response = await fetch("http://localhost:3000/slider/getSlider"); // Reemplaza la URL con la correcta si es diferente
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
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={`${serverUrl}/${slide.fotoFilePath}`} className="d-block w-100" alt={slide.title} style={{ width: '600px', height: '700px' }} />
                <div className="carousel-caption d-none d-md-block">
                  <div className="text-slider">
                    <h3>{slide.title}</h3>
                    <p>{slide.subtitle}</p>
                    <h1 className='text-sl'>{slide.description}</h1>
                    <button className='btn-sli'>Conoce más</button>
                  </div>
                </div>
              </div>
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
