import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="w-full py-10 flex justify-evenly bg-indigo-800">
        <div className="">
          <h1 className="text-3xl font-semibold mb-4 text-indigo-200">Important Links</h1>
          <Link
            className="py-2 flex items-center text-base uppercase font-bold leading-snug text-indigo-200 hover:text-pink-600 hover:opacity-75"
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="py-2 flex items-center text-base uppercase font-bold leading-snug text-indigo-200 hover:text-pink-600 hover:opacity-75"
            to="/plans"
          >
            Plans and Pricing
          </Link>
          <Link
            className="py-2 flex items-center text-base uppercase font-bold leading-snug text-indigo-200 hover:text-pink-600 hover:opacity-75"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold mb-4 text-indigo-200">Services</h1>
          <Link
            className="py-2 flex items-center text-base uppercase font-bold leading-snug text-indigo-200 hover:text-pink-600 hover:opacity-75"
            to="/blogs"
          >
            Parent
          </Link>
          <Link
            className="py-2 flex items-center text-base uppercase font-bold leading-snug text-indigo-200 hover:text-pink-600 hover:opacity-75"
            to="/blogs"
          >
            Child
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-semibold mb-4 text-indigo-200">Follow Us</h1>
          <a
            className="py-2 text-base font-bold text-indigo-200 hover:text-pink-600"
            href=""
          >
            LINKEDIN
          </a>
          <a
            className="py-2 text-base font-bold text-indigo-200 hover:text-pink-600"
            href=""
          >
            FACEBOOK
          </a>
          <a
            className="py-2 text-base font-bold text-indigo-200 hover:text-pink-600"
            href=""
          >
            INSTAGRAM
          </a>
        </div>
      </div>
      <div className="w-full py-2 bg-black">
        <h1 className="text-slate-400 text-2xl text-center">&copy; Growth Wiz</h1>
      </div>
    </div>
  );
};

export default Footer;
