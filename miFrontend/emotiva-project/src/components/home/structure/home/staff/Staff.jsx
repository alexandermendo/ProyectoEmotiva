import Slider from "react-slick";
import './staff.css';

export const Staff = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    centerPadding: '50px', // Ajusta el valor de margen según tus necesidades
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Rutas de las imágenes que deseas mostrar en el slider
  const imagePaths = [
    "../assets/PR.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/Paris.jpg",
    "../assets/PR.jpg",
  ];

  // Genera elementos img para el slider
  const items = imagePaths.map((imagePath, index) => (
    <div key={index} className="slider-image" >
      <img src={imagePath} alt={`Imagen ${index + 1}`} />
    </div>
  ));

  return (
    <div className="slider-container staff-cont">
      <h2>Nuestro Staff</h2>
      <Slider {...settings} className="slider">
        {items}
      </Slider>
    </div>
  );
};
