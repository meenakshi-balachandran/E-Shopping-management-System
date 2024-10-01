import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fashion from '../assets/fashion.jpg'
import Button from './Button';

const categories = ['Kurtis', 'Leggins', 'Anarkalis', 'Weatern Tops', 'Coset'];

const NavBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate()
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('AppContextProvider is missing. Ensure your app is wrapped with AppContextProvider.');
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {currentPath === '/home' && (
        <nav className="flex space-x-28 justify-between items-center text-blue p-2">
          <div className=" flex items-center text-xl font-bold">
            <img className='rounded-full h-20 w-20' src={fashion}></img>
            <Link to="/">Ms & Mrs Fashion</Link>
          </div>
          <div className="flex space-x-4">
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to={"/categories"} className="hover:text-red-300">Categories</Link >
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
            <Link to="/products" className="hover:text-red-300">
              Products
            </Link>
            <Link to="/contact" className="hover:text-red-300">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Button onClick={() => navigate("/dashboard")} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" name="Login" />
          </div>
        </nav>
      )}

      {currentPath != '/home' && (
        <nav className="flex space-x-28 justify-between items-center bg-gray-100 text-blue p-4">
          <div className=" flex items-center text-xl font-bold">
            <img className='rounded-full h-20 w-20' src={fashion}></img>
            <Link to="/">Ms & Mrs Fashion</Link>
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
                {appContext.cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                    {appContext.cartItems.length}
                  </span>
                )}
              </Link>
            </div>
            <Button onClick={() => navigate("/")} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" name='Logout' />
          </div>
        </nav>
      )}

    </>
  );
};

export default NavBar;
