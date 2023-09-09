import { Link } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavBarLink({ to, children, ...props }: NavBarLinkProps) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default NavBarLink;
