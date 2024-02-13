// AddRelevante.jsx
import { useState } from 'react';
import { initialState, handleInputChange, handleFileChange, handleSubmit, addSlider } from '../../../../../../common/utils';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import './addRelevante.css';

export const AddRelevante = () => {
  const [formData, setFormData] = useState(initialState);

  return (
    <div className="container">
      <h2>Ingresar Contenido</h2>
      <p>Lo + Relevante</p>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={(e) => handleSubmit(e, formData, setFormData)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Título</label>
              <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={(e) => handleInputChange(e, formData, setFormData)} />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Subtítulo</label>
              <input type="text" className="form-control" id="subtitle" name="subtitle" value={formData.subtitle} onChange={(e) => handleInputChange(e, formData, setFormData)} />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Descripción</label>
              <ReactQuill className="quill-editor" id="description" name="description" value={formData.description}
                onChange={(value) => setFormData({ ...formData, description: value })}
              />
            </div>
            <button type="submit" onClick={addSlider} className="btn-add-cel">Ingresar Contenido</button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="foto" className="form-label">Foto</label>
            <input type="file" className="form-control" id="image" name="image" accept="image/*" onChange={(e) => handleFileChange(e, formData, setFormData)} />
          </div>
        </div>
      </div>
    </div>
  )
}
