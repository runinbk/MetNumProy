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
          <Route path="MetNumProy/" element={<InterpolationComponent />} />
          <Route
            path="MetNumProy/interpoinversa"
            element={<InterpolationComponent />}
          />
          <Route path="MetNumProy/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};
