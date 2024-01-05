import { useState, useEffect } from "react";
import { url } from "../../../../../../common/utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './addStaffDash.css';

export const AddStaffDash = () => {
  const [formData, setFormData] = useState({
    nombre: "", apellido: "", nom_cat: "", nom_ciu: "", fec_nac: "", red_soc: "", biograf: "",
    foto: null,
  });

  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/categories/getCategory`);
        if (!response.ok) {
          throw new Error("Error al obtener la lista de categorias");
        }
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Error al obtener la lista de categorías:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${url}/cities/getCities`);
        if (!response.ok) {
          throw new Error("Error al obtener la lista de ciudades");
        }
        const data = await response.json();
        setCiudades(data);
      } catch (error) {
        console.error("Error al obtener la lista de ciudades:", error);
      }
    };
    fetchCities();
  }, []);

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
    const formDataToSend = new FormData();
    formDataToSend.append("nombre", formData.nombre);
    formDataToSend.append("apellido", formData.apellido);
    formDataToSend.append("nom_cat", formData.nom_cat);
    formDataToSend.append("nom_ciu", formData.nom_ciu);
    formDataToSend.append("fec_nac", formData.fec_nac);
    formDataToSend.append("red_soc", formData.red_soc);
    formDataToSend.append("biograf", formData.biograf);
    formDataToSend.append("foto", formData.foto);

    try {
      const response = await fetch(`${url}/celebrities/personas`, { method: "POST", body: formDataToSend });
      if (response.ok) {
        console.log("Celebridad agregada con éxito");
        console.log("Data:", formData.apellido);
      } else {
        console.error("Error al agregar celebridad");
      }
    } catch (error) { console.error("Error al agregar celebridad:", error); }
  };
  const addCelebrity = () => { alert('Señor Administrador, Celebridad agregada exitosamente'); }

  return (
    <div className="container-st">
      <h2>Staff EMOTIVA 2024</h2>
      <p>Ingresar Celebridad</p>
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
              <select
                className="form-select"
                id="nom_cat"
                name="nom_cat"
                value={formData.nom_cat}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una categoría
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria.ide_cat} value={categoria.nom_cat}>
                    {categoria.nom_cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="ciudad" className="form-label">
                Ciudad
              </label>
              <select
                className="form-select"
                id="nom_ciu"
                name="nom_ciu"
                value={formData.nom_ciu}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una ciudad
                </option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.ide_ciu} value={ciudad.nom_ciu}>
                    {ciudad.nom_ciu}
                  </option>
                ))}
              </select>
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
              <ReactQuill
                className="quill-editor"
                id="biograf"
                name="biograf"
                value={formData.biograf}
                onChange={(value) => setFormData({ ...formData, biograf: value })}
              />
            </div>
            <button type="submit" onClick={addCelebrity} className="btn-add-cel">
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
