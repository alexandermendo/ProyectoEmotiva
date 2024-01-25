import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { chunk, fetchEntertainmentData, url } from "../../../../../../../common/utils";
import './entertainment.css';

export const Entertainment = () => {
  const entertainmentRef = useRef();
  const [entertainmentData, setEntertainmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { await fetchEntertainmentData(setEntertainmentData)};
    fetchData();
  }, []);

  // Divide los datos en grupos de 3 (filas)
  const rows = chunk(entertainmentData, 3).slice(0, 3);

  return (
    <div ref={entertainmentRef} id="entretenimiento">
      <div className="entertainment-card-container">
        <div className="header">
          <img src="../assets/Icono.png" alt="Logo de la empresa" className="logo" />
          <h2>Entretenimiento</h2>
        </div>

        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <Link to={`/entertainment/${item._id}`} key={columnIndex} className="col-md-4" >
                <div className="entertainment-cont">
                  <div className="entertainment-image">
                    <img src={`${url}/${item.image}`} alt="Imagen de entretenimiento" className="img-fluid" />
                  </div>
                  <div className="entertainment-content">
                    <p>{item.title}</p>
                    <h3>{item.subtitle}</h3>
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
