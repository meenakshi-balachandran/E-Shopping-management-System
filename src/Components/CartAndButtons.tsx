// CartAndButtons.tsx
import React, { useMemo, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import Button from "./Button";
import AuthContext from "../context/AuthContext";
import { CART, HOME, LOGIN } from "../utils/constants";
import { AuthorisationType } from "../enum/AuthorisationType";

const CartAndButtons: React.FC = () => {
  const appContext = useContext(AppContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { dispatch } = auth;

  const cartQuantityNumber = useMemo(
    () => appContext.state.cartItems.length,
    [appContext.state.cartItems]
  );
  const handleLogout = () => {
    dispatch({type: AuthorisationType.SIGN_OUT})
    navigate(`${HOME}`);
  };

  return (
    <div className="flex space-x-4 items-center ">
      {currentPath !== `${HOME}` && (
        <Link to={`${CART}`} className="relative hover:text-gray-300">
          <span className="text-lg">🛒</span>
          {cartQuantityNumber > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
              {cartQuantityNumber}
            </span>
          )}
        </Link>
      )}
      {currentPath === `${HOME}` ? (
        <Button className="bg-green-500" onClick={() => navigate(`${LOGIN}`)} name="Login" />
      ) : (
        <Button onClick={() => handleLogout()} name="Logout" />
      )}
    </div>
  );
};

export default CartAndButtons;
