import { useAuthContext } from "../../contexts/AuthContext";
import { NavbarAdmin } from "../home/structure/home/navbar/admin/admin/NavbarAdmin";
import { Navbar } from "../home/structure/home/navbar/navbar/Navbar";
import { News } from "../home/structure/home/news/News";
import { Footer } from "../home/structure/home/footer/Footer";

export const EmotivaNewsRouter = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  const navbarComponent = isAuthenticated ? (
    rol === "Administrador" ? <NavbarAdmin /> : <Navbar />
  ) : <Navbar />;

  return (
    <div>
      {navbarComponent}
      <News />
      <Footer />
    </div>
  );
};
