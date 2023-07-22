<script setup lang="ts">
import type { AppIcon, Feature } from "~/components/AppShowcasePage.vue";

const features: Feature[] = [
  {
    title: "What is DriveClass?",
    imageUrl: "/img/blackbox-1-cropped.webp",
    body: [
      "DriveClass is an iOS and Android app that displays driving style on a colour coded route map.",
      "Every manoeuvre is recorded - braking, acceleration and left/right turns.",
    ],
  },
  {
    title: "Enhance your lessons with visual feedback",
    imageUrl: "/img/blackbox-0-cropped.webp",
    body: [
      "Using the interactive map view, you can view your route and see exactly how well you or your student drove.",
      "Zoom in and see the small details, down to the exact corner",
    ],
  },
  {
    title: "Developed with professional driving instructors",
    imageUrl: "/img/blackbox-5-cropped.webp",
    body: [
      "Calibrated and thoroughly tested by driving instructors with real students to ensure accurate readings",
    ],
  },
  {
    title: "DriveClass is not associated with any insurance companies",
    imageUrl: "/img/blackbox-6-cropped.webp",
    body: [
      "DriveClass can be used in any vehicle and by any user.",
      "No additional hardware is needed - just your phone.",
    ],
  },
  {
    title: "Share your journey",
    imageUrl: "/img/blackbox-2-cropped.webp",
    body: [
      "Export and view your journey on any Google Earth or Maps app.",
      "Detailed manoeuvre statistics are provided in a spreadsheet file.",
    ],
  },
  {
    title: "Student Database",
    imageUrl: "/img/blackbox-3-cropped.webp",
    body: [
      "Keep records of how your students are progressing over every lesson (currently available on iOS version).",
    ],
  },
];

const appIcons: AppIcon[] = [
  {
    href: "https://apps.apple.com/gb/app/driveclass/id1495536306",
    imageUrl: "/img/blackbox-ios.webp",
    text: "DriveClass (iOS)",
  },
  {
    href: "https://apps.apple.com/us/app/drive-class/id1496425927",
    imageUrl: "/img/blackbox-ios-free.webp",
    text: "DriveClass Demo (free) (iOS)",
  },
  {
    href: "https://play.google.com/store/apps/details?id=me.com.driveadi",
    imageUrl: "/img/blackbox-android.webp",
    text: "DriveClass (Android)",
  },
  {
    href: "https://play.google.com/store/apps/details?id=me.com.driveadifree",
    imageUrl: "/img/blackbox-android-free.webp",
    text: "DriveClass Demo (free) (Android)",
  },
];
</script>

<template>
  <app-showcase-page
    header-image-src="/img/blackbox-0.webp"
    :features="features"
    page-title="DriveClass | Set2Pass"
    :app-icons="appIcons"
    description="DriveClass is an app that monitors your driving style and reports how you drove on a detailed map view."
    noun="DriveClass"
    app-section-title="Find DriveClass on the App Store and Play Store"
  />
</template>
