import './relevante.css';

export const Relevante = () => {
  return (
    <div className="relevante-container relev-cont">
      <h2>Lo + Relevante</h2>
      <div className="row">
        {/* Tarjeta 1 */}
        <div className="col-md-5">
          <div className="card-pri">
            <img
              className='card-img-top-pri img-fluid'
              src="../assets/Paris.jpg"
              alt="Ligero" />
            <div className="card-body-rel">
              <p className="card-text-rel">Contenido de la Tarjeta 7</p>
              <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className='card-img-top img-fluid'
                  src="../assets/Paris.jpg"
                  alt="Ligero" />
                <div className="card-body-rel">
                  <p className="card-text-rel">Contenido de la Tarjeta 7</p>
                  <h5 className="card-title-rel">Título de la Tarjeta 7</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
