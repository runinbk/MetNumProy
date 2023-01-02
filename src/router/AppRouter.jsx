import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
// import { HeroesRoutes } from "../heroes";
// import { Navbar } from "../interface";
import { MethodRoutes } from "../MetNum/routes/MethodRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <MethodRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
