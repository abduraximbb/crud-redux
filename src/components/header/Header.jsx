import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="sticky top-0">
      <nav className="flex justify-evenly py-3 bg-[#516091] text-[#74bec1]">
        <div className="flex gap-10">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/createuser"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "border-b-2 border-white" : "hover:text-gray-200"
              } transition`
            }
          >
            Create User
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
