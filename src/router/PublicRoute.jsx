import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { checking } = useContext(AuthContext);

  return !checking ? children : <Navigate to="/marvel" />;
};
