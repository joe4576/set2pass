"use client";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { NavLink } from "@/components/common/nav-link";
import { navLinks } from "@/components/common/navbar";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Container className="flex flex-col items-center justify-between gap-10 py-10 lg:flex-row">
        <Logo />

        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-end gap-3 lg:gap-2">
          <a
            href="/terms"
            className="text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Terms and Conditions
          </a>
          <a
            href="/privacy-policy"
            className="text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Set2Pass Driving School
          </p>
        </div>
      </Container>
    </footer>
  );
};
