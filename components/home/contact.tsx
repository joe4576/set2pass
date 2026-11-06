import { ContactLink } from "@/components/home/contact-link";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/constants";

export const Contact = () => (
  <Section
    id="contact"
    spacing="spacious"
    className="bg-blue text-white [&_:focus-visible]:outline-white"
  >
    <div className="min-[700px]:grid min-[700px]:grid-cols-2 min-[700px]:items-center min-[700px]:gap-[50px] min-[1000px]:grid-cols-[1.2fr_1fr] min-[1000px]:gap-[100px]">
      <div>
        <h2 className="max-w-[560px] text-[clamp(2.6rem,5vw,3.8rem)] text-white">
          Ready to start your driving journey?
        </h2>
        <p className="mt-6 max-w-[480px]">
          Get in touch today to join our waiting list. We offer automatic
          lessons with Nikki and manual lessons with Sean.
        </p>
      </div>
      <div className="mt-[30px] min-[700px]:m-0">
        <Button asChild size="cta" variant="white" className="w-full">
          <a
            href={contactDetails.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on Facebook
          </a>
        </Button>
        <ContactLink href={contactDetails.phoneLink} label="Call us">
          {contactDetails.phone}
        </ContactLink>
        <ContactLink href={`mailto:${contactDetails.email}`} label="Email us">
          {contactDetails.email}
        </ContactLink>
      </div>
    </div>
  </Section>
);
