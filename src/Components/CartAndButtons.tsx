// CartAndButtons.tsx
import React, { useMemo, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Button from './Button';

const CartAndButtons: React.FC = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  if (!appContext) {
    throw new Error('AppContextProvider is missing.');
  }

  const cartQuantityNumber = useMemo(() => appContext.cartItems.length, [appContext.cartItems]);

  return (
    <div className="flex space-x-4 items-center ">
      {currentPath !== '/home' && (
        <Link to="/cart" className="relative hover:text-gray-300">
          <span className="text-lg">🛒</span>
          {cartQuantityNumber > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
              {cartQuantityNumber}
            </span>
          )}
        </Link>
      )}
      {currentPath === '/home' ? (
        <Button onClick={() => navigate('/login')} name="Login" />
      ) : (
        <Button onClick={() => navigate('/')} name="Logout" />
      )}
    </div>
  );
};

export default CartAndButtons;
