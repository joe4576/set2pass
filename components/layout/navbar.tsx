"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { NavLink } from "@/components/shared/nav-link";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const mobileNavLinks = [
  ...navLinks,
  { href: "/#contact", label: "Contact us" },
  { href: "/terms", label: "Terms and conditions" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setMobileOpen(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);
  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-white"
      ref={headerRef}
    >
      <Container
        as="nav"
        className="flex min-h-20 items-center justify-between gap-5 min-[1100px]:min-h-16"
        aria-label="Main navigation"
      >
        <Logo
          className="min-[1100px]:w-[166px]"
          onClick={() => setMobileOpen(false)}
        />
        <div className="hidden min-[1100px]:ml-auto min-[1100px]:flex min-[1100px]:items-center min-[1100px]:gap-7">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <Button
          asChild
          size="cta"
          variant="cta"
          className="hidden min-[1100px]:inline-flex min-[1100px]:min-h-10 min-[1100px]:px-5 min-[1100px]:py-2"
        >
          <a href="/#contact" onClick={() => setMobileOpen(false)}>
            Contact us
          </a>
        </Button>
        <button
          ref={toggleRef}
          className="flex min-h-12 min-w-12 items-center justify-end gap-2.5 border-0 bg-white py-2 pr-0 pl-2 font-semibold text-blue min-[1100px]:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </Container>
      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 top-20 bottom-0 cursor-default border-0 bg-transparent min-[1100px]:hidden"
            aria-label="Dismiss mobile menu"
            tabIndex={-1}
            onClick={() => {
              setMobileOpen(false);
              toggleRef.current?.focus();
            }}
          />
          <nav
            id="mobile-navigation"
            className="absolute inset-x-0 top-[calc(100%+1px)] z-10 max-h-[calc(100dvh-80px)] overflow-y-auto border-b-[2px] border-blue bg-white px-5 min-[1100px]:hidden"
            aria-label="Mobile navigation"
          >
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                className="block border-b border-border py-3 text-[18px] text-blue last:border-b-0"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};
