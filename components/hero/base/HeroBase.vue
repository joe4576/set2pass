<script setup lang="ts">
export type BackgroundType =
  | "green-gradient"
  | "orange-gradient"
  | "green-gradient-1";

export interface BackgroundTypeProps {
  backgroundType?: BackgroundType;
}

interface HeroBaseProps extends BackgroundTypeProps {
  containerWidth?: string;
  title?: string;
  fullHeight?: boolean;
}

defineProps<HeroBaseProps>();
</script>

<template>
  <v-sheet
    v-bind="$attrs"
    width="100vw"
    :height="fullHeight ? '100%' : 'auto'"
    :class="backgroundType"
  >
    <v-container
      class="max-width"
      :style="{
        'max-width': containerWidth,
        height: '100%',
      }"
    >
      <h4 v-if="title" class="text-h4 text-center my-10 pb-4">{{ title }}</h4>
      <slot />
    </v-container>
  </v-sheet>
</template>

<style scoped>
.green-gradient {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.green-gradient-1 {
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af5d7 100%);
}

.orange-gradient {
  background: #e39c05;
  background: -webkit-linear-gradient(left, #e39c05, #fbbd39);
  background: linear-gradient(to right, #e39c05, #fbbd39);
}
</style>
