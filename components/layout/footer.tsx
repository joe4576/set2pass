import { PassRateDisclaimer } from "@/components/layout/pass-rate-disclaimer";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { navLinks } from "@/lib/constants";

export const Footer = () => (
  <footer className="border-t border-border pt-9 pb-7 [@media(max-width:699px)]:text-center">
    <Container>
      <div className="min-[700px]:flex min-[700px]:items-center min-[700px]:justify-between min-[700px]:gap-[60px]">
        <Logo className="[@media(max-width:699px)]:mx-auto [@media(max-width:699px)]:block" />
        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-6 min-[700px]:mt-0 min-[700px]:grid min-[700px]:grid-cols-3 min-[700px]:gap-x-10 min-[1024px]:flex"
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <a
              className="flex min-h-11 items-center text-[16px] hover:underline hover:underline-offset-4 [@media(max-width:699px)]:justify-center"
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </Container>
    <div className="mt-4 text-[14px] text-muted-foreground">
      <Container className="min-[700px]:flex min-[700px]:items-center min-[700px]:justify-between min-[700px]:gap-5">
        <p>© {new Date().getFullYear()} Set2Pass Driving School</p>
        <div className="mt-2.5 flex flex-wrap gap-x-6 [@media(max-width:699px)]:justify-center min-[700px]:mt-0">
          <a
            className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-4"
            href="/terms"
          >
            Terms and conditions
          </a>
          <a
            className="inline-flex min-h-11 items-center hover:underline hover:underline-offset-4"
            href="/privacy-policy"
          >
            Privacy policy
          </a>
        </div>
      </Container>
    </div>
    <PassRateDisclaimer />
  </footer>
);
