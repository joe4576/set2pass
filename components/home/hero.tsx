import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-road.jpg"
          alt="Scenic British road stretching into the distance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <Container className="relative z-10 flex flex-col items-center py-28 md:py-40 text-center">
        <h1
          className="max-w-3xl text-balance text-5xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Learn to drive with Set2Pass
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-primary-foreground/80">
          Professional driving lessons in Locks Heath and surrounding areas.
          Tailored instruction for every learner, from complete beginners to
          those looking to build their confidence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full px-8 text-base"
          >
            <a href="#contact">
              Start Your Journey
              <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-primary-foreground/30 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
          >
            <a href="#instructors">Meet Our Instructors</a>
          </Button>
        </div>
      </Container>
    </section>
  );
};
