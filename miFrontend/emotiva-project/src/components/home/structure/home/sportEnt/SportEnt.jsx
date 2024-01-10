import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { url } from "../../../../../../../common/utils";
import './sportEnt.css';

export const SportEnt = () => {
  const deportesRef = useRef();
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const getSportsData = async () => {
      try {
        const response = await fetch(`${url}/sports/getSports`);
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de deportes");
        }
        const sportsData = await response.json();
        setSports(sportsData);
      } catch (error) {
        console.error(error);
      }
    };

    getSportsData();
  }, []);

  return (
    <div ref={deportesRef} id="deportes">
      <div className="styletop-container st-cont-1">
        <div className="row">
          <div className="col-md-12">
            <div className="header">
              <img
                src="../assets/Icono.png"
                alt="Logo de la empresa"
                className="logo"
              />
              <h2>Deportes</h2>
            </div>
          </div>

          {sports.slice(0, 4).map((sport, index) => (
            <Link to={`/sports/${sport._id}`} key={index} className="col-md-3">
              <div className="card sport-card">
                <img className="card-img-top" src={`${url}/${sport.image}`} alt={sport.title} />
                <div className="card-body">
                  <p className="card-text">{sport.subtitle}</p>
                  <h5 className="card-title">{sport.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
