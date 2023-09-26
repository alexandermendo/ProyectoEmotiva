import './styleTop.css';

export const StyleTop = () => {
  return (
    <div className="styletop-container st-cont-2">
      <div className="row align-items-start">
        <div className="col-md-6">
          <div className="header">
            <img
              src="../assets/Icono.png"
              alt="Logo de la empresa"
              className="logo"
            />
            <h2>Estilo de Vida</h2>
          </div>

          <div className="row">
            {/* Primera tarjeta */}
            <div className="col-12 col-sm-6">
              <div className="card estilo-card">
                <img
                  className="foto-card-2 img-fluid"
                  src="../assets/Paris.jpg"
                  alt="Ligero"
                />
                <div className="card-body">
                  <p>Hola Mundo</p>
                  <h5 className="card-title">Aquí hay una nota de estilo de vida</h5>
                </div>
              </div>
            </div>

            {/* Segunda tarjeta */}
            <div className="col-12 col-sm-6">
              <div className="card estilo-card">
                <img
                  className="foto-card-2 img-fluid"
                  src="../assets/Paris.jpg"
                  alt="Ligero"
                />
                <div className="card-body">
                  <p>Hola Mundo</p>
                  <h5 className="card-title">Aquí hay otra nota de estilo de vida</h5>
                </div>
              </div>
            </div>

            {/* Tercera tarjeta */}
            <div className="col-12 col-sm-6">
              <div className="card estilo-card">
                <img
                  className="foto-card-2 img-fluid"
                  src="../assets/Paris.jpg"
                  alt="Ligero"
                />
                <div className="card-body">
                  <p>Hola Mundo</p>
                  <h5 className="card-title">Tercera nota de estilo de vida</h5>
                </div>
              </div>
            </div>

            {/* Cuarta tarjeta */}
            <div className="col-12 col-sm-6">
              <div className="card estilo-card">
                <img
                  className="foto-card-2 img-fluid"
                  src="../assets/Paris.jpg"
                  alt="Ligero"
                />
                <div className="card-body">
                  <p>Hola Mundo</p>
                  <h5 className="card-title">Cuarta nota de estilo de vida</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className='top-10'>
            <div className="header">
              <img
                src="../assets/Icono.png"
                alt="Logo de la empresa"
                className="logo-e"
              />
              <h1>EMOTIVA Top 10</h1>
            </div>

            <ol>
              <li>
                <img src="../assets/Paris.jpg" className="img-top-10" alt="Portada Canción 1" />
                <div className='text-top'>
                  <h1>Top 1</h1>
                  <p>Top 1</p>
                </div>
              </li>
              <li>
                <img src="../assets/Buenos Aires.jpg" className="img-top-10" alt="Portada Canción 2" />
                <div className='text-top'>
                  <h1>Top 2</h1>
                  <p>Top 2</p>
                </div>
              </li>
              <li>
                <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                <div className='text-top'>
                  <h1>Top 3</h1>
                  <p>Top 3</p>
                </div>
              </li>
              <li>
                <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                <div className='text-top'>
                  <h1>Top 4</h1>
                  <p>Top 4</p>
                </div>
              </li>
              <li>
                <img src="../assets/PR.jpg" className="img-top-10" alt="Portada Canción 3" />
                <div className='text-top'>
                  <h1>Top 5</h1>
                  <p>Top 5</p>
                </div>
              </li>
            </ol>
            <button className='btn-top-list'>Ver la Lista Completa</button>
          </div>

          <div className='spot-cls'>
            <h1>Hola Mundo</h1>
            <p>Hola Mundo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
