import { useAuthContext } from "../../contexts/AuthContext";
import { EmotivaHomeAdmin } from "../home/structure/home/structure/admin/EmotivaHomeAdmin";

export const EmotivaHomeUserRouter = () => {
  const { isAuthenticated, rol} = useAuthContext();
  console.log("Autenticado: ", isAuthenticated);
  console.log("Rol: ", rol);

  return (
    <div>
      {isAuthenticated ? (
        rol === "Administrador" ? (
          <EmotivaHomeAdmin />
        ) : (
          <div>
            <p>Debe iniciar sesión como administrador para acceder a esta página.</p>
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
