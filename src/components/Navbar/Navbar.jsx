import Logo from "../../assets/mera-ghar-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center">
      <div className="flex items-center gap-10 ">
        <Link to="/">
          <img src={Logo} alt="mera_ghar_logo" width="100px" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-5">
        <Link
          to="/signin"
          className="px-5 py-2  bg-primary-custom-indigo-700 text-white font-bold rounded-lg "
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
