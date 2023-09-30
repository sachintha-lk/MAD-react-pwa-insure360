import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import LogoText from "../LogoText";
import NavBarLink from "./NavBarLink";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useOnClickOutside } from "usehooks-ts";

import { AuthContext } from "../../context/AuthProvider";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const { user, setUser } = useContext(AuthContext)!;

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useOnClickOutside(menuRef, handleClickOutside);

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
        setUser(undefined);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleMenuItemClick = () => {
    if (isMobile) {
      toggleMenu();
    }
  };

  // Define your navigation links here
  const navLinks = (
    <>
      {user ? (
        <>
          <li>
            <NavBarLink
              to="/test"
              children="Test"
              onClick={handleMenuItemClick}
            />
          </li>
          <li>
            <NavBarLink
              to="/dashboard"
              children="Dashboard"
              onClick={handleMenuItemClick}
            />
          </li>
          <li>
            <NavBarLink
              to="/vehicles"
              children="Vehicles"
              onClick={handleMenuItemClick}
            />
          </li>
          <li>
            <NavBarLink
              to="/reports"
              children="Reports"
              onClick={handleMenuItemClick}
            />
          </li>

          <li className="block w-full px-4 py-2 text-center text-xl font-medium text-white md:text-blue-800">
            {user?.displayName || user.email}
          </li>

          <button
            className="block w-full px-4 py-2 text-center text-xl font-medium text-white md:text-blue-800"
            onClick={() => {
              handleSignOut();
              handleMenuItemClick();
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <NavBarLink
              to="/login"
              children="Login"
              onClick={handleMenuItemClick}
            />
          </li>
          <li>
            <NavBarLink
              to="/signup"
              children="Sign Up"
              onClick={handleMenuItemClick}
            />
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className=" z-50 w-full  bg-white">
      <div className="mx-auto flex w-full items-center justify-between md:w-11/12">
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
          ref={menuRef}
          className={`${
            isMenuOpen ? "" : "hidden"
          } absolute z-50 flex w-full flex-col space-y-2 bg-gradient-to-r from-blue-700 to-blue-800 `}
        >
          {navLinks}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
