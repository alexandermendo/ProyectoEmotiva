import { useState } from 'react';
import { url } from '../../../../../../common/utils';
import './addRelevante.css';

export const AddRelevante = () => {
  const [formData, setFormData] = useState({ title: "", subtitle: "", description: "", fotoFileNewsPath: null });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, fotoFileNewsPath: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("subtitle", formData.subtitle);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("fotoFileNewsPath", formData.fotoFileNewsPath);

    try {
      const response = await fetch(`${url}/news/createNews`, { method: "POST", body: formDataToSend });
      if (response.ok) {
        console.log("Contenido agregada con éxito");
        console.log("Data:", formData.title);
      } else console.error("Error al agregar celebridad");
    } catch (error) { console.error("Error al agregar celebridad:", error); }
  };
  const addSlider = () => { alert('Señor Administrador, Contenido agregado exitosamente'); }

  return (
    <div className="container">
      <h2>Ingresar Contenido</h2>
      <p>Lo + Relevante</p>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Título 
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Subtítulo 
              </label>
              <input
                type="text"
                className="form-control"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">
                Descripción
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={addSlider} className="btn-add-cel">
              Ingresar Contenido
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="foto" className="form-label">
              Foto
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}