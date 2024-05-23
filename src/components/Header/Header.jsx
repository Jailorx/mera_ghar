import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../assets/mera-ghar-logo.png";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center bg-white p-2 shadow-md sm:shadow-none">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={Logo} alt="mera_ghar_logo" width="100px" />
          </Link>
          {/* Website navigation */}
          <div className="hidden sm:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary-custom-indigo-700 font-bold text-xl"
                    : "text-black rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
                } p-4`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary-custom-indigo-700 font-bold text-xl"
                    : "text-black rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
                } p-4`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-primary-custom-indigo-700 font-bold text-xl"
                    : "text-black rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
                } p-4`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* Mobile navigation */}
        <div
          className="flex sm:hidden cursor-pointer"
          onClick={() => setIsMobileMenu((prev) => !prev)}
        >
          {isMobileMenu ? (
            <IoClose size="50px" className="text-primary-custom-indigo-700" />
          ) : (
            <IoMenu size="50px" className="text-primary-custom-indigo-700" />
          )}
        </div>
        <div className="hidden sm:flex items-center">
          <Link
            to="/signin"
            className="px-5 py-2 bg-primary-custom-indigo-700 text-white font-bold rounded-lg"
          >
            Sign In
          </Link>
        </div>
      </nav>
      <div
        className={`w-full flex flex-col justify-center items-center bg-primary-custom-indigo-700 sm:hidden pb-4 transition-all duration-300 ease-in-out transform ${
          isMobileMenu
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-primary-custom-indigo-100 font-bold text-xl"
                : "text-white rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
            } p-4`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-primary-custom-indigo-100 font-bold text-xl"
                : "text-white rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
            } p-4`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-primary-custom-indigo-100 font-bold text-xl"
                : "text-white rounded-xl hover:bg-primary-custom-indigo-100/20 transition-colors ease-in-out"
            } p-4`
          }
        >
          Contact
        </NavLink>
        <Link
          to="/signin"
          className="px-5 py-2 bg-white text-primary-custom-indigo-700 font-bold rounded-lg"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};

export default Navbar;
