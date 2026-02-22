import { AppCtaSection } from "@/components/apps/app-cta-section";
import {
  AppFeaturesSection,
  Feature,
} from "@/components/apps/app-features-section";
import { AppHeaderSection } from "@/components/apps/app-header-section";
import {
  BarChart3,
  Database,
  MapPin,
  Share2,
  Smartphone,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DriveClass | Set2Pass",
  description:
    "DriveClass is an iOS app that displays driving style on a colour coded route map. Every manoeuvre is recorded - braking, acceleration and left/right turns.",
};

const features: Feature[] = [
  {
    Icon: MapPin,
    title: "Visual Feedback with Interactive Maps",
    description:
      "Using the interactive map view, you can view your route and see exactly how well you or your student drove. Zoom in and see the small details, down to the exact corner.",
  },
  {
    Icon: Users,
    title: "Developed with Professional Instructors",
    description:
      "Calibrated and thoroughly tested by driving instructors with real students to ensure accurate readings.",
  },
  {
    Icon: Smartphone,
    title: "No Additional Hardware Needed",
    description:
      "DriveClass can be used in any vehicle and by any user. No additional hardware is needed - just your phone. DriveClass is not associated with any insurance companies.",
  },
  {
    Icon: Share2,
    title: "Share Your Journey",
    description:
      "Export and view your journey on any Google Earth or Maps app. Detailed manoeuvre statistics are provided in a spreadsheet file.",
  },
  {
    Icon: Database,
    title: "Student Database",
    description:
      "Keep records of how your students are progressing over every lesson. Track improvement over time with detailed history.",
  },
  {
    Icon: BarChart3,
    title: "Every Manoeuvre Recorded",
    description:
      "Braking, acceleration and left/right turns are all recorded and colour coded so you can instantly see areas for improvement.",
  },
];

const appStoreLink = "https://apps.apple.com/gb/app/driveclass/id1495536306";

export default function DriveClassPage() {
  return (
    <main>
      <AppHeaderSection
        title="DriveClass"
        description="DriveClass is an iOS app that displays driving style on a colour coded route map. Every manoeuvre is recorded — braking, acceleration and left/right turns."
        appStoreLink={appStoreLink}
        img="/images/driveclass.webp"
        altText="DriveClass app showing a colour coded route map on an iPhone"
      />

      <AppFeaturesSection
        title="Enhance Your Driving Lessons"
        description="DriveClass brings data-driven insights to every lesson, helping instructors and learners improve faster."
        features={features}
      />

      <AppCtaSection
        title="Ready to track your driving?"
        description="Download DriveClass from the App Store and start getting visual feedback on every lesson."
        appStoreLink={appStoreLink}
        privacyPolicyLink="/driveclass/privacy-policy"
        buttonText="Get DriveClass"
      />
    </main>
  );
}
