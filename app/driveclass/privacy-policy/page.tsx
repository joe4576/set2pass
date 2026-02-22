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
    title: "Permissions",
    items: [
      "Location: Needed to display your position on the map. Location data is stored only in saved track files on your device.",
    ],
  },
  {
    title: "Data Collection and Sharing",
    items: [
      "All location information stays on your device. The Service does not use the Internet or cookies, and does not share data with third parties.",
    ],
  },
  {
    title: "Security",
    items: [
      "Personal information is only stored in saved track files. These files are not encrypted. If you choose to share them, be aware that no transmission method is completely secure.",
    ],
  },
];

export default function DriveClassPrivacyPolicy() {
  return (
    <main>
      <TermsHeaderSection
        title="Privacy Policy"
        subtitle="DriveClass (“the Service”) collects and uses information only to provide and improve the app. By using the Service, you agree to this policy."
      />

      <TermsListSection terms={terms} />
    </main>
  );
}
