import { Link, NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
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
    </>
  );
};

export default MobileNavbar;
