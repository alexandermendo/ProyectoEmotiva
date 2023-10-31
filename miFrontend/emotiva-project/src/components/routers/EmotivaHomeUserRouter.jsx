import { useAuthContext } from "../../contexts/AuthContext";
import { EmotivaHomeAdmin } from "../home/structure/home/structure/admin/EmotivaHomeAdmin";
import { EmotivaHomeUser } from "../home/structure/home/structure/admin/EmotivaHomeUser";

export const EmotivaHomeUserRouter = () => {
  const { isAuthenticated, rol} = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  return (
    <div>
      {isAuthenticated ? (
        rol === "Administrador" ? (
          <EmotivaHomeAdmin />
        ) : rol === "Usuario" ? (
          <EmotivaHomeUser />
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
  );
};

