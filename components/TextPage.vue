<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <hero-page-banner :title="title" class="mb-12" />
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 12px;
}

:slotted(ul) {
  margin-left: 35px;
}

:slotted(p) {
  margin-bottom: 12px;
  /* text-body-1 borrowed from vuetify */
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.03125em !important;
  font-family: "Roboto", sans-serif !important;
  text-transform: none !important;
}
</style>
