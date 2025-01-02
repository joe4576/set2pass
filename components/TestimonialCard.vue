<script setup lang="ts">
export interface TestimonialCardProps {
  imageUrl: string;
  name: string;
}

defineProps<TestimonialCardProps>();
</script>

<template>
  <v-card max-width="350px" elevation="3">
    <v-card-text class="h-100">
      <v-container class="card-container">
        <div class="quote-container">
          <img
            class="mb-3"
            src="/icon/quote-icon.svg"
            style="width: 35px"
            alt="Speech mark Icon"
          />
          <p class="font-italic">
            <slot />
          </p>
        </div>
        <div class="picture-container">
          <img class="picture" :src="imageUrl" :alt="name" />
          <p class="text-body-2">
            {{ name }}
          </p>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.picture {
  border-radius: 100%;
  width: 80px;
  height: 80px;
}

.picture-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
}

.quote-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}
</style>
