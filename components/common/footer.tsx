"use client";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <Logo />

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="/#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="/#instructors"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Instructors
          </a>
          <a
            href="/#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
          <a
            href="/#reviews"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Reviews
          </a>
          <a
            href="/driveclass"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            DriveClass
          </a>
          <a
            href="/mispeedo"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            MiSpeedo
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
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
          <p className="text-center text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Set2Pass Driving School
          </p>
        </div>
      </Container>
    </footer>
  );
}
