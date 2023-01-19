<script setup lang="ts">
defineProps<{
  containerWidth?: string;
  title?: string;
}>();
</script>

<template>
  <v-sheet v-bind="$attrs" width="100vw">
    <v-container
      class="max-width"
      :style="{
        'max-width': containerWidth,
      }"
    >
      <h4 v-if="title" class="text-h4 text-center my-10 pb-4">{{ title }}</h4>
      <slot />
    </v-container>
  </v-sheet>
</template>
