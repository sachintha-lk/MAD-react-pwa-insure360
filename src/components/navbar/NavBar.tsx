import { Link } from "react-router-dom";
import LogoText from "../LogoText";
import NavBarLink from "./NavBarLink";
import { useState, useEffect } from "react";

import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Signed Out!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Define your navigation links here
  const navLinks = (
    <>
      {auth?.currentUser ? (
        <>
          <li>
            <NavBarLink to="/test" children="Test" />
          </li>
          <li className="block w-full px-4 py-2 text-center text-xl font-medium text-white md:text-blue-800">
            {auth?.currentUser?.email}
          </li>

          <button
            className="block w-full px-4 py-2 text-center text-xl font-medium text-white md:text-blue-800"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavBarLink to="/login" children="Login" />
          </li>
          <li>
            <NavBarLink to="/signup" children="Sign Up" />
          </li>
        </>
      )}
    </>
  );

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
          <ul className="mr-10 flex space-x-4 ">{navLinks}</ul>
        )}
      </div>
      {isMobile && (
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mt-4 flex flex-col space-y-2 bg-gradient-to-r from-blue-700 to-blue-800 `}
        >
          {navLinks}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
