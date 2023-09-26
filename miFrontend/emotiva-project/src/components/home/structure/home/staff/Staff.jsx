import Slider from "react-slick";
import './staff.css';

export const Staff = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  // Datos del staff que deseas mostrar en el slider
  const staffData = [
    {
      name: "Nombre 1",
      position: "Posición 1",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 2",
      position: "Posición 2",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 1",
      position: "Posición 1",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 2",
      position: "Posición 2",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 1",
      position: "Posición 1",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 2",
      position: "Posición 2",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 1",
      position: "Posición 1",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 2",
      position: "Posición 2",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 1",
      position: "Posición 1",
      image: "../assets/Prueba.jpg",
    },
    {
      name: "Nombre 2",
      position: "Posición 2",
      image: "../assets/Prueba.jpg",
    },
    // Agrega más datos de staff aquí
  ];

  // Genera elementos de tarjeta para el slider
  const items = staffData.map((staffMember, index) => (
    <div key={index} className="slider-card">
      <div className="card">
        <img src={staffMember.image} className="card-img-top-1" alt={staffMember.name} />
        <div className="card-body-staff">
          <p className="card-name-staff">{staffMember.position}</p>
          <h5 className="card-lastname-staff">{staffMember.name}</h5>
        </div>
        <div className="card-body-st">
          <p className="card-name-st">{staffMember.position}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider-container staff-cont">
      <div className="header">
        <img
          src="../assets/Icono.png" 
          alt="Logo de la empresa"
          className="logo"
        />
        <h2>Nuestro Staff</h2>
      </div>
      <Slider {...settings} className="slider">
        {items}
      </Slider>
    </div>
  );
};
