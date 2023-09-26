import './slider.css';

export const Slider = () => {
  const images = [
    {
      src: '../assets/Los-Angeles.jpg',
      alt: 'Los Angeles',
      text: 'Visitando Los Angeles',
    },
    {
      src: '../assets/Paris.jpg',
      alt: 'Paris',
      text: 'Explorando París',
    },
    {
      src: '../assets/Buenos Aires.jpg',
      alt: 'Buenos Aires',
      text: 'Disfrutando Buenos Aires',
    }
  ];

  return (
    <div className="slider-test">
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item active`}
            >
              <img
                src={image.src}
                className="d-block w-100"
                alt={image.alt}
                style={{ width: '600px', height: '1000px' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="text-slider">
                  <h3>Hola Mundo</h3>
                  <p>Este es una imágen de prueba</p>
                  <h1 className='text-sl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                  <button className='btn-sli'>Explora más</button>
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
    </div>
  );
};
