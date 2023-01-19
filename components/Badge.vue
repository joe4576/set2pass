<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<template>
  <v-img :src="imageUrl" height="100px" eager />
  <p class="text-center font-weight-bold mt-5">
    <slot />
  </p>
</template>
