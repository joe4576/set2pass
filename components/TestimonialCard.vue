<script setup lang="ts">
export interface TestimonialCardProps {
  imageUrl: string;
  name: string;
}

defineProps<TestimonialCardProps>();
</script>

<template>
  <v-card max-width="350px" elevation="3">
    <v-card-text class="d-flex flex-column justify-center">
      <v-container>
        <v-row>
          <v-col cols="12">
            <img
              class="mb-3"
              src="/icon/quote-icon.svg"
              style="width: 35px"
              alt="Speechmark Icon"
            />
            <p class="font-italic">
              <slot />
            </p>
          </v-col>
        </v-row>
        <v-row class="align-center">
          <v-col class="pr-0" cols="auto">
            <img class="picture" :src="imageUrl" :alt="`${name}`" />
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
  width: 80px;
}
</style>
