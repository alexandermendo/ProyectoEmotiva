import { useEffect, useState } from 'react';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from '../../../../../common/utils';
import './relevante.css';

export const RelevanteDash = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [newsEditing, setNewsEditing] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/news/getNews`);
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
    setNewsEditing(n);
  };

  const handleCancelUpdate = () => {
    setNewsEditing(null);
    setImageFile(null);
  };

  const handleSaveUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('_id', newsEditing._id);
      formData.append('title', newsEditing.title);
      formData.append('subtitle', newsEditing.subtitle);
      formData.append('description', newsEditing.description);

      if (imageFile) formData.append('fotoFileNewsPath', imageFile);
      const response = await fetch(`${url}/news/${newsEditing._id}`, { method: 'PUT', body: formData });

      if (!response.ok) throw new Error('Error al actualizar los datos');

      // Actualizar el estado del slider después de la edición
      setNews((prevNews) => prevNews.map((n) => n._id === newsEditing._id ? { ...n, ...newsEditing } : n ));

      // Limpiar el estado de edición
      setNewsEditing(null);
      setImageFile(null);
    } catch (error) { console.error('Error al guardar los cambios:', error.message) }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`${url}/news/${_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar la celebridad');
      const updatedNews = news.filter((n) => n._id !== _id);
      setNews(updatedNews);
    } catch (error) { setError(error.message) }
  };

  return (
    <div className='st-tab-sli'>
      <h2>Lo + Relevante</h2>
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

      {newsEditing && (
        <div className="edit-form">
          <h3>Editar Noticia</h3>
          <form>
            <input
              type="text"
              value={newsEditing._id}
              onChange={(e) =>
                setNewsEditing({ ...newsEditing, _id: e.target.value })
              }
              disabled
            />
            <input
              type="text"
              value={newsEditing.title}
              onChange={(e) =>
                setNewsEditing({ ...newsEditing, title: e.target.value })
              }
            />
            <input
              type="text"
              value={newsEditing.subtitle}
              onChange={(e) =>
                setNewsEditing({ ...newsEditing, subtitle: e.target.value })
              }
            />
            <input
              type="text"
              value={newsEditing.description}
              onChange={(e) =>
                setNewsEditing({
                  ...newsEditing,
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
