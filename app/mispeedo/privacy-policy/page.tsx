import { TermsHeaderSection } from "@/components/terms/terms-header-section";
import { Term, TermsListSection } from "@/components/terms/terms-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiSpeedo Privacy Policy | Set2Pass",
  description:
    "Privacy Policy for MiSpeedo, covering data collection, usage, and protection.",
};

const terms: Term[] = [
  {
    title: "Policy",
    items: [
      "The MiSpeedo application, hereinafter referred to as “the Service”, is intended for use as is.",
      "This policy document is meant to help you understand what data we collect, why we collect it, and what we do with it.",
      "If you choose to use the Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
    ],
  },
  {
    title: "Why do we request the LOCATION permission?",
    items: [
      "As you know, the Service is a speedometer application. We use location data to provide your speed. This information is not stored on your device.",
    ],
  },
  {
    title: "Information Collection, Use and Sharing",
    items: [
      "The location information that we request is retained on your device and is not distributed by us in any way.",
      "The Service does not require an Internet connection and Cookies are neither requested by the Service nor stored by the Service on your device.",
    ],
  },
  {
    title: "Security",
    items: [
      "No Personal Information is stored by the Service apart from the saved track files. These stored track files are not encrypted in any way. Should you decide to share these via any of the available transmission services on your device, you should be advised that no method of electronic transmission or storage is 100% secure and reliable, and we therefore cannot guarantee any form of security.",
    ],
  },
];

export default function MiSpeedoPrivacyPolicy() {
  return (
    <main>
      <TermsHeaderSection
        title="Privacy Policy"
        subtitle="MiSpeedo (“the Service”) collects and uses information only to provide and improve the app. By using the Service, you agree to this policy."
      />

      <TermsListSection terms={terms} />
    </main>
  );
}
