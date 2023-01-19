<script setup lang="ts">
const appBarHasLoaded = ref(false);
</script>

<template>
  <v-app v-show="appBarHasLoaded">
    <app-bar @loaded="appBarHasLoaded = true" />
    <v-main>
      <nuxt-page />
    </v-main>
  </v-app>
</template>

<style>
/* Maximum content width */
.max-width {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
