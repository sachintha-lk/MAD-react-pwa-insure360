import { Link } from "react-router-dom";
import LogoText from "../LogoText";
import NavBarLink from "./NavBarLink";
import { useState, useEffect } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define your navigation links here
  const navLinks = [
    { to: "/test", label: "Test" },
    { to: "/login", label: "Login" },
    { to: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between">
        <div className="ml-5 flex items-center">
          <Link to="/" children={<LogoText />} />
        </div>
        {isMobile ? (
          <button
            className="mr-5 text-2xl focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "X" : "☰"}
          </button>
        ) : (
          <ul className="mr-10 flex space-x-4 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavBarLink to={link.to} children={link.label} />
              </li>
            ))}
          </ul>
        )}
      </div>
      {isMobile && (
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mt-4 flex flex-col space-y-2 bg-gradient-to-r from-blue-700 to-blue-800 `}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavBarLink to={link.to} children={link.label} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
