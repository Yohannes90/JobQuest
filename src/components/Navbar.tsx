import companyLogo from "/icon.png";

const Navbar = () => {
  return (
    <div className="navbar h-20 bg-gray-50 fixed px-20 z-10">
      <div className="navbar-start">
        <img src={companyLogo} alt="logo" className="w-8 h-9 mx-5" />
        <a
          href="#hero"
          className="btn btn-ghost text-green-950 text-xl hover:text-green-950"
        >
          Har Consultancy
        </a>
      </div>
      <div className="navbar-end pr-20">
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
    </div>
  );
};

export default Navbar;
