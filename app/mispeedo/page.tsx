import { AppCtaSection } from "@/components/apps/app-cta-section";
import {
  AppFeaturesSection,
  Feature,
} from "@/components/apps/app-features-section";
import { AppHeaderSection } from "@/components/apps/app-header-section";
import { Gauge, Palette, SlidersHorizontal, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiSpeedo | Set2Pass",
  description:
    "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed, course, and distance while you drive.",
};

const features: Feature[] = [
  {
    Icon: Gauge,
    title: "Introducing MiSpeedo",
    description:
      "MiSpeedo is an intuitive app developed by Set2Pass Driving School, designed to keep you informed about your speed in various units while you drive. It also offers essential details about your direction (course) and diligently tracks the total distance you cover on your journey.",
  },
  {
    Icon: Palette,
    title: "Customise",
    description:
      "With MiSpeedo, you'll always stay on track with accurate address information, regularly updated every 10 seconds. Plus, you have the freedom to customise the app's display colour theme to your liking, ensuring a personalised and enjoyable experience.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Calibrate",
    description:
      "Fine-tune the GPS speed displayed by the app to match your vehicle's speedometer. This is useful because many vehicle speedometers show a slightly faster speed than your actual travel speed. With MiSpeedo's calibration, you'll have the confidence of knowing your displayed speed aligns with your vehicle's performance.",
  },
  {
    Icon: Zap,
    title: "Easy to Use",
    description:
      "Whether you're on a road trip or just commuting, MiSpeedo is the reliable driving companion that keeps you informed, safe, and in control throughout your journey. Enjoy a smoother, more informed ride with MiSpeedo!",
  },
];

const appStoreLink = "https://apps.apple.com/app/mispeedo/id1498459907";

export default function MiSpeedoPage() {
  return (
    <main>
      <AppHeaderSection
        title="MiSpeedo"
        description="An intuitive speedometer app developed by Set2Pass Driving School. Track your speed, direction, and distance — all in one place."
        appStoreLink={appStoreLink}
        img="/images/mispeedo.webp"
        altText="MiSpeedo app showing a digital speedometer on an iPhone"
      />

      <AppFeaturesSection
        title="Your Reliable Driving Companion"
        description=" Stay informed about your speed, direction, and distance with accurate GPS tracking and a customisable display."
        features={features}
        dense={false}
      />

      <AppCtaSection
        title="Track your speed with confidence"
        description="Download MiSpeedo from the App Store and enjoy a smoother, more informed ride."
        appStoreLink={appStoreLink}
        buttonText="Get MiSpeedo"
        privacyPolicyLink="/mispeedo/privacy-policy"
      />
    </main>
  );
}
