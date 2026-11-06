import { HeroPortrait } from "@/components/home/hero-portrait";
import { ActionGroup } from "@/components/shared/action-group";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { TextLink } from "@/components/shared/text-link";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="py-12 min-[700px]:py-16">
    <Container className="[@media(max-width:699px)]:flex [@media(max-width:699px)]:flex-col min-[700px]:grid min-[700px]:grid-cols-[minmax(0,1fr)_clamp(220px,30vw,300px)] min-[700px]:items-center min-[700px]:gap-8 min-[1024px]:min-h-[440px] min-[1024px]:grid-cols-[minmax(0,1fr)_424px] min-[1024px]:gap-16">
      <div className="[@media(max-width:699px)]:contents">
        <PageHeading
          variant="hero"
          className="max-w-[700px] [@media(max-width:699px)]:order-0"
        >
          Learn to drive
          <br className="hidden min-[1024px]:inline" /> with Set2Pass
        </PageHeading>
        <p className="mt-6 max-w-[510px] leading-[1.6] [@media(max-width:699px)]:order-1">
          Professional driving lessons in Locks Heath and surrounding areas.
          Tailored instruction for every learner, from complete beginners to
          those looking to build their confidence.
        </p>
        <ActionGroup className="mt-[26px] gap-x-6 gap-y-[18px] [@media(max-width:699px)]:contents">
          <Button
            asChild
            size="cta"
            variant="cta"
            className="[@media(max-width:699px)]:order-5 [@media(max-width:699px)]:mt-[26px] [@media(max-width:699px)]:w-full"
          >
            <a href="#contact">Start your journey</a>
          </Button>
          <TextLink
            href="#instructors"
            className="inline-flex min-h-11 items-center text-[16px] font-semibold [@media(max-width:699px)]:order-4 [@media(max-width:699px)]:mt-5 [@media(max-width:699px)]:self-center [@media(max-width:699px)]:justify-center"
          >
            Meet our instructors
          </TextLink>
        </ActionGroup>
      </div>
      <div className="mx-auto mt-8 grid max-w-[300px] grid-cols-2 gap-6 [@media(max-width:699px)]:order-3 [@media(max-width:699px)]:flex [@media(max-width:699px)]:w-full [@media(max-width:699px)]:max-w-none [@media(max-width:699px)]:justify-center [@media(max-width:699px)]:gap-[clamp(16px,5vw,32px)] min-[700px]:m-0 min-[700px]:max-w-none min-[700px]:gap-3 min-[1024px]:max-w-[424px] min-[1024px]:gap-6">
        <HeroPortrait
          image="/images/nikki.webp"
          lessonType="Automatic"
          name="Nikki Brown"
        />
        <HeroPortrait
          image="/images/sean.webp"
          lessonType="Manual"
          name="Sean Brown"
        />
      </div>
    </Container>
  </section>
);
