import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './staffDash.css';

export const StaffDash = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [error, setError] = useState(null);

  const fetchStaffData = async () => {
    try {
      const response = await fetch('http://localhost:3000/celebrities/consulta');
      if (!response.ok) throw new Error('Error al obtener los datos');
      const data = await response.json();
      setCelebrities(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []); // Llama a fetchStaffData al montar el componente

  const handleDelete = async (identi) => {
    try {
      const response = await fetch(`http://localhost:3000/celebrities/deletePersonas/${identi}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar la celebridad');
      const updatedCelebrities = celebrities.filter((celebrity) => celebrity.identi !== identi);
      setCelebrities(updatedCelebrities);
    } catch (error) { setError(error.message); }
  };

  return (
    <div className='st-tab-cont'>
      <h2>Celebridades</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Categoría</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {celebrities.map((celebrity) => (
              <tr key={celebrity.identi}>
                <td>{celebrity.identi}</td>
                <td>{celebrity.nombre}</td>
                <td>{celebrity.apelli}</td>
                <td>{celebrity.nom_cat}</td>
                <td>{celebrity.nom_ciu}</td>
                <td>
                  <button className="trash" onClick={() => handleDelete(celebrity.identi)}><FontAwesomeIcon icon={faTrashAlt} size="1x" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
