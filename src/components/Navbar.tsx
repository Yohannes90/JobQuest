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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-harPrimary">
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
            className="menu menu-md dropdown-content mt-3 -left-20 z-[1] py-2 shadow bg-gray-50 rounded-box w-52"
          >
            <li>
              <a href="#hero" className="text-harPrimary hover:text-harSecondary">Home</a>
            </li>
            <li>
              <a href="#vision-mission" className="text-harPrimary hover:text-harSecondary">About us</a>
            </li>
            <li>
              <a href="#services" className="text-harPrimary hover:text-harSecondary">Services</a>
            </li>
            <li>
              <a href="#testimonials" className="text-harPrimary hover:text-harSecondary">Testimonial</a>
            </li>
            <li>
              <a href="#contact" className="text-harPrimary hover:text-harSecondary">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
