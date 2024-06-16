import companyLogo from "/icon.png";

const Navbar = () => {
  return (
    <div className="navbar h-20 bg-gray-50 fixed px-10 z-10 w-full">
      <div className="navbar-start">
        <img src={companyLogo} alt="logo" className="w-8 h-9 mx-2" />
        <a
          href="#hero"
          className="btn btn-ghost text-green-950 text-xl hover:text-green-950"
        >
          Har Consultancy
        </a>
      </div>
      <div className="hidden lg:flex navbar-end pr-20 ">
        <a
          href="#hero"
          className="btn btn-ghost text-green-950 hover:text-green-950 text-base"
        >
          Home
        </a>
        <a
          href="#vision-mission"
          className="btn btn-ghost text-green-950 hover:text-green-950 text-base"
        >
          About us
        </a>
        <a
          href="#services"
          className="btn btn-ghost text-green-950 hover:text-green-950 text-base"
        >
          Services
        </a>
        <a
          href="#testimonials"
          className="btn btn-ghost text-green-950 hover:text-green-950 text-base"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="btn btn-ghost text-green-950 hover:text-green-950 text-base"
        >
          Contact Us
        </a>
      </div>
      <div className="navbar-end lg:hidden">
        <button className="btn btn-outline border-transparent text-harPrimary hover:bg-harSecondary hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
