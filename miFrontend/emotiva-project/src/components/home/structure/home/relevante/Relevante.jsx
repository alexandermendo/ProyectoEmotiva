import './relevante.css';

export const Relevante = () => {
  return (
    <div className="relevante-container relev-cont">
      <h2>Lo + Relevante</h2>
      <div className="row align-items-start">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <img
                className='foto-card img-fluid' // Agrega la clase 'img-fluid' aquí
                src="../assets/Paris.jpg"
                alt="Ligero" />
              {/* <h5 className="card-title">Título de la Tarjeta 1</h5>
              <p className="card-text">Contenido de la Tarjeta 1</p> */}
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className='card1 row'>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card w-100">
                <div className="card-body">
                  <img
                    className='foto-card-1 img-fluid' // Agrega la clase 'img-fluid' aquí
                    src="../assets/Paris.jpg"
                    alt="Ligero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
