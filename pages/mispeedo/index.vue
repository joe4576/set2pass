<script setup lang="ts">
import AppShowcasePage, {
  type AppIcon,
  type Feature,
} from "~/components/AppShowcasePage.vue";

const features: Feature[] = [
  {
    title: "Introducing MiSpeedo",
    imageUrl: "/img/mispeedo-0.webp",
    body: [
      "MiSpeedo is an intuitive app developed by SET2PASS Driving School, designed to keep you informed about your speed in various units while you drive.",
      "But it doesn't stop there! This handy tool goes the extra mile by offering essential details about the direction you're heading, known as 'course,' and diligently tracking the total distance you cover on your journey.",
    ],
  },
  {
    title: "Customize",
    imageUrl: "/img/mispeedo-2.webp",
    body: [
      "With MiSpeedo, you'll always stay on track with accurate address information, regularly updated every 10 seconds.",
      "Plus, you have the freedom to customize the app's display color theme to your liking, ensuring a personalized and enjoyable experience.",
    ],
  },
  {
    title: "Calibrate",
    imageUrl: "/img/mispeedo-1.webp",
    body: [
      "One of the standout features of MiSpeedo is its calibration capability. You can fine-tune the GPS speed displayed by the app to match your vehicle's speedometer.",
      "This adjustment is useful because many vehicle speedometers show a slightly faster speed than your actual travel speed.",
      "With MiSpeedo's calibration, you'll have the confidence of knowing your displayed speed aligns with your vehicle's performance.",
    ],
  },
  {
    title: "Easy to Use",
    imageUrl: "/img/mispeedo-3.webp",
    body: [
      "Whether you're on a road trip or just commuting, MiSpeedo is the reliable driving companion that keeps you informed, safe, and in control throughout your journey.",
      "Enjoy a smoother, more informed ride with MiSpeedo!.",
    ],
  },
];

const appIcons: AppIcon[] = [
  {
    href: "https://apps.apple.com/gb/app/mispeedo/id1498459907",
    imageUrl: "/img/mispeedo-ios.webp",
    text: "MiSpeedo",
  },
];
</script>

<template>
  <app-showcase-page
    header-image-src="/img/mispeedo-1.webp"
    :features="features"
    page-title="MiSpeedo | Set2Pass"
    :app-icons="appIcons"
    description="MiSpeedo is an intuitive app developed by SET2PASS Driving School, designed to keep you informed about your speed in various units while you drive."
    noun="MiSpeedo"
    app-section-title="Find MiSpeedo on the App Store"
  />
</template>
