import './emotivaHome.css'; // Importamos el archivo CSS de estilos

export const EmotivaHome = () => {
  return (
    <div className="emotiva-home">
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
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
