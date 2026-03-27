import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline"
    >
      {children}
    </a>
  );
};
