import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { EmotivaLoginRouter } from "./EmotivaLoginRouter";
import { EmotivaHomeRouter } from "./EmotivaHomeRouter";
import { EmotivaAccountRouter } from "./EmotivaAccountRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<EmotivaLoginRouter />} />
          <Route path="/" element={<EmotivaHomeRouter />} />
          <Route path="/create-account" element={<EmotivaAccountRouter />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};