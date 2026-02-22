import { Container } from "@/components/common/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
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
        <Badge
          variant="secondary"
          className="mb-6 gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-primary-foreground border-primary-foreground/20"
        >
          <Star className="size-3.5 fill-current" />
          <span>84% pass rate vs 49.9% national average</span>
        </Badge>

        <h1
          className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Learn to drive with confidence
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-primary-foreground/80">
          Professional driving lessons in Locks Heath and surrounding areas.
          Tailored instruction for every learner, from complete beginners to
          those looking to pass.
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
}
