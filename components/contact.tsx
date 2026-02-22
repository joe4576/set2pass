import { Button } from "@/components/ui/button";
import { Facebook, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl bg-primary p-10 text-center md:p-16">
        <h2
          className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to start your driving journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Get in touch today to join our waiting list. We offer automatic
          lessons with Nikki and manual lessons with Sean.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 w-64 mx-auto">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 rounded-full px-8 text-base w-full"
          >
            <a href="https://www.facebook.com/Set2Pass" target="_blank">
              <Facebook className="size-4" />
              Message us on Facebook
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full"
          >
            <a href="tel:+447719997000">
              <Phone className="size-4" />
              Call Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full"
          >
            <a href="mailto:set2pass@outlook.com">
              <Mail className="size-4" />
              Email Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
