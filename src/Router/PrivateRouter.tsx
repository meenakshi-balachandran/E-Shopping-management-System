import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../utils/constants";

const PrivateRouter = () => {
  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth;

  return isAuthenticated ? <Outlet /> : <Navigate to={`${LOGIN}`}/>;
};

export default PrivateRouter;
