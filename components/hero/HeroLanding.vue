<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="overlay-content">
        <h1 class="text-h4 text-md-h2 font-weight-bold">
          Master the road with confidence
        </h1>
        <h2 class="text-h6 text-md-h5">
          High pass rates, expert tuition, and a stress-free learning experience
        </h2>
        <v-btn
          class="cta"
          rounded
          to="/contact"
          :size="$vuetify.display.mdAndUp ? 'large' : 'x-large'"
        >
          Get Started
        </v-btn>
      </div>
    </div>
    <img src="/img/index-hero.webp" alt="Set2Pass Logo" />
  </div>
</template>

<style scoped>
.hero {
  --hero-height: 500px;
  position: relative;
  height: var(--hero-height);
}

@media (width >= 48rem) {
  .hero {
    --hero-height: 600px;
  }
}

.hero img {
  height: var(--hero-height);
  object-fit: cover;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.overlay-content {
  height: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  gap: 2rem;
  padding: 0 1rem;
}

.cta {
  background-color: #1c7333;
  color: white;
}
</style>
