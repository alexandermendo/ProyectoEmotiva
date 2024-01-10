import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { url } from "../../../../../../../common/utils";
import './entertainment.css';

export const Entertainment = () => {
  const entertainmentRef = useRef();
  const [entertainmentData, setEntertainmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/entertainment/getEntertainment`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos de entretenimiento");
        }
        const data = await response.json();
        setEntertainmentData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Función para dividir el arreglo en grupos de 3 (filas)
  const chunk = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Divide los datos en grupos de 3 (filas)
  const rows = chunk(entertainmentData, 3).slice(0, 3);

  return (
    <div ref={entertainmentRef} id="entretenimiento">
      <div className="entertainment-card-container">
        <div className="header">
          <img
            src="../assets/Icono.png"
            alt="Logo de la empresa"
            className="logo"
          />
          <h2>Entretenimiento</h2>
        </div>

        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <Link to={`/entertainment/${item._id}`} key={columnIndex} className="col-md-4" >
                <div className="entertainment-cont">
                  <div className="entertainment-image">
                    <img
                      src={`${url}/${item.image}`}
                      alt="Imagen de entretenimiento"
                      className="img-fluid"
                    />
                  </div>
                  <div className="entertainment-content">
                    <p>{item.subtitle}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
