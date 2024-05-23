import Logo from "../../assets/mera-ghar-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <a href="/">
          <img src={Logo} alt="mera_ghar_logo" width="100px" />
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="/"
          className="px-5 py-2  bg-primary-custom-indigo-700 text-white font-bold rounded-lg "
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
