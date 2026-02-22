import { TermsHeaderSection } from "@/components/terms/terms-header-section";
import { Term, TermsListSection } from "@/components/terms/terms-section";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Set2Pass",
  description:
    "Terms and Conditions for Set2Pass Driving School, covering lesson policies, payments, cancellations, data protection, and more.",
};

const terms: Term[] = [
  {
    title: "Definitions",
    items: [
      "ADI/PDI/Instructor: The individual licensed to deliver driving tuition.",
      "Student/Driver: The individual receiving driver training.",
    ],
  },
  {
    title: "Driving Licences and Fitness to Drive",
    items: [
      "Licence Requirement: The Student must provide a valid UK driving licence before their first lesson. Failure to do so will result in lesson cancellation with the fee payable in full.",
      "Fitness to Drive: The Student must disclose any medical conditions, allergies, or learning needs that may affect their driving.",
      "Notification of Changes: The Student must inform the Instructor of any issues affecting their ability to drive (e.g., licence suspension).",
      "Eyesight Requirement: The Student must be able to read a car number plate at 20.5m. Instructors may request additional verification if needed.",
      "Alcohol/Drug Use: Lessons will be cancelled if the Student is deemed unfit to drive due to alcohol, drugs (prescription or recreational), or other impairments. Fees will still apply.",
      "Alternative Lessons: Theory or legal requirement lessons may be offered as a substitute for practical lessons in these cases.",
    ],
  },
  {
    title: "Use of Private Vehicles",
    items: [
      'Insurance: The Student must ensure their vehicle is insured for "paid driving tuition" and, if applicable, for the driving test and post-test journey.',
      "Roadworthiness: The Student’s vehicle must be road legal and safe. Lessons cancelled due to vehicle issues are chargeable in full.",
      "Liability: All penalties, damages, or fines are the Student’s responsibility. Instructors are not liable for third-party property or personal damage.",
    ],
  },
  {
    title: "Legal Responsibility",
    items: [
      "Students are responsible for driving in accordance with the law. Any penalties incurred are their responsibility, even during lessons.",
    ],
  },
  {
    title: "Data Protection and Dash Cam Usage",
    items: [
      "Data Retention: Personal information and lesson records are kept securely and will be deleted upon request or when no longer relevant.",
      "Dash Cam: Instructor cars are fitted with outward-facing dash cams (no audio). Footage will be retained as required for safety or training purposes.",
      "Promotional Content: Student consent will be obtained for using photos or testimonials on social media.",
    ],
  },
  {
    title: "Bookings and Payments",
    items: [
      "Payment Terms: Payments must be made before lessons unless otherwise agreed. Bank transfers are preferred; cheques are not accepted unless prearranged.",
      "Cancellations: At least 48 hours’ notice is required. Shorter notice will result in the full lesson fee being charged. Refunds for cancellations by the Instructor will be arranged promptly.",
    ],
  },
  {
    title: "Practical Tests",
    items: [
      "Lesson Rates: The standard hourly rate applies for lessons during the driving test. Waiting times during the test are included.",
      "Test Cancellations: Set2Pass is not liable for losses resulting from test cancellations by the DVSA or other third parties.",
    ],
  },
  {
    title: "Safety and Vehicle Policies",
    items: [
      "Extreme Weather: Lessons may be cancelled in hazardous conditions. Fees will not apply.",
      "Passengers: Passengers are permitted at the Instructor’s discretion and only if safe.",
      "Personal Property: Set2Pass is not responsible for personal belongings left in the vehicle.",
    ],
  },
  {
    title: "Mobile Phones",
    items: [
      "Mobile phones must be switched off or in flight-mode during lessons. Using a phone while driving is illegal and may result in lesson termination.",
    ],
  },
  {
    title: "COVID-19",
    items: [
      "Safety Measures: Instructors follow DVSA COVID-19 guidelines, including sanitization and ventilation.",
      "Illness: Students showing signs of illness will not be allowed in the tuition vehicle.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main>
      <TermsHeaderSection
        title="Terms and Conditions"
        subtitle="The following Terms and Conditions apply to anyone receiving driver training with Set2Pass Driving School or its trainers/subcontractors."
        lastUpdated="22 November 2024"
      />

      <TermsListSection
        terms={terms}
        header={
          <NoteCard>
            <p>
              For any service or training issues, please contact us using the
              details provided below. If unresolved, you may contact the DVSA (
              <a
                href="https://www.gov.uk/contact-dvsa"
                target="_blank"
                className="underline underline-offset-2 transition-colors hover:text-foreground"
              >
                https://www.gov.uk/contact-dvsa
              </a>
              ). This does not affect your statutory rights.
            </p>
          </NoteCard>
        }
        footer={
          <NoteCard>
            <h2
              className="text-xl font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Details
            </h2>
            <div className="mt-4 flex flex-col gap-2 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Name:</span> Nikki
                Brown
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                <a
                  href="tel:07719997000"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  0771 999 7000
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href="mailto:set2pass@outlook.com"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  set2pass@outlook.com
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Web:</span>{" "}
                <a
                  href="https://www.set2pass.co.uk"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  www.set2pass.co.uk
                </a>
              </p>
            </div>
          </NoteCard>
        }
      />
    </main>
  );
}

type NoteCardProps = {
  children: ReactNode;
};

const NoteCard = ({ children }: NoteCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-6 text-muted-foreground text-sm">
      {children}
    </div>
  );
};
