import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './detalleStaff.css';

export const DetalleStaff = () => {
  const { id } = useParams(); // Obtiene el valor del parámetro de la URL
  const [staffDetails, setStaffDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const serverUrl = "http://localhost:3000"

  // Supongamos que tienes una función para cargar los detalles del personal por su ID
  const fetchStaffDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/celebrities/${id}`);
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
            </div>
            <div className="staff-details">
              <p>Icon: {staffDetails.red_soc}</p>
              <p>Apellido: {staffDetails.apelli}</p>
              <p>Categoría: {staffDetails.nom_cat}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={`${serverUrl}/${staffDetails.fot_fam}`} className="card-img-st" alt={staffDetails.nombre} />
        </div>
      </div>
    </div>
  );
};
