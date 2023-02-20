<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<template>
  <div class="d-flex flex-column align-center">
    <img :src="imageUrl" style="width: 100px" />
    <p class="text-center font-weight-bold mt-5">
      <slot />
    </p>
  </div>
</template>
