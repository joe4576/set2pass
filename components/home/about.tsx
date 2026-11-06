import { CheckList, CheckListItem } from "@/components/shared/check-list";
import { TextLink } from "@/components/shared/text-link";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { lessonDetails } from "@/lib/constants";

const highlights = [
  "Tailored lessons to match your unique learning style",
  "Patient, friendly instructors who build confidence",
  "Both automatic and manual lessons available",
  <>
    Free online theory training via{" "}
    <TextLink
      href="https://www.theorytestpro.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Theory Test Pro
    </TextLink>
  </>,
  "Flexible scheduling, including evenings and weekends",
  `${lessonDetails.blockDiscountPercent}% discount when you book ${lessonDetails.blockLessonCount} lessons in advance`,
];

export const About = () => (
  <Section id="about" spacing="spacious">
    <div className="min-[700px]:grid min-[700px]:grid-cols-[1.2fr_1fr] min-[700px]:gap-12 min-[1000px]:gap-[100px]">
      <div className="max-w-[620px]">
        <SectionHeader title="More than passing your test" />
        <p>
          At Set2Pass, we take immense pride in delivering top-notch driving
          instruction that goes beyond helping you pass your test. Our focus is
          on equipping you with the skills for a lifetime of safe and confident
          driving.
        </p>
        <p className="mt-[18px]">
          Whether you're a beginner or have some driving experience, our expert
          instructors ensure that you are at the center of every lesson. We
          understand that everyone learns differently, so we tailor our teaching
          approach to match your unique needs and learning style.
        </p>
        <p className="mt-[18px]">
          With Set2Pass Driving School, you'll find yourself in the driver's
          seat, taking control of your learning journey. Get ready for an
          empowering and enjoyable driving experience with us!
        </p>
      </div>
      <CheckList className="mt-8 min-[700px]:mt-0 min-[700px]:self-center">
        {highlights.map((item, index) => (
          <CheckListItem key={index}>{item}</CheckListItem>
        ))}
      </CheckList>
    </div>
  </Section>
);
