import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../utils/constants";

const PrivateRouter = () => {
  const auth = useContext(AuthContext);
  const { state } = auth;

  return state.isAuthenticated ? <Outlet /> : <Navigate to={`${LOGIN}`}/>;
};

export default PrivateRouter;
