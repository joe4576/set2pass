<script setup lang="ts">
const vueHasHydrated = ref(false);

onMounted(() => {
  vueHasHydrated.value = true;
});
</script>

<template>
  <v-app v-show="vueHasHydrated">
    <app-bar />
    <v-main>
      <nuxt-page />
    </v-main>
    <app-footer />
  </v-app>
</template>

<style>
/* Maximum content width */
.max-width {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
