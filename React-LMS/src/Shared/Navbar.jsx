import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const navlinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="/treg">Teacher</Link>
      
      
      
    </>
  );

  return (
    <div>
      <div className="navbar text-white bg-gray-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-[#07301e] rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <div className="a">
            <h4 className="italic font-semibold text-xs md:text-base">LMS</h4>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{navlinks}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
