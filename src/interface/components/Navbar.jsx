import { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const name =
    user !== undefined && user !== null && user !== "" ? user.name : "";

  const onLogout = () => {
    logout();
    navigate("MetNumProy/login", { replace: true });
  };

  return (
    <>
      {/*  */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Metodos Numericos
          </Link>

          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive && "active"}`
                }
                to="/interpoinversa"
              >
                Interpolacion Inversa
              </NavLink>
            </div>
          </div>

          {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-primary">{name}</span>
              <button
                className="nav-item nav-link btn btn-outline-primary"
                onClick={onLogout}
              >
                Logout
              </button>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};
