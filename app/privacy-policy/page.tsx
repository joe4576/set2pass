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
    title: "No Cookie Banner Required",
    items: [
      'We do not use tracking cookies for advertising, marketing, or profiling. Because we do not store or access any non-essential information on your device, we do not show a "Cookie Consent" pop-up. We respect your privacy from the moment you land on our site.',
    ],
  },
  {
    title: "Anonymous Analytics (PostHog)",
    items: [
      "How it works: We do not save any files (cookies) to your browser. Instead, we use a privacy-preserving method to count page visits anonymously.",
      `True Anonymity: We do not collect your IP address, your name, or any data that could identify who you are. We see "trends" (e.g., 50 people visited the 'Contact' page today), but we never see "people."`,
      "Data Deletion: Because the data we collect via PostHog is entirely anonymous and is never linked to your identity, it is technically impossible for us to identify or delete records relating to your specific visit.",
      "No Third-Party Sharing: This data is for our use only. We never sell this information or share it with platforms like Meta, Google, or TikTok.",
    ],
  },
  {
    title: "Our Commitment",
    items: [
      'We do not participate in cross-site tracking, "fingerprinting," or any other form of invasive digital surveillance. Our website is built to provide information about our local business without compromising your privacy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main>
      <TermsHeaderSection
        title="Privacy Policy"
        subtitle="At Set2Pass, we believe that tracking our customers is unnecessary. Because we are a local business serving the UK, we have designed our website to be private by default."
        lastUpdated="09 March 2026"
      />

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
