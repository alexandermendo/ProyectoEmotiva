import { useAuthContext } from "../../../../../../contexts/AuthContext";
import { Footer } from "../../footer/Footer";
import { NavbarAdmin } from "../../navbar/admin/admin/NavbarAdmin";
import { NavbarUsuario } from "../../navbar/usuario/NavbarUsuario";
import { DetalleStaff } from "../../staff/DetalleStaff";


export const EmotivaStaff = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);


  const navbarComponent = isAuthenticated ? (
    rol === "Administrador" ? <NavbarAdmin /> : <NavbarUsuario />
  ) : <NavbarUsuario />;

  return (
    <div>
      {navbarComponent}
      <DetalleStaff />
      <Footer />
    </div>
  )
}
