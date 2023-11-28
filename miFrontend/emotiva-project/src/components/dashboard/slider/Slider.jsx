import { useEffect, useState } from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './slider.css';

export const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [error, setError] = useState(null);
  const [setSliderEditing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/slider/getSlider');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setSlider(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (sli) => {
    setSliderEditing(sli);
  };

  // const handleCancelUpdate = () => {
  //   setSliderEditing(null);
  // };

  return (
    <div className='st-tab-sli'>
      <h2>Slider</h2>
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
            {slider.map((sli) => (
              <tr key={sli._id}>
                <td>{sli._id}</td>
                <td>{sli.title}</td>
                <td>{sli.subtitle}</td>
                <td>{sli.description}</td>
                <td>
                  <button className="edit" onClick={() => handleUpdate(sli)}><FontAwesomeIcon icon={faEdit} size="1x" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* {sliderEditing && (
        <div className="edit-form">
          <h3>Editar Celebridad</h3>
          <form>
            <input type="text" value={sliderEditing.identi} onChange={(e) => setSliderEditing({ ...sliderEditing, _id: e.target.value })}
              disabled
            />
            <input type="text" value={sliderEditing.nombre} onChange={(e) => setSliderEditing({ ...sliderEditing, title: e.target.value })} />
            <input type="text" value={sliderEditing.apelli} onChange={(e) => setSliderEditing({ ...sliderEditing, subtitle: e.target.value })} />
            <input type="text" value={sliderEditing.nom_cat} onChange={(e) => setSliderEditing({ ...sliderEditing, description: e.target.value })} />
            <div>
              <button type="button" onClick={handleCancelUpdate}> Cancelar </button>
              <button type="button" onClick={handleSaveUpdate}> Guardar Cambios </button>
            </div>

          </form>
        </div>
      )} */}
    </div>
  );
};

