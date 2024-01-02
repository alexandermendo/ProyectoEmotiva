import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './staffDash.css';

export const StaffDash = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [error, setError] = useState(null);
  const [editingCelebrity, setEditingCelebrity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/celebrities/consulta');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setCelebrities(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (celebrity) => {
    setEditingCelebrity(celebrity);
  };

  const handleCancelUpdate = () => {
    setEditingCelebrity(null);
  };

  const handleSaveUpdate = async () => {
    try {
      console.log('Antes de la actualización:', editingCelebrity);

      const formData = new FormData();
      formData.append('identi', editingCelebrity.identi);
      formData.append('nombre', editingCelebrity.nombre);
      formData.append('apellido', editingCelebrity.apelli);
      formData.append('nom_cat', editingCelebrity.nom_cat);
      formData.append('nom_ciu', editingCelebrity.nom_ciu);
      formData.append('fec_nac', editingCelebrity.fec_nac);
      formData.append('biograf', editingCelebrity.biograf);
      formData.append('red_soc', editingCelebrity.red_soc);

      // Si hay una nueva foto, adjúntala al FormData
      // if (editingCelebrity.fot_fam instanceof File) {
      //   formData.append('foto', editingCelebrity.fot_fam);
      // }

      const response = await fetch('http://localhost:3000/celebrities/updatePersonas', {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) throw new Error('Error al actualizar la celebridad');

      const updatedCelebrityData = await response.json();

      // Actualiza el estado con los datos actualizados del servidor
      const updatedCelebrities = celebrities.map((celebrity) =>
        celebrity.identi === updatedCelebrityData.identi ? updatedCelebrityData : celebrity
      );

      console.log('Después de la actualización:', updatedCelebrityData);
      setCelebrities(updatedCelebrities);
      setEditingCelebrity(null);
    } catch (error) {
      console.error('Error al actualizar la celebridad:', error);
    }
  };

  const handleDelete = async (identi) => {
    try {
      const response = await fetch(`http://localhost:3000/celebrities/deletePersonas/${identi}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar la celebridad');
      const updatedCelebrities = celebrities.filter((celebrity) => celebrity.identi !== identi);
      setCelebrities(updatedCelebrities);
    } catch (error) {
      setError(error.message);
    }
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
                <td>
                  <button className="edit" onClick={() => handleUpdate(celebrity)}>
                    <FontAwesomeIcon icon={faEdit} size="1x" />
                  </button>
                  <button className="trash" onClick={() => handleDelete(celebrity.identi)}>
                    <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingCelebrity && (
        <div className="edit-form">
          <h3>Editar Celebridad</h3>
          <form>
            <input type="text" value={editingCelebrity.identi} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, identi: e.target.value })}
              disabled
            />
            <input type="text" value={editingCelebrity.nombre} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, nombre: e.target.value })} />
            <input type="text" value={editingCelebrity.apelli} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, apelli: e.target.value })} />
            <input type="text" value={editingCelebrity.nom_cat} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, nom_cat: e.target.value })} />
            <input type="text" value={editingCelebrity.nom_ciu} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, nom_ciu: e.target.value })} />
            <input type="text" value={editingCelebrity.biograf} onChange={(e) => setEditingCelebrity({ ...editingCelebrity, biograf: e.target.value })} />
            {/* <input type="file" onChange={(e) => { const file = e.target.files[0]; if (file) setEditingCelebrity({ ...editingCelebrity, fot_fam: file }) }} />             */}
            <div>
              <button type="button" onClick={handleCancelUpdate}> Cancelar </button>
              <button type="button" onClick={handleSaveUpdate}> Guardar Cambios </button>
            </div>

          </form>
        </div>
      )}
    </div>
  );
};
