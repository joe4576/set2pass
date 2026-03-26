import { Divider } from "@/components/common/divider";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { passRates } from "@/lib/constants";
import { Award, GraduationCap } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

type Instructor = {
  name: string;
  role: string;
  type: string;
  image: string;
  bio: string;
  qualifications: string[];
};

const instructors: Instructor[] = [
  {
    name: "Nikki Brown",
    role: "Owner & Instructor",
    type: "Automatic",
    image: "/images/nikki.webp",
    bio: `Nikki is the owner of Set2Pass. She is a fully qualified ADI and advanced driver who has been teaching students how to drive since 2019. She has an impressive pass rate of ${passRates.nikki}, compared to the national average of ${passRates.nationalAverage}.`,
    qualifications: [
      "Approved Driving Instructor (ADI)",
      "iAM Advanced Driver",
      "Pass Plus Certified",
      "Level 3 Award in Education and Training",
      "Driving Instructors Association Diploma in Driver Education (DipDE)",
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

export const Instructors = () => {
  return (
    <Section id="instructors">
      <SectionHeader
        title="Our instructors"
        subtitle="Our friendly, patient instructors are dedicated to helping you become a safe, confident driver."
      />

      <div className="flex flex-col gap-20 max-w-2xl mx-auto">
        {instructors.map((instructor, idx, arr) => (
          <Fragment key={instructor.name}>
            <InstructorCard {...instructor} />
            {idx !== arr.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

const InstructorCard = ({
  bio,
  image,
  name,
  qualifications,
  role,
  type,
}: Instructor) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5">
        <img src={image} alt={name} className="size-24 rounded-lg" />

        <div className="my-auto">
          <h3
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name}
          </h3>

          <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>

          <Badge className="mt-2">{type}</Badge>
        </div>
      </div>

      <p className="leading-relaxed text-muted-foreground">{bio}</p>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <GraduationCap className="size-4 text-primary" />
          Qualifications
        </h4>

        <ul className="space-y-2">
          {qualifications.map((qual) => (
            <li key={qual} className="flex items-center gap-2.5">
              <Award className="size-3.5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{qual}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
