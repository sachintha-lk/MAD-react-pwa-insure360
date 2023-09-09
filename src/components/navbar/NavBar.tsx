import LogoText from "../LogoText";
import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <nav>
      <ul className="mx-auto flex w-5/6 justify-between p-3">
        <li>
          <NavBarLink to="/" children={<LogoText />} />
        </li>
        <li>
          <NavBarLink to="/test" children="Test" />
        </li>
        <li>
          <NavBarLink to="/login" children="Login" />
        </li>
        <li>
          <NavBarLink to="/login" children="Sign Up" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
