import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchLogoData, url } from '../../../../../../../common/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import './footer.css';

export const Footer = () => {
  const navigate = useNavigate();
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [imageData, setImageData] = useState([{ fotoFileLogoPath: "" }]);
  const [setError] = useState(null);
  const staffRef = useRef();

  useEffect(() => {
    const fetchLogo = async () => { await fetchLogoData(setImageData, setError) };
    fetchLogo();
    const handleResize = () => { setIsMobile(window.innerWidth <= 768) };
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize) };
  }, [])

  const goToHome = () => { navigate("/") };
  const goToNews = () => { navigate("/news") };
  const goToLifeStyle = () => { navigate("/lifestyle") };
  const goToSports = () => { navigate("/sports") };
  const goToEntertainment = () => { navigate("/entertainment") };
  const goToStaff = () => { if (staffRef.current) { staffRef.current.scrollIntoView({ behavior: "smooth" }) } };

  return (
    <footer className={`footer ${isMobile ? 'mobile' : ''}`}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='foo-ter col-md-4'>
            <a className="footer-logo" href="/"><img className="img-logo-foo" src={`${url}/${imageData[0].fotoFileLogoPath}`} alt="Ligero" /></a>
          </div>
        </div>
      </div>

      {(!isMobile || isContentVisible) && (
        <div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='row'>
                <div className='foo-ter-nav col-md-6'>
                  <h1>Navegación</h1>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item-1"><a className="nav-link-1" onClick={goToHome}>Inicio</a></li>
                    <li className="nav-item-1"><a className="nav-link-1" onClick={goToNews}>Noticias</a></li>
                    <li className="nav-item-1"><a className="nav-link-1" onClick={goToSports}>Deportes</a></li>
                    <li className="nav-item-1"><a className="nav-link-1" onClick={goToEntertainment}>Entretenimiento</a></li>
                    <li className="nav-item-1"><a className="nav-link-1" onClick={goToLifeStyle}>Estilo de Vida</a></li>
                    <li className="nav-item-1"><a className="nav-link-1" href="#staff" onClick={goToStaff}>Staff EMOTIVA 2024</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='foo-ter-nav col-md-6'>
                <h1>Términos y Condiciones</h1>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item-1"><a className="nav-link-1" href="#">Acerca de Nosotros</a></li>
                  <li className="nav-item-1"><a className="nav-link-1" href="#">Contacto</a></li>
                  <li className="nav-item-1"><a className="nav-link-1" href="#">Política de Privacidad</a></li>
                </ul>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='foo-ter-nav col-md-6'>
                <h1>Redes Sociales</h1>
                <div className='social-icons'>
                  <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' color='white' />
                  </a>
                  <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                    <FontAwesomeIcon icon={faFacebookF} size='2x' color='white' />
                  </a>
                  <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='icon-margin'>
                    <FontAwesomeIcon icon={faXTwitter} size='2x' color='white' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <button className="toggle-button" onClick={() => setIsContentVisible(!isContentVisible)}>
          {isContentVisible ? 'Down' : 'Up'}
        </button>
      )}
      <p className='p-foot'>&copy; {new Date().getFullYear()} EMOTIVA. Todos los derechos reservados.</p>
    </footer>
  )
}