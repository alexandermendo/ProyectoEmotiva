import { useSelector } from "react-redux";
import { EmotivaHome } from "../home/structure/home/structure/EmotivaHome"

export const EmotivaHomeRouter = () => {
  const { rol } = useSelector((state) => state.auth);
  return (
    <div>
      {localStorage.getItem("token") ? (
        rol != "Administrador" ? (
          <div>
            <EmotivaHome />
          </div>
        ) : (
          <EmotivaHome />
        )
      ) : (
        <div>
          <EmotivaHome />
        </div>
      )}
    </div>
  );
};
