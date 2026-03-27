"use client";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { NavLink } from "@/components/common/nav-link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#instructors", label: "Instructors" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/driveclass", label: "DriveClass" },
  { href: "/mispeedo", label: "MiSpeedo" },
];

const mobileNavLinks = [
  ...navLinks,
  { href: "/#contact", label: "Contact us" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <Container as="nav" className="flex justify-between items-center py-4">
        <Logo onClick={() => setMobileOpen(false)} />

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="lg">
            <a href="/#contact">Contact us</a>
          </Button>
        </div>

        <button
          className="flex justify-center items-center size-10 rounded-lg text-foreground lg:hidden hover:cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="absolute top-full left-0 border-t border-border w-full h-screen overflow-y-hidden lg:hidden">
          <div className="flex flex-col bg-white">
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground p-6 border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className="grow size-full bg-black/5 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};
