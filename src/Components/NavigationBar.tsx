import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fashion from '../assets/fashion.jpg'
import Button from './Button';
import DropDownComponent from './DropDownComponent';

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

  const cartQuantityNumber = useMemo(() => {
    return appContext.cartItems.length;
  }, [appContext.cartItems])

  return (
    <>
      {currentPath === '/home' && (
        <nav className='flex space-x-28 justify-between items-center text-blue p-2'>
          <div className=' flex items-center text-xl font-bold'>
            <img className='rounded-full h-20 w-20' src={fashion}></img>
            <Link to='/'>Ms & Mrs Fashion</Link>
          </div>
          <div className='flex space-x-4'>
            <div className='relative' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to={'/categories'} className='hover:text-red-300'>Categories</Link >
              {dropdownOpen && (
                <DropDownComponent listOfCategory={categories} />
              )}
            </div>
            <Link to='/products' className='hover:text-red-300'>
              Products
            </Link>
            <Link to='/contact' className='hover:text-red-300'>
              Contact Us
            </Link>
          </div>
          <div className='flex space-x-4 items-center'>
            <Button onClick={() => navigate('/login')} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' name='Login' />
          </div>
        </nav>
      )}

      {currentPath != '/home' && (
        <nav className='flex space-x-28 justify-between items-center bg-gray-100 text-blue p-4'>
          <div className=' flex items-center text-xl font-bold'>
            <img className='rounded-full h-20 w-20' src={fashion}></img>
            <Link to='/'>Ms & Mrs Fashion</Link>
          </div>
          <div className='flex space-x-4'>
            <div className='relative' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to={'/categories'} className='hover:text-gray-300'>Categories</Link >
              {dropdownOpen && (
               <DropDownComponent listOfCategory={categories} />
              )}
            </div>
            <Link to='/products' className='hover:text-gray-300'>
              Products
            </Link>
            <Link to='/contact' className='hover:text-gray-300'>
              Contact Us
            </Link>
          </div>
          <div className='flex space-x-4 items-center'>
            <div className='flex space-x-4 items-center'>
              <Link to='/cart' className='relative hover:text-gray-300'>
                <span className='text-lg'>🛒</span>
                  <span className='absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1'>
                      {cartQuantityNumber}
                  </span>
              </Link>
            </div>
            <Button onClick={() => navigate('/')} className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded' name='Logout' />
          </div>
        </nav>
      )}

    </>
  );
};

export default NavBar;
