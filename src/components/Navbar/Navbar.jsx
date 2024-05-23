import Logo from "../../assets/mera-ghar-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center">
      <div className="flex items-center gap-10 ">
        <Link to="/">
          <img src={Logo} alt="mera_ghar_logo" width="100px" />
        </Link>
        {/* website navigation */}
        <div className="hidden sm:block">
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
              } p-4 `
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
      {/* mobile navigation */}
      <div className="flex sm:hidden  cursor-pointer">
        <IoMenu size="50px" className="text-primary-custom-indigo-700" />
      </div>
      <div className="hidden sm:flex items-center ">
        <Link
          to="/signin"
          className="px-5 py-2  bg-primary-custom-indigo-700 text-white font-bold rounded-lg"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
