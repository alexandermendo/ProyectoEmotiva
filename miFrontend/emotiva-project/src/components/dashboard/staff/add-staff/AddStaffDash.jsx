import { useState } from "react";
import './addStaffDash.css';

export const AddStaffDash = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    ide_cat: 0,
    ide_pai: 0,
    ide_ciu: 0,
    fec_nac: "",
    red_soc: "",
    biograf: "",
    foto: null, // Para el campo de la foto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, foto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto FormData para enviar los datos y la imagen
    const formDataToSend = new FormData();
    formDataToSend.append("nombre", formData.nombre);
    formDataToSend.append("apellido", formData.apellido);
    formDataToSend.append("ide_cat", formData.ide_cat);
    formDataToSend.append("ide_pai", formData.ide_pai);
    formDataToSend.append("ide_ciu", formData.ide_ciu);
    formDataToSend.append("fec_nac", formData.fec_nac);
    formDataToSend.append("red_soc", formData.red_soc);
    formDataToSend.append("biograf", formData.biograf);
    formDataToSend.append("foto", formData.foto);

    try {
      const response = await fetch('http://localhost:3000/celebrities/personas', {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Celebridad agregada con éxito");
        console.log("Data:", formData.apellido);
      } else {
        console.error("Error al agregar celebridad");
      }
    } catch (error) {
      console.error("Error al agregar celebridad:", error);
    }
  };

  return (
    <div className="container">
      <h2>Ingresar Celebridad</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">
                Categoría
              </label>
              <input
                type="text"
                className="form-control"
                id="ide_cat"
                name="ide_cat"
                value={formData.ide_cat}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">
                País
              </label>
              <input
                type="text"
                className="form-control"
                id="ide_pai"
                name="ide_pai"
                value={formData.ide_pai}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ciudad" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="form-control"
                id="ide_ciu"
                name="ide_ciu"
                value={formData.ide_ciu}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fechaNacimiento" className="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="fec_nac"
                name="fec_nac"
                value={formData.fec_nac}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="instagram" className="form-label">
                Instagram
              </label>
              <input
                type="text"
                className="form-control"
                id="red_soc"
                name="red_soc"
                value={formData.red_soc}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="biografia" className="form-label">
                Biografía
              </label>
              <textarea
                className="form-control"
                id="biograf"
                name="biograf"
                value={formData.biograf}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-add-cel">
              Ingresar Celebridad
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
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
