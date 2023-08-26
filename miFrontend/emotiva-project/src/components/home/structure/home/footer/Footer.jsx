import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EMOTIVA. Todos los derechos reservados.</p>
    </footer>
  )
}