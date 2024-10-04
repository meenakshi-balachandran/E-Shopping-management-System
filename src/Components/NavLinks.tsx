// NavLinks.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownComponent from './DropDownComponent';

const categories = ['Kurtis', 'Leggins', 'Anarkalis', 'Western Tops', 'Corset'];

const NavLinks: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex space-x-4">
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <Link to="/categories" className="hover:text-red-300">
          Categories
        </Link>
        {dropdownOpen && (
          <DropDownComponent listOfCategory={categories} />
        )}
      </div>
      <Link to="/products" className="hover:text-red-300">
        Products
      </Link>
      <Link to="/contact" className="hover:text-red-300">
        Contact Us
      </Link>
    </div>
  );
};

export default NavLinks;
