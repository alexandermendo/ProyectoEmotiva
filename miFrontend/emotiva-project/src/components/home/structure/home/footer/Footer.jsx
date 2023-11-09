import { useEffect, useState } from 'react';
import { url } from '../../../../../../../common/utils';
import './footer.css';

export const Footer = () => {
  const [imageData, setImageData] = useState([{ fotoFileLogoPath: "" } ]);
  const [setError] = useState(null);

  useEffect(() => {
    async function fetchLogoData() {
      try {
        const response = await fetch(`${url}/logo/getLogo`);
        if (!response.ok) throw new Error('No se pudo obtener el slider');
        const data = await response.json();
        setImageData(data.data);
      } catch (err) { setError(err.message); }
    }
    fetchLogoData();
  }, [])

  return (
    <footer className="footer">
      <div className='row'>
        <div className='col-md-12'>
          <div className='foo-ter col-md-4'>
            <a className="footer-logo" href="/"><img
              className="img-logo-foo"
              src={`${url}/${imageData[0].fotoFileLogoPath}`}
              alt="Ligero"
            /></a>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4'>
          <div className='row'>
            <div className='foo-ter-nav col-md-6'>
              <h1>Navegación</h1>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Inicio</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Noticias</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Deportes</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Entretenimiento</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Estilo de Vida</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#">Staff EMOTIVA 2024</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='foo-ter-nav col-md-6'>
            <h1>Términos y Condiciones</h1>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item-1">
                <a className="nav-link-1" href="#">Acerca de Nosotros</a>
              </li>
              <li className="nav-item-1">
                <a className="nav-link-1" href="#">Contacto</a>
              </li>
              <li className="nav-item-1">
                <a className="nav-link-1" href="#">Política de Privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='foo-ter-nav col-md-6'>
            <h1>Nuestros Patrocinadores</h1>
          </div>
        </div>
      </div>

      <p className='p-foot'>&copy; {new Date().getFullYear()} EMOTIVA. Todos los derechos reservados.</p>

    </footer>
  )
}