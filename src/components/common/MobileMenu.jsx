import { Link, NavLink, useLocation } from "react-router-dom";

import Button from "./Button";

const links = [
  { label: "Home", path: "/" },
  { label: "Advantages", path: "/advantages" },
  { label: "How to use", path: "/how-to-use" },
  { label: "Tariffs", path: "/tariffs" },
  { label: "News", path: "/news" },
  { label: "FAQ", path: "/faq" },
];

const MobileMenu = ({ onClose, isOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 -translate-y-full bg-brand-wind transition-all duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      <div className="flex items-center justify-between bg-brand-dark-blue py-2.5 px-5">
        <div className="rounded-lg p-0.5">
          <Link to="/">
            <img
              src="/assets/images/logo-nav.png"
              alt="Logo"
              className="w-52 h-9 shrink-0"
            />
          </Link>
        </div>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-between space-y-24 px-5 pb-20">
        <ul className="h-1/2 my-auto flex flex-col gap-6 text-xl text-white font-medium items-center justify-between">
          {links.map((link) => (
            <li key={link.label}>
              {location.pathname === "/" ? (
                // Home page: Render a tags for "Advantages" and "How-to-use"
                link.path === "/advantages" || link.path === "/how-to-use" ? (
                  <a href={link.path.replace("/", "#")} onClick={onClose}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive ? "text-brand-dark-blue" : ""
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
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? "text-brand-dark-blue" : ""
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-brand-dark-blue transition-all duration-200 py-3.5 px-9">
          Support
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
