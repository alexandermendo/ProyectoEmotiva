import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { url } from "../../../../../../../common/utils";
import './detalleStaff.css';

export const DetalleStaff = () => {
  const { id } = useParams(); // Obtiene el valor del parámetro de la URL
  const [staffDetails, setStaffDetails] = useState(null);
  const [loading, setLoading] = useState(true);
 
  // Supongamos que tienes una función para cargar los detalles del personal por su ID
  const fetchStaffDetails = async () => {
    try {
      const response = await fetch(`${url}/celebrities/${id}`);
      if (response.ok) {
        const data = await response.json();
        setStaffDetails(data);
      } else {
        console.error("Error al obtener los detalles del personal.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaffDetails();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del personal...</p>;
  }

  if (!staffDetails) {
    return <p>No se encontraron detalles para el personal con ID {id}</p>;
  }

  return (
    <div className="cont-staff-1">
      <div className="row">
        <div className="col-md-6">
          <div className="details-staff">
            <div className="body-staff">
              <p className="name-staff">{staffDetails.nombre}</p>
              <h5 className="lastname-staff">{staffDetails.apelli}</h5>
              <div>
                <a href={`https://www.instagram.com/${staffDetails.red_soc}`} target="_blank" rel="noopener noreferrer" className="insta-logo">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
            <div className="staff-details">
              <div className="social-m">
                <h2>Categoría: </h2>
                <p>{staffDetails.nom_cat}</p>
              </div>
              <div className="social-m">
                <h2>Ciudad: </h2>
                <p>{staffDetails.nom_ciu}</p>
              </div>
              <div className="social-m">
                <h2>País: </h2>
                <p>{staffDetails.nom_pai}</p>
              </div>
              <div className="biograf">
                <p>{staffDetails.biograf}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={`${url}/${staffDetails.fot_fam}`} className="card-img-st" alt={staffDetails.nombre} />
        </div>
      </div>
    </div>
  );
};
