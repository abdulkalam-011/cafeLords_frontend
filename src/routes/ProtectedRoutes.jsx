import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
 const {isAuthenticated}= useSelector((state) => state.auth);

  return isAuthenticated?<Outlet />:<Navigate to='/login' replace />
};

export default ProtectedRoutes;
