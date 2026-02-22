import { Card } from "@/components/common/card";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";

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
    bio: "Nikki is the owner of Set2Pass. She is a fully qualified ADI and advanced driver who has been teaching students how to drive since 2019. She has an impressive pass rate of 84%, compared to the national average of 49.9%.",
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

export function Instructors() {
  return (
    <Section id="instructors" muted>
      <SectionHeader
        miniTitle="Our Team"
        title="Meet your instructors"
        subtitle="Our friendly, patient instructors are dedicated to helping you become a safe, confident driver."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.name} {...instructor} />
        ))}
      </div>
    </Section>
  );
}

const InstructorCard = ({
  bio,
  image,
  name,
  qualifications,
  role,
  type,
}: Instructor) => {
  return (
    <Card>
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-5">
          <img src={image} alt={name} className="size-24 rounded-lg" />

          <div className="my-auto">
            <h3
              className="text-xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {name}
            </h3>

            <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>

            <Badge variant="secondary" className="mt-2">
              {type} Lessons
            </Badge>
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
    </Card>
  );
};
