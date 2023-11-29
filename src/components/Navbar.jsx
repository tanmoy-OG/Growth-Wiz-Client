import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-red-50 w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-4xl font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-pink-600"
              to="/"
            >
              Growth Wiz
            </Link>
            <button
              className="text-oink-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
                className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-slate-800 hover:opacity-75"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-slate-800 hover:opacity-75"
                to="/plans"
              >
                Plans and Pricing
              </Link>
              <Link
                className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-slate-800 hover:opacity-75"
                to="/about-us"
              >
                About Us
              </Link>
              <Link
                className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-pink-600 hover:opacity-75"
                to="/login"
              >
                Login / Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
