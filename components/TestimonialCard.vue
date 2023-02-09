<script setup lang="ts">
defineProps<{
  imageUrl: string;
  name: string;
}>();
</script>

<template>
  <v-card max-width="350px" elevation="3">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-img class="mb-3" src="/icon/quote-icon.svg" width="35px" eager />
            <p class="text-body-1 font-italic">
              <slot />
            </p>
          </v-col>
        </v-row>
        <v-row class="align-center">
          <v-col class="pr-0" cols="auto">
            <v-img class="picture" :src="imageUrl" width="80px" />
          </v-col>
          <v-col cols="auto">
            <p class="text-body-2">
              {{ name }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.picture {
  border-radius: 100%;
}
</style>
