import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EmotivaLoginRouter } from "./EmotivaLoginRouter";
import { EmotivaHomeRouter } from "./EmotivaHomeRouter";
import { EmotivaAccountRouter } from "./EmotivaAccountRouter";
import { Dashboard } from "../dashboard/Dashboard";
import { Resumen } from "../dashboard/resumen/Resumen";
import { StaffDash } from "../dashboard/staff/StaffDash";
import { AddStaffDash } from "../dashboard/staff/add-staff/AddStaffDash"
import { Usuarios } from "../dashboard/usuarios/Usuarios";
import { LOGIN, LOGOUT, PRIVATE } from "../../../../common/utils";
import { PrivateRoute } from "./private/PrivateRoute";
import { PublicRoute } from "./public/PublicRoute";
import { EmotivaLogoutRouter } from "./EmotivaLogoutRouter";
import { EmotivaHomeUserRouter } from "./EmotivaHomeUserRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<EmotivaHomeUserRouter />} />
          <Route path={LOGOUT} element={<EmotivaLogoutRouter />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route index element={<EmotivaHomeRouter />} />
          <Route path={LOGIN} element={<EmotivaLoginRouter />} />
          <Route path="/create-account" element={<EmotivaAccountRouter />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="resumen" element={<Resumen />} />
          <Route path="staff" element={<StaffDash />} />
          <Route path="add-staff" element={<AddStaffDash />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
      </Routes>
    </Router>
  );
};


