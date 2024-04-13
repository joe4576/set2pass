<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <hero-page-banner :title="title" class="mb-12" />
  <div v-bind="$attrs" class="container">
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
  margin-bottom: 1rem;
}
</style>
