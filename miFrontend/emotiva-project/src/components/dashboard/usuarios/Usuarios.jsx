import { useState } from 'react';
import './usuarios.css';

export const Usuarios = () => {
  const [canciones, setCanciones] = useState([]);
  const [nuevaCancion, setNuevaCancion] = useState('');
  const [nuevoArtista, setNuevoArtista] = useState('');
  const [nuevaCalificacion, setNuevaCalificacion] = useState('');

  const agregarCancion = () => {
    if (nuevaCancion !== '' && nuevoArtista !== '' && nuevaCalificacion !== '') {
      const nuevaListaCanciones = [...canciones, { nombre: nuevaCancion, artista: nuevoArtista, calificacion: parseInt(nuevaCalificacion) }];
      const listaOrdenada = nuevaListaCanciones.sort((a, b) => b.calificacion - a.calificacion); // Ordenar de mayor a menor calificación
      setCanciones(listaOrdenada);
      console.log('Canciones enviadas:', listaOrdenada);
      setNuevaCancion('');
      setNuevoArtista('');
      setNuevaCalificacion('');
    }
  };

  return (
    <div className="container">
      <h2>Ingresar Top 10</h2>
      <form onSubmit={(e) => { e.preventDefault(); agregarCancion(); }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de la canción"
            value={nuevaCancion}
            onChange={(e) => setNuevaCancion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Artista"
            value={nuevoArtista}
            onChange={(e) => setNuevoArtista(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Calificación"
            value={nuevaCalificacion}
            onChange={(e) => setNuevaCalificacion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Canción</button>
      </form>

      <div className='cont-can'>
        <h3>Canciones:</h3>
        <ul className="list-group">
          {canciones.map((cancion, index) => (
            <li key={index} className="list-group-item">{cancion.nombre}: {cancion.calificacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};