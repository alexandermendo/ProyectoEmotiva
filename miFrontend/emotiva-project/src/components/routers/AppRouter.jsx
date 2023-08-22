import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { EmotivaLoginRouter } from "./EmotivaLoginRouter";
import { EmotivaHomeRouter } from "./EmotivaHomeRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmotivaHomeRouter />} />
          <Route path="/login" element={<EmotivaLoginRouter />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};