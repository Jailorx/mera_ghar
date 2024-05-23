import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../assets/mera-ghar-logo.png";
import WebsiteNavbar from "./WebsiteNavbar/WebsiteNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center bg-white p-2 shadow-md sm:shadow-none">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={Logo} alt="mera_ghar_logo" width="100px" />
          </Link>
          {/* Website navigation */}
          <WebsiteNavbar />
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
        <MobileNavbar />
      </div>
    </>
  );
};

export default Header;
