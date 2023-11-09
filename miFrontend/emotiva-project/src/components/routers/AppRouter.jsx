import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EmotivaLoginRouter } from "./EmotivaLoginRouter";
import { EmotivaHomeRouter } from "./EmotivaHomeRouter";
import { EmotivaAccountRouter } from "./EmotivaAccountRouter";
import { Dashboard } from "../dashboard/Dashboard";
import { Slider } from "../dashboard/slider/Slider";
import { StaffDash } from "../dashboard/staff/StaffDash";
import { AddStaffDash } from "../dashboard/staff/add-staff/AddStaffDash"
import { Usuarios } from "../dashboard/usuarios/Usuarios";
import { PrivateRoute } from "./private/PrivateRoute";
import { PublicRoute } from "./public/PublicRoute";
import { EmotivaLogoutRouter } from "./EmotivaLogoutRouter";
import { EmotivaHomeUserRouter } from "./EmotivaHomeUserRouter";
import { EmotivaStaff } from "../home/structure/home/structure/staff/EmotivaStaff";
import { LOGIN, LOGOUT, PRIVATE } from "../../../../common/utils";
import { AddSlider } from "../dashboard/slider/add-slider/AddSlider";


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

        <Route path="/staff/detalle/:id" element={<EmotivaStaff />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="resumen" element={<Slider />} />
          <Route path="staff" element={<StaffDash />} />
          <Route path="add-staff" element={<AddStaffDash />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="add-slider" element={<AddSlider />} />
        </Route>
      </Routes>
    </Router>
  );
};


