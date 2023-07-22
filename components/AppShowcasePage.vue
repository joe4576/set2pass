<script setup lang="ts">
export interface Feature {
  title: string;
  imageUrl: string;
  body: string[];
}

export interface AppIcon {
  imageUrl: string;
  text: string;
  href: string;
}

interface AppShowcasePageProps {
  headerImageSrc: string;
  features: Feature[];
  appIcons: AppIcon[];
  pageTitle: string;
  description: string;
  noun: string;
  appSectionTitle: string;
}

const props = defineProps<AppShowcasePageProps>();

useMetadata({
  title: props.pageTitle,
  description: props.description,
});
</script>

<template>
  <v-parallax
    class="parallax"
    :src="headerImageSrc"
    :height="$vuetify.display.mdAndUp ? 350 : 250"
    :scale="0.6"
  >
    <div class="d-flex fill-height justify-center align-center">
      <h1
        :class="{
          'text-white': true,
          'text-h1': $vuetify.display.mdAndUp,
          'text-h2': $vuetify.display.smAndDown,
        }"
      >
        {{ noun }}
      </h1>
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

  <hero-base :title="appSectionTitle">
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
          <p class="">{{ icon.text }}</p>
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
  border-radius: 22.5%;
}

.logo-col {
  max-width: 180px;
}
</style>
