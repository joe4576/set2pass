import { Divider } from "@/components/common/divider";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

const highlights: (string | ReactNode)[] = [
  "Tailored lessons to match your unique learning style",
  "Patient, friendly instructors who build confidence",
  "Both automatic and manual lessons available",
  <span>
    Free online theory training via{" "}
    <a href="https://www.theorytestpro.co.uk/" target="_blank" className="link">
      Theory Test Pro
    </a>
  </span>,
  "Flexible scheduling, including evenings and weekends",
  "5% discount when you book 10 lessons in advance",
];

export const About = () => {
  return (
    <Section id="about" muted>
      <div className="flex flex-col md:flex-row gap-20 justify-center">
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground md:basis-2/3">
          <SectionHeader
            title="More than passing your test"
            className="text-start my-0"
          />

          <p>
            At Set2Pass, we take immense pride in delivering top-notch driving
            instruction that goes beyond helping you pass your test. Our focus
            is on equipping you with the skills for a lifetime of safe and
            confident driving.
          </p>

          <p>
            Whether you're a beginner or have some driving experience, our
            expert instructors ensure that you are at the center of every
            lesson. We understand that everyone learns differently, so we tailor
            our teaching approach to match your unique needs and learning style.
          </p>

          <p>
            With Set2Pass Driving School, you'll find yourself in the driver's
            seat, taking control of your learning journey. Get ready for an
            empowering and enjoyable driving experience with us!
          </p>
        </div>

        <Divider className="block md:hidden" />

        <div className="flex flex-col gap-10 md:gap-4 justify-around mx-auto">
          {highlights.map((item, idx) => (
            <Highlight key={idx} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

type HighlightProps = {
  item: string | ReactNode;
};

const Highlight = ({ item }: HighlightProps) => {
  return (
    <div className="flex gap-4">
      <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
      {typeof item === "string" ? <span>{item}</span> : item}
    </div>
  );
};
