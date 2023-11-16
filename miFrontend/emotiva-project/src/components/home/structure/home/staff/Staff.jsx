import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { url } from "../../../../../../../common/utils";
import './staff.css';

export const Staff = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
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

  useEffect(() => {
    async function fetchStaffData() {
      try {
        const response = await fetch(`${url}/celebrities/consulta`);
        if (response.ok) {
          const data = await response.json();
          setStaffData(data);
        } else {
          console.error("Error al obtener los datos del servidor.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStaffData();
  }, []);

const items = staffData.map((staffMember, index) => (
  <Link to={`/staff/detalle/${staffMember.identi}`} key={index} className="slider-card">
    <div className="card">
      <img src={`${url}/${staffMember.fot_fam}`} className="card-img-top-1" alt={staffMember.nombre} />
      <div className="card-body-staff">
        <p className="card-name-staff">{staffMember.nombre}</p>
        <h5 className="card-lastname-staff">{staffMember.apelli}</h5>
      </div>
      <div className="card-body-st">
        <p className="card-name-st">{staffMember.nom_cat}</p>
      </div>
    </div>
  </Link>
));


  if (loading) {
    return <p>Cargando datos...</p>;
  }

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
