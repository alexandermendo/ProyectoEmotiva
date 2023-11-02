import { useAuthContext } from "../../../../../../contexts/AuthContext"
import { Footer } from "../../footer/Footer"
import { NavbarAdmin } from "../../navbar/admin/admin/NavbarAdmin"
import { NavbarUsuario } from "../../navbar/usuario/NavbarUsuario"
import { DetalleStaff } from "../../staff/DetalleStaff"


export const EmotivaStaff = () => {
  const { isAuthenticated, rol } = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);
  return (
    <div>
      {isAuthenticated ? (
        rol === "Administrador" ? (
          <div>
            <NavbarAdmin />
            <DetalleStaff />
            <Footer />
          </div>
        ) : rol === "Usuario" ? (
          <div>
            <NavbarUsuario />
            <DetalleStaff />
            <Footer />
          </div>
        ) : (
          <div>
            <p>Debe iniciar sesión para acceder a esta página.</p>
          </div>
        )) : (
        alert("Debe iniciar sesión para acceder al Staff")
      )
      }
    </div>
  )
}
