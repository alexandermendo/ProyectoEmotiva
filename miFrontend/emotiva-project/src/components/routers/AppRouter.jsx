import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EmotivaLoginRouter } from "./EmotivaLoginRouter";
import { EmotivaHomeRouter } from "./EmotivaHomeRouter";
import { EmotivaAccountRouter } from "./EmotivaAccountRouter";
import { Dashboard } from "../dashboard/Dashboard";
import { Resumen } from "../dashboard/resumen/Resumen";
import { StaffDash } from "../dashboard/staff/StaffDash";
import { AddStaffDash } from "../dashboard/staff/add-staff/AddStaffDash"
import { Usuarios } from "../dashboard/usuarios/Usuarios";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<EmotivaLoginRouter />} />
        <Route path="/create-account" element={<EmotivaAccountRouter />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="resumen" element={<Resumen />} />
          <Route path="staff" element={<StaffDash/>} />
          <Route path="add-staff" element = {<AddStaffDash />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
        <Route path="/" element={<EmotivaHomeRouter />} />
      </Routes>
    </Router>
  );
};
