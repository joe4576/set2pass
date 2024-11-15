<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<template>
  <div v-if="!!$slots.default">
    <div class="d-flex flex-column align-center">
      <img :src="imageUrl" style="height: 100px" alt="Badge" />
      <p class="text-center font-weight-bold mt-5">
        <slot />
      </p>
    </div>
  </div>
  <div v-else>
    <img :src="imageUrl" style="height: 100px" alt="Badge" />
  </div>
</template>
