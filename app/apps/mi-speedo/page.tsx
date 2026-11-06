import { appLinks } from "@/lib/constants";
import { AppCtaSection } from "@/components/apps/app-cta-section";
import {
  AppFeaturesSection,
  Feature,
} from "@/components/apps/app-features-section";
import { AppHeaderSection } from "@/components/apps/app-header-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiSpeedo | Set2Pass",
  description:
    "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed, course, and distance while you drive.",
};

const features: Feature[] = [
  {
    title: "Introducing MiSpeedo",
    description:
      "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed in various units while you drive. It also offers essential details about your direction (course) and diligently tracks the total distance you cover on your journey.",
  },
  {
    title: "Customise",
    description:
      "With MiSpeedo, you'll always stay on track with accurate address information, regularly updated every 10 seconds. Plus, you have the freedom to customise the app's display colour theme to your liking, ensuring a personalised and enjoyable experience.",
  },
  {
    title: "Calibrate",
    description:
      "Fine-tune the GPS speed displayed by the app to match your vehicle's speedometer. This is useful because many vehicle speedometers show a slightly faster speed than your actual travel speed. With MiSpeedo's calibration, you'll have the confidence of knowing your displayed speed aligns with your vehicle's performance.",
  },
  {
    title: "Easy to use",
    description:
      "Whether you're on a road trip or just commuting, MiSpeedo is the reliable driving companion that keeps you informed, safe, and in control throughout your journey. Enjoy a smoother, more informed ride with MiSpeedo!",
  },
];

const appStoreLink = appLinks.mispeedo;

const MiSpeedoPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <AppHeaderSection
        title="MiSpeedo"
        description="An intuitive speedometer app developed by Set2Pass Driving School. Track your speed, direction, and distance in one place."
        appStoreLink={appStoreLink}
        img="/images/mispeedo.webp"
        imageWidth={1280}
        imageHeight={853}
        altText="MiSpeedo app showing a digital speedometer on an iPhone"
      />

      <AppFeaturesSection
        title="Your reliable driving companion"
        features={features}
      />

      <AppCtaSection
        title="Track your speed with confidence"
        description="Download MiSpeedo from the App Store and enjoy a smoother, more informed ride."
        appStoreLink={appStoreLink}
        buttonText="Get MiSpeedo"
        privacyPolicyLink="/apps/mi-speedo/privacy-policy"
      />
    </main>
  );
};

export default MiSpeedoPage;
