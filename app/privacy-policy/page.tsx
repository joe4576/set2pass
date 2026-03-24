import { NoteCard } from "@/components/terms/note-card";
import { TermsHeaderSection } from "@/components/terms/terms-header-section";
import { Term, TermsListSection } from "@/components/terms/terms-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Set2Pass",
  description:
    "Privacy Policy for Set2Pass Driving School, covering data collection, usage, and protection.",
};

const terms: Term[] = [
  {
    title: "Cookies and Analytics",
    items: [
      "We use cookies and similar technologies to understand how visitors use our website and to measure page views and site performance.",
      "These cookies are used only for website analytics and are not used for advertising, marketing, or cross-site tracking.",
      "You can control or disable cookies through your browser settings at any time. If you disable cookies, some analytics features may not work as intended.",
    ],
  },
  {
    title: "Website Usage Data",
    items: [
      "We may collect information such as page visits, device and browser information, and approximate location based on your IP address.",
      "We use this information only to improve our website and understand how it is used.",
      "We do not use this data to build advertising profiles or to track you across other websites.",
    ],
  },
  {
    title: "Your Choice",
    items: [
      "You can opt out of analytics cookies by adjusting your browser settings to block or delete cookies.",
      "If you disable cookies, you may still be able to use the website, but some features may be limited.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main>
      <TermsHeaderSection title="Privacy Policy" lastUpdated="24 March 2026" />

      <TermsListSection
        terms={terms}
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
