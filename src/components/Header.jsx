import { useEffect, useState } from "react";
import logo from "../assets/images/gcek_logo.png";
import { Link, useLocation } from "react-router";
import { MenuIcon } from "lucide-react";

const NavItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "OPAC", link: "/opac" },
  { name: "Research", link: "/research" },
  { name: "Digital Library", link: "/digital-library" },
  { name: "Staff members", link: "/staffs" },
  { name: "Library Rules", link: "/library-rules" },
  { name: "Suggest a Book", link: "/suggest-book" },
  { name: "Contact Us", link: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = NavItems.find((item) => item.link === currentPath);
    if (activeItem) {
      setActiveLink(activeItem.name);
    } else {
      setActiveLink("");
    }
  }, [location]);

  return (
    <header className="flex flex-col gap-4 bg-gradient-to-tr from-primary to-primary-dark pt-4 md:py-0 text-white  shadow-lg relative z-10">
      <div className="bg-black/30 backdrop-blur-sm py-1 px-4 md:px-40 justify-end items-center hidden md:flex">
        <span className="text-sm font-semibold px-4">Library Hours: 9 AM - 5 PM</span>
        
      </div>
      <div className="w-full mx-auto flex justify-between items-center px-4 md:px-40">
        {/* Logo */}
        <div className="flex items-center gap-4 text-[1.3rem] relative">
          <img
            src={logo}
            alt="GCEK Logo"
            srcSet=""
            className="h-24 w-24 mr-3 transition-transform duration-300 ease-in-out p-0.5 object-contain"
          />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-accent tracking-wide">
              Central Library
            </span>
            <h2 className="font-primary tracking-wide font-semibold">
              Government College of Engineering, Kalahandi
            </h2>
            <p className="text-sm font-title italic tracking-wide">
              (An Affiliated Institute Of BPUT, ODISHA)
            </p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`md:hidden flex items-center gap-4 text-[1.3rem] relative ${
            isMenuOpen ? "text-accent" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </div>
      </div>

      <nav className="bg-black/15 backdrop-blur-md transition-all duration-300 ease-in-out border-b-[3px] border-accent">
        <ul
          className={`flex flex-col md:flex-row list-none justify-center transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[300px]" : "max-h-0 md:max-h-full"
          } md:py-0 overflow-hidden md:overflow-visible`}
        >
          {NavItems.map((item, index) => (
            <li key={index} className="relative mx-0 md:mx-2 group">
              <Link
                to={item.link}
                className={`hover:text-accent font-semibold py-4 px-6 block transition-all duration-300 ease-in-out uppercase tracking-wider text-sm hover:bg-black/10 ${
                  activeLink === item.name
                    ? "text-accent font-bold"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-accent transform -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:w-4/5"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
