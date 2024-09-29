import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'];

const NavBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate()
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('AppContextProvider is missing. Ensure your app is wrapped with AppContextProvider.');
  }
  const { cartItems } = appContext;
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {currentPath === '/' && (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
          <div className="text-xl font-bold">
            <Link to="/">E-Shopping Mart</Link>
          </div>

          <div className="flex space-x-4">
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to={"/categories"} className="hover:text-gray-300">Categories</Link >
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                  {categories.map((category, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <button onClick={() => navigate("/home")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Login
            </button>
          </div>
        </nav>
      )}

      {currentPath === '/home' && (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
          <div className="text-xl font-bold">
            <Link to="/">E-SHOPPING MART</Link>
          </div>
          <div className="flex space-x-4">
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to={"/categories"} className="hover:text-gray-300">Categories</Link >
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                  {categories.map((category, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-4 items-center">
              <Link to="/cart" className="relative hover:text-gray-300">
                <span className="text-lg">🛒</span>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
            <button onClick={() => navigate("/")} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
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
