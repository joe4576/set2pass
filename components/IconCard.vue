<script setup lang="ts">
defineProps<{
  iconUrl: string;
  title?: string;
}>();
</script>

<template>
  <v-card width="500px" elevation="4" class="px-5">
    <v-card-text class="my-10">
      <v-row class="justify-center">
        <v-col cols="auto">
          <v-img :src="iconUrl" eager width="100px" />
        </v-col>
      </v-row>
      <v-row v-if="title" class="justify-center">
        <v-col cols="auto" class="text-center">
          <h2 class="text-h4">{{ title }}</h2>
        </v-col>
      </v-row>
      <slot />
    </v-card-text>
  </v-card>
</template>
