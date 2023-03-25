<script setup lang="ts">
interface Feature {
  title: string;
  imageUrl: string;
  body: string[];
}

interface AppIcon {
  imageUrl: string;
  text: string;
  href: string;
}

const features: Feature[] = [
  {
    title: "What is BlackBox Telematics?",
    imageUrl: "/img/blackbox-1-cropped.webp",
    body: [
      "BlackBox is an iOS and Android app that displays driving style on a colour coded route map.",
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
      "Zoom in and see the small details, down to the exact corner",
    ],
  },
  {
    title: "BlackBox is not associated with any insurance companies",
    imageUrl: "/img/blackbox-6-cropped.webp",
    body: [
      "BlackBox can be used in any vehicle and by any user.",
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
    text: "BlackBox Telematics (iOS)",
  },
  {
    href: "https://apps.apple.com/us/app/drive-class/id1496425927",
    imageUrl: "/img/blackbox-ios-free.webp",
    text: "BlackBox Demo (free) (iOS)",
  },
  {
    href: "https://play.google.com/store/apps/details?id=me.com.driveadi",
    imageUrl: "/img/blackbox-android.webp",
    text: "BlackBox Telematics (Android)",
  },
  {
    href: "https://play.google.com/store/apps/details?id=me.com.driveadifree",
    imageUrl: "/img/blackbox-android-free.webp",
    text: "BlackBox Demo (free) (Android)",
  },
];

useMetadata({
  title: "BlackBox | Set2Pass",
  description:
    "BlackBox is an app that monitors your driving style and reports how you drove on a detailed map view.",
});

const { mdAndUp } = useVuetifyBreakpoints();
</script>

<template>
  <v-parallax
    class="parallax"
    src="/img/blackbox-0.webp"
    :height="mdAndUp ? 350 : 250"
    :scale="0.6"
  >
    <div class="d-flex fill-height justify-center align-center">
      <h1 class="text-h1 text-white">BlackBox</h1>
    </div>
  </v-parallax>

  <hero-feature
    v-for="(feature, idx) in features"
    :key="feature.title"
    class="my-10"
    :image-url="feature.imageUrl"
    color="background"
    :image-position="idx % 2 === 0 ? 'left' : 'right'"
  >
    <template #title>{{ feature.title }}</template>
    <template #body>
      <p v-for="line in feature.body" :key="line" class="my-3">
        {{ line }}
      </p>
    </template>
  </hero-feature>

  <hero-base title="Find BlackBox on the App Store or Play Store">
    <v-container>
      <v-row class="justify-space-around text-center">
        <v-col
          v-for="icon in appIcons"
          :key="icon.href"
          cols="auto"
          class="logo-col"
        >
          <a :href="icon.href" target="_blank">
            <img class="logo" :src="icon.imageUrl" :alt="`${icon.text} Logo`" />
          </a>
          <p class="text-body-1">{{ icon.text }}</p>
        </v-col>
      </v-row>
    </v-container>
  </hero-base>
</template>

<style scoped>
.parallax :deep(.v-img__img--cover) {
  filter: blur(3px) brightness(0.4);
  -webkit-filter: blur(3px) brightness(0.4);
}
.logo {
  max-width: 150px;
}

.logo-col {
  max-width: 180px;
}
</style>
