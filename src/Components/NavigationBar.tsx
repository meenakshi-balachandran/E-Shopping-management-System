import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation(); // Hook to get current route
  const currentPath = location.pathname; // Get the path (e.g., '/' or '/home')
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <>
      {/* Conditional Rendering based on the route */}
      {currentPath === '/' && (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
          {/* Left: Store Name */}
          <div className="text-xl font-bold">
            <Link to="/">My Store</Link>
          </div>

          {/* Center: Links */}
          <div className="flex space-x-4">
            <Link to="/categories" className="hover:text-gray-300">
              Categories
            </Link>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Right: Cart Icon */}
          <div className="flex space-x-4 items-center">
            <Link to="/cart" className="hover:text-gray-300">
              <span className="text-lg">🛒</span> {/* Cart Icon */}
            </Link>
            <button onClick={() => navigate("/home")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Login
            </button>
          </div>
        </nav>
      )}

      {currentPath === '/home' && (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
          {/* Left: Store Name */}
          <div className="text-xl font-bold">
            <Link to="/">My Store - Home</Link>
          </div>

          {/* Center: Links */}
          <div className="flex space-x-4">
            <Link to="/categories" className="hover:text-gray-300">
              Categories
            </Link>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Right: Cart Icon and Logout */}
          <div className="flex space-x-4 items-center">
            <Link to="/cart" className="relative hover:text-gray-300">
              <span className="text-lg">🛒</span> {/* Cart Icon */}
              {/* Example number of items in cart */}
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                2
              </span>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
