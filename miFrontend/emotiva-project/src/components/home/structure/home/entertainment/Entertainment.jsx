import './entertainment.css';

export const Entertainment = () => {
  return (
    <div className="entertainment-card">
      <div className='row'>
        <div className='entertainment-card-1 col-md-3'>
          <div className="entertainment-image">
            <img
              src="../assets/Paris.jpg"
              alt="Imagen de entretenimiento"
              className="img-fluid"
            />
          </div>
          <div className="entertainment-content">
            <p>Fecha</p>
            <h3>Título de Entretenimiento</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
