import { Link, NavLink } from "react-router-dom";
const WebsiteNavbar = () => {
  return (
    <div className="hidden sm:flex items-center">
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
  );
};

export default WebsiteNavbar;
