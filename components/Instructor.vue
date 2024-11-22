<script setup lang="ts">
defineProps<{
  name: string;
  imageSrc: string;
}>();
</script>

<template>
  <div class="instructor">
    <div class="left">
      <img class="instructor-image mx-auto mb-2" :src="imageSrc" :alt="name" />
      <h2>{{ name }}</h2>
    </div>
    <div class="right">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.instructor-image {
  border-radius: 10px;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

:slotted(p) {
  margin-top: 12px;
}

.instructor {
  display: flex;
  flex-wrap: nowrap;
  gap: 45px;
}

.left {
  text-align: center;
}

@media (max-width: 960px) {
  .instructor {
    flex-direction: column;
  }

  .left {
    margin: 0 auto;
  }
}
</style>
