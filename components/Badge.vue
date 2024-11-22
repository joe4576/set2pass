<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<template>
  <img :src="imageUrl" style="height: 100px" alt="Badge" />
</template>
