import './entertainment.css';

export const Entertainment = () => {
  // Datos de entretenimiento
  const entertainmentData = [
    {
      fecha: "Fecha 1",
      titulo: "Título de Entretenimiento 1",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 2",
      titulo: "Título de Entretenimiento 2",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 3",
      titulo: "Título de Entretenimiento 3",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 4",
      titulo: "Título de Entretenimiento 4",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 5",
      titulo: "Título de Entretenimiento 5",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 6",
      titulo: "Título de Entretenimiento 6",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 7",
      titulo: "Título de Entretenimiento 7",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 8",
      titulo: "Título de Entretenimiento 8",
      imagen: "../assets/Paris.jpg",
    },
    {
      fecha: "Fecha 9",
      titulo: "Título de Entretenimiento 9",
      imagen: "../assets/Paris.jpg",
    },
  ];

  // Función para dividir el arreglo en grupos de 3 (filas)
  const chunk = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Divide los datos en grupos de 3 (filas)
  const rows = chunk(entertainmentData, 3);

  return (
    <div className="entertainment-card-container">
      <div className="header">
        <img
          src="../assets/Icono.png"
          alt="Logo de la empresa"
          className="logo"
        />
        <h2>Entretenimiento</h2>
      </div>
      
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((item, columnIndex) => (
            <div className="col-md-4" key={columnIndex}>
              <div className="entertainment-cont">
                <div className="entertainment-image">
                  <img
                    src={item.imagen}
                    alt="Imagen de entretenimiento"
                    className="img-fluid"
                  />
                </div>
                <div className="entertainment-content">
                  <p>{item.fecha}</p>
                  <h3>{item.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
