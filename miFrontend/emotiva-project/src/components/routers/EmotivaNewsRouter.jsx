import { useAuthContext } from "../../contexts/AuthContext";
import { NavbarAdmin } from "../home/structure/home/navbar/admin/admin/NavbarAdmin";
import { NavbarUsuario } from "../home/structure/home/navbar/usuario/NavbarUsuario";
import { News } from "../home/structure/home/news/News";
import { Footer } from "../home/structure/home/footer/Footer";

export const EmotivaNewsRouter = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  return (
    <div>
      {isAuthenticated ? (
        rol === "Administrador" ? (
          <div>
            <NavbarAdmin />
            <News />
            <Footer />
          </div>
        ) : rol === "Usuario" ? (
          <div>
            <NavbarUsuario />
            <News />
            <Footer />
          </div>
        ) : (
          <div>
            <p>Debe iniciar sesión para acceder a esta página.</p>
          </div>
        )
      ) : (
        <div>
          <p>Debe iniciar sesión para acceder a esta página.</p>
        </div>
      )}
    </div>
  )
}