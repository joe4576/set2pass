<script setup lang="ts"></script>

<template>
  <v-app>
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
