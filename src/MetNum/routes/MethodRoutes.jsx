import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../../auth";
import { Navbar } from "../../interface";
import InterpolationComponent from "../pages/InterpoInversa";

export const MethodRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<InterpolationComponent />} />
          <Route path="/interpoinversa" element={<InterpolationComponent />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};
