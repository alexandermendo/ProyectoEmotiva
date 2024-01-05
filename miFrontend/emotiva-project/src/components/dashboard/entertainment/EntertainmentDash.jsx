import { useEffect, useState } from 'react';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from '../../../../../common/utils';

export const EntertainmentfDash = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [lifeEditing, setLifeEditing] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/entertainment/getEntertainment`);
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (n) => {
    setLifeEditing(n);
  };

  const handleCancelUpdate = () => {
    setLifeEditing(null);
    setImageFile(null);
  };

  const handleSaveUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('_id', lifeEditing._id);
      formData.append('title', lifeEditing.title);
      formData.append('subtitle', lifeEditing.subtitle);
      formData.append('description', lifeEditing.description);

      if (imageFile) formData.append('fotoFileNewsPath', imageFile);
      const response = await fetch(`${url}/entertainment/${lifeEditing._id}`, { method: 'PUT', body: formData });

      if (!response.ok) throw new Error('Error al actualizar los datos');

      // Actualizar el estado del slider después de la edición
      setNews((prevNews) => prevNews.map((n) => n._id === lifeEditing._id ? { ...n, ...lifeEditing } : n ));

      // Limpiar el estado de edición
      setLifeEditing(null);
      setImageFile(null);
    } catch (error) { console.error('Error al guardar los cambios:', error.message) }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`${url}/entertainment/${_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar la celebridad');
      const updatedNews = news.filter((n) => n._id !== _id);
      setNews(updatedNews);
    } catch (error) { setError(error.message) }
  };

  return (
    <div className='st-tab-sli'>
      <h2>Entretenimiento</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Subtítulo</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(news) && news.length > 0 ? (
              news.map((n) => (
                <tr key={n._id}>
                  <td>{n._id}</td>
                  <td>{n.title}</td>
                  <td>{n.subtitle}</td>
                  <td>{n.description}</td>
                  <td>
                    <button className="edit" onClick={() => handleUpdate(n)}>
                      <FontAwesomeIcon icon={faEdit} size="1x" />
                    </button>
                    <button className="trash" onClick={() => handleDelete(n._id)}>
                      <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay noticias disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {lifeEditing && (
        <div className="edit-form">
          <h3>Editar Noticia</h3>
          <form>
            <input
              type="text"
              value={lifeEditing._id}
              onChange={(e) =>
                setLifeEditing({ ...lifeEditing, _id: e.target.value })
              }
              disabled
            />
            <input
              type="text"
              value={lifeEditing.title}
              onChange={(e) =>
                setLifeEditing({ ...lifeEditing, title: e.target.value })
              }
            />
            <input
              type="text"
              value={lifeEditing.subtitle}
              onChange={(e) =>
                setLifeEditing({ ...lifeEditing, subtitle: e.target.value })
              }
            />
            <input
              type="text"
              value={lifeEditing.description}
              onChange={(e) =>
                setLifeEditing({
                  ...lifeEditing,
                  description: e.target.value,
                })
              }
            />
            <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
            <div>
              <button type="button" onClick={handleCancelUpdate}>
                Cancelar
              </button>
              <button type="button" onClick={handleSaveUpdate}>
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
