import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

function ProtectedRoutes() {
  const location = useLocation();
  const { user } = useContext(AuthContext)!;

  // if there is no user logged in
  // redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
