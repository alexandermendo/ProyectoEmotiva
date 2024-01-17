import { useAuthContext } from "../../contexts/AuthContext";
import { NavbarAdmin } from "../home/structure/home/navbar/admin/admin/NavbarAdmin";
import { Navbar } from "../home/structure/home/navbar/navbar/Navbar";
import { RelevanteNews } from "../home/structure/home/relevante/relevante-news/RelevanteNews";
import { Footer } from "../home/structure/home/footer/Footer";

export const EmotivaRelevanteRouter = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  const navbarComponent = isAuthenticated ? (
    rol === "Administrador" ? <NavbarAdmin /> : <Navbar />
  ) : <Navbar />;

  return (
    <div>
      {navbarComponent}
      <RelevanteNews />
      <Footer />
    </div>
  );
}