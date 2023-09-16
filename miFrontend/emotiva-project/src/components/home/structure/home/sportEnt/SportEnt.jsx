import './sportEnt.css';

export const SportEnt = () => {
  return (
    <div className="styletop-container st-cont-1">
      <div className="row">
        <div className="col-md-12">
          <h2>Deportes</h2>
        </div>
        <div className="col-md-3">
          <div className="card sport-card">
            <img
              className="card-img-top"
              src="../assets/Paris.jpg"
              alt="Ligero"
            />
            <div className="card-body">
              <p className="card-text">Descripción corta de la nota 1.</p>
              <h5 className="card-title">Título de la Nota 1</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card sport-card">
            <img
              className="card-img-top"
              src="../assets/Paris.jpg"
              alt="Ligero"
            />
            <div className="card-body">
              <p className="card-text">Descripción corta de la nota 2.</p>
              <h5 className="card-title">Título de la Nota 2</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card sport-card">
            <img
              className="card-img-top"
              src="../assets/Paris.jpg"
              alt="Ligero"
            />
            <div className="card-body">
              <p className="card-text">Descripción corta de la nota 3.</p>
              <h5 className="card-title">Título de la Nota 3</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card sport-card">
            <img
              className="card-img-top"
              src="../assets/Paris.jpg"
              alt="Ligero"
            />
            <div className="card-body">
              <p className="card-text">Descripción corta de la nota 4.</p>
              <h5 className="card-title">Título de la Nota 4</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
