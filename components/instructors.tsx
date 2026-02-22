import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap } from "lucide-react";

const instructors = [
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
    <section id="instructors" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet your instructors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our friendly, patient instructors are dedicated to helping you
            become a safe, confident driver.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="flex flex-col gap-6 p-8">
                <div className="flex items-start gap-5">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="size-24 rounded-lg"
                  />
                  <div>
                    <h3
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {instructor.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {instructor.role}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {instructor.type} Lessons
                    </Badge>
                  </div>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  {instructor.bio}
                </p>

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <GraduationCap className="size-4 text-primary" />
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {instructor.qualifications.map((qual) => (
                      <li key={qual} className="flex items-center gap-2.5">
                        <Award className="size-3.5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {qual}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
