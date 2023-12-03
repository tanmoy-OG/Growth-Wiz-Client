import Item from "antd/es/list/Item";
import { Link } from "react-router-dom";

const Footer = () => {
  const imp = [
    { id: 0, item: "Blogs", link: "/blogs" },
    { id: 1, item: "Plans & Pricing", link: "/plans" },
    { id: 2, item: "Contact Us", link: "/contact-us" },
  ];
  const services = [
    { id: 0, item: "Parent", link: "/parent" },
    { id: 1, item: "Child", link: "/child" },
  ];
  const socials = [
    { id: 0, item: "Linkedin", link: "" },
    { id: 1, item: "Facebook", link: "" },
    { id: 1, item: "Instagram", link: "" },
  ];
  return (
    <div>
      <div className="w-full py-10 flex justify-evenly bg-blue-800">
        <FooterItems heading={"Important Links"} item={imp} follow={0} />
        <FooterItems heading={"Services"} item={services} follow={0} />
        <FooterItems heading={"Follow Us"} item={socials} follow={1} />
      </div>
      <div className="w-full py-2 bg-black">
        <h1 className="text-slate-400 text-2xl text-center">
          &copy; Growth Wiz
        </h1>
      </div>
    </div>
  );
};

const FooterItems = ({ heading, item, follow }) => {
  const list = item.map((content) =>
    follow == 0 ? (
      <Link
        className="py-2 flex items-center text-base uppercase font-bold leading-snug text-blue-100 hover:text-orange-400 hover:opacity-75"
        to={content.link}
      >
        {content.item}
      </Link>
    ) : (
      <a
        className="py-2 text-base font-bold text-blue-100 hover:text-orange-400"
        href={content.link}
      >
        {content.item}
      </a>
    )
  );
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold mb-4 text-orange-400">{heading}</h1>
      {list}
    </div>
  );
};

export default Footer;
