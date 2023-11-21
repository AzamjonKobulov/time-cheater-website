import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../common/Button";
import MobileMenu from "../common/MobileMenu";

const links = [
  { label: "Home", path: "/" },
  { label: "Advantages", path: "/advantages" },
  { label: "How to use", path: "/how-to-use" },
  { label: "Tariffs", path: "/tariffs" },
  { label: "News", path: "/news" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () =>
      location.pathname === "/" && window.scrollY > 50
        ? setNavBg(true)
        : setNavBg(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full rounded-b-full transition-all duration-300 px-2 lg:px-5 3xl:px-0 ${
        navBg || location.pathname !== "/" ? "bg-gradient" : ""
      }`}
    >
      <MobileMenu onClose={handleClose} isOpen={isOpen} />
      <nav className="max-w-base mx-auto h-14 md:h-20 lg:h-auto flex items-center justify-between px-5 lg:py-7">
        {/* LOGO */}
        <Link
          to="/"
          className="w-52 h-9 md:w-72 md:h-14 lg:w-[21rem] lg:h-[3.875rem] shrink-0"
        >
          <img
            src="/assets/images/logo-nav.png"
            alt="Logo"
            className="w-full h-full"
          />
          {}
        </Link>
        {/* LINKS */}
        <div className="w-3/5 hidden lg:flex items-center justify-between font-medium xl:text-lg text-white">
          <ul className="w-3/4 flex items-center justify-between">
            {links.map((link) => (
              <li key={link.label}>
                {location.pathname === "/" ? (
                  // Home page: Render a tags for "Advantages" and "How-to-use"
                  link.path === "/advantages" || link.path === "/how-to-use" ? (
                    <a href={link.path.replace("/", "#")}>{link.label}</a>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-brand-wind"
                          : "whitespace-nowrap lg:hover:text-brand-wind transition-all duration-200"
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                ) : (
                  // Other pages: Always render NavLink for all links
                  <NavLink
                    to={
                      link.path === "/advantages" || link.path === "/how-to-use"
                        ? "/"
                        : link.path
                    }
                    className={({ isActive }) =>
                      isActive
                        ? "text-brand-wind"
                        : "whitespace-nowrap lg:hover:text-brand-wind transition-all duration-200"
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          {/* BUTTON */}
          <Button className="border border-brand-purple-200 !text-brand-purple-200 transition-all duration-200 hover:bg-white py-2.5 px-9">
            Support
          </Button>
        </div>
        <button onClick={handleOpen} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
