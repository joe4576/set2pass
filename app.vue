<script setup lang="ts">
const vueHasHydrated = ref(false);

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

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
    <cookie-banner />
  </v-app>
</template>

<style>
/* Maximum content width */
.max-width {
  max-width: 1140px;
  margin: 0 auto;
}

p {
  /* text-body-1 styles borrowed from vuetify */
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
</style>
