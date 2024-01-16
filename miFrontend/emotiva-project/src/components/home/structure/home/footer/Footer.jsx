import { useEffect, useState, useRef } from 'react';
import { url } from '../../../../../../../common/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './footer.css';

export const Footer = () => {
  const [imageData, setImageData] = useState([{ fotoFileLogoPath: "" }]);
  const [setError] = useState(null);
  const noticiasRef = useRef();
  const styleRef = useRef();
  const deportesRef = useRef();
  const entertainmentRef = useRef();
  const staffRef = useRef();

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

  const goToNews = () => {
    if (noticiasRef.current) {
      noticiasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const goToLifeStyle = () => {
    if (styleRef.current) {
      styleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSports = () => {
    if (deportesRef.current) {
      deportesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToEntertainment = () => {
    if (entertainmentRef.current) {
      entertainmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToStaff = () => {
    if (staffRef.current) {
      staffRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  <a className="nav-link-1" href="/">Inicio</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#noticias" onClick={goToNews}>Noticias</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#deportes" onClick={goToSports}>Deportes</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#entretenimiento" onClick={goToEntertainment}>Entretenimiento</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#lifestyle" onClick={goToLifeStyle}>Estilo de Vida</a>
                </li>
                <li className="nav-item-1">
                  <a className="nav-link-1" href="#staff" onClick={goToStaff}>Staff EMOTIVA 2024</a>
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
            <h1>Nuestras Redes Sociales</h1>
            <div className='social-icons'>
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                <FontAwesomeIcon icon={faInstagram} size='2x' color='white'/>
              </a>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                <FontAwesomeIcon icon={faFacebookF} size='2x' color='white'/>
              </a>
              <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                <FontAwesomeIcon icon={faTwitter} size='2x' color='white' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className='p-foot'>&copy; {new Date().getFullYear()} EMOTIVA. Todos los derechos reservados.</p>

    </footer>
  )
}