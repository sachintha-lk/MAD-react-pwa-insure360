import { Link } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavBarLink({ to, children, ...props }: NavBarLinkProps) {
  return (
    <Link
      to={to}
      {...props}
      className="block w-full px-4 py-2 text-center text-xl font-medium text-white md:text-blue-800"
    >
      {children}
    </Link>
  );
}

export default NavBarLink;
