"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
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
          <Link
            href="/driveclass"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            DriveClass
          </Link>
          <Link
            href="/mispeedo"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            MiSpeedo
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1.5 sm:items-end">
          <Link
            href="/terms"
            className="text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Terms and Conditions
          </Link>
          <p className="text-center text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Set2Pass Driving School
          </p>
        </div>
      </div>
    </footer>
  );
}
