// NavLinks.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownComponent from './DropDownComponent';
import { CATEGORY, CONTACT, PRODUCTS } from '../utils/constants';
import { categories } from '../data/categories';


const NavLinks: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex space-x-4">
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <Link to={`${CATEGORY}`} className="hover:text-red-300">
          Categories
        </Link>
        {dropdownOpen && (
          <DropDownComponent listOfCategory={categories} />
        )}
      </div>
      <Link to={`${PRODUCTS}`}  className="hover:text-red-300">
        Products
      </Link>
      <Link to={`${CONTACT}`} className="hover:text-red-300">
        Contact Us
      </Link>
    </div>
  );
};

export default NavLinks;
