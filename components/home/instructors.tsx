import {
  InstructorProfile,
  type InstructorProfileProps,
} from "@/components/home/instructor-profile";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { passRates } from "@/lib/constants";

const instructors: InstructorProfileProps[] = [
  {
    name: "Nikki Brown",
    role: "Owner & Instructor",
    type: "Automatic",
    image: "/images/nikki.webp",
    bio: `Nikki is the owner of Set2Pass. She is a fully qualified ADI and advanced driver who has been teaching students how to drive since 2019. She has an impressive pass rate of ${passRates.nikki}, compared to the national average of ${passRates.nationalAverage}.`,
    qualifications: [
      "The Disability Driving Instructors Disabilities and Medical Conditions Course",
      "Level 3 Award in Education and Training",
      "Driving Instructors Association Diploma in Driver Education (DipDE)",
      "Approved Driving Instructor (ADI)",
      "iAM Advanced Driver",
      "Pass Plus Certified",
    ],
  },
  {
    name: "Sean Brown",
    role: "Instructor",
    type: "Manual",
    image: "/images/sean.webp",
    bio: "Sean is a fully qualified ADI and advanced driver. He is accepting new students to start lessons ASAP.",
    qualifications: [
      "Approved Driving Instructor (ADI)",
      "iAM Advanced Driver",
    ],
  },
];

export const Instructors = () => (
  <Section id="instructors" muted spacing="spacious">
    <SectionHeader title="Our instructors" />
    <div className="flex flex-col gap-9 min-[700px]:gap-10">
      {instructors.map((instructor) => (
        <InstructorProfile key={instructor.name} {...instructor} />
      ))}
    </div>
  </Section>
);
