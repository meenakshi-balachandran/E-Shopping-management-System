import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import CartAndButtons from './CartAndButtons';
import fashion from '../assets/fashion.jpg';

const NavBar: React.FC = () => {

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="flex items-center text-xl font-bold">
        <img className="rounded-full h-16 w-16" src={fashion} alt="Fashion logo" />
        <Link to="/" className="ml-4">Ms & Mrs Fashion</Link>
      </div>
      <NavLinks /> 
      <CartAndButtons />
    </nav>
  );
};

export default NavBar;
