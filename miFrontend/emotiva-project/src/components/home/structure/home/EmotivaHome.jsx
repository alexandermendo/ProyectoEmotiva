import { Link } from 'react-router-dom';
import './emotivaHome.css'; // Importamos el archivo CSS de estilos

const logout = () => {
  // Eliminar el token de autenticación (usando localStorage o sessionStorage)
  localStorage.removeItem('token'); // Asegúrate de usar el mismo nombre de token que usaste para iniciar sesión
  // Verificar si el token se ha eliminado
  if (!localStorage.getItem('token')) {
    console.log('Token eliminado con éxito.'); // Esto se mostrará en la consola si el token se ha eliminado
  } else {
    console.log('Error al eliminar el token.'); // Esto se mostrará si no se pudo eliminar el token por algún motivo
  }
  // Realizar cualquier otra limpieza necesaria, como redireccionar a la página de inicio
}



export const EmotivaHome = () => {
  return (
    <div className="emotiva-home">
      <header className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/login">Inicio de Sesión</Link></li>
            <li><a href="/login" onClick={logout}>Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <h1>Bienvenido a nuestra página</h1>
        <p>¡Hola! Esta es una página de inicio de ejemplo creada con React.</p>
        <p>¡Esperamos que te sientas como en casa!</p>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mi Compañía. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
