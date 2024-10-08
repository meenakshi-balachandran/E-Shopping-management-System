import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import CartAndButtons from "./CartAndButtons";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-green-800 h-16 text-white flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center text-xl font-bold">
        <Link to="/" className="ml-4">
          Ms & Mrs Fashion
        </Link>
      </div>
      <NavLinks />
      <CartAndButtons />
    </nav>
  );
};

export default NavBar;
