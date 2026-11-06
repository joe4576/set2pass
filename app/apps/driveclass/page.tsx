import { appLinks } from "@/lib/constants";
import { AppCtaSection } from "@/components/apps/app-cta-section";
import {
  AppFeaturesSection,
  Feature,
} from "@/components/apps/app-features-section";
import { AppHeaderSection } from "@/components/apps/app-header-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveClass | Set2Pass",
  description:
    "DriveClass is an iOS app that displays driving style on a colour coded route map. Every manoeuvre is recorded - braking, acceleration and left/right turns.",
};

const features: Feature[] = [
  {
    title: "Visual feedback with interactive maps",
    description:
      "Using the interactive map view, you can view your route and see exactly how well you or your student drove. Zoom in and see the small details, down to the exact corner.",
  },
  {
    title: "Developed with professional instructors",
    description:
      "Calibrated and thoroughly tested by driving instructors with real students to ensure accurate readings.",
  },
  {
    title: "No additional hardware needed",
    description:
      "DriveClass can be used in any vehicle and by any user. No additional hardware is needed - just your phone. DriveClass is not associated with any insurance companies.",
  },
  {
    title: "Share your journey",
    description:
      "Export and view your journey on any Google Earth or Maps app. Detailed manoeuvre statistics are provided in a spreadsheet file.",
  },
  {
    title: "Student database",
    description:
      "Keep records of how your students are progressing over every lesson. Track improvement over time with detailed history.",
  },
  {
    title: "Every manoeuvre recorded",
    description:
      "Braking, acceleration and left/right turns are all recorded and colour coded so you can instantly see areas for improvement.",
  },
];

const appStoreLink = appLinks.driveclass;

const DriveClassPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <AppHeaderSection
        title="DriveClass"
        description="DriveClass is an iOS app that displays driving style on a colour coded route map. Every manoeuvre is recorded, including braking, acceleration and left/right turns."
        appStoreLink={appStoreLink}
        img="/images/driveclass.webp"
        imageWidth={483}
        imageHeight={483}
        altText="DriveClass app showing a colour coded route map on an iPhone"
      />

      <AppFeaturesSection
        title="Enhance your driving lessons"
        features={features}
      />

      <AppCtaSection
        title="Ready to track your driving?"
        description="Download DriveClass from the App Store and start getting visual feedback on every lesson."
        appStoreLink={appStoreLink}
        privacyPolicyLink="/apps/driveclass/privacy-policy"
        buttonText="Get DriveClass"
      />
    </main>
  );
};

export default DriveClassPage;
