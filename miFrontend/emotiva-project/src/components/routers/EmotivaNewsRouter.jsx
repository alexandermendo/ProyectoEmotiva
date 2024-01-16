import { useAuthContext } from "../../contexts/AuthContext";
import { NavbarAdmin } from "../home/structure/home/navbar/admin/admin/NavbarAdmin";
import { NavbarUsuario } from "../home/structure/home/navbar/usuario/NavbarUsuario";
import { News } from "../home/structure/home/news/News";
import { Footer } from "../home/structure/home/footer/Footer";

export const EmotivaNewsRouter = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  const navbarComponent = isAuthenticated ? (
    rol === "Administrador" ? <NavbarAdmin /> : <NavbarUsuario />
  ) : <NavbarUsuario />;

  return (
    <div>
      {navbarComponent}
      <News />
      <Footer />
    </div>
  );
};
