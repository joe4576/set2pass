<script setup lang="ts">
import { useDisplay } from "vuetify";

const showParallax = ref(true);

const { smAndDown } = useDisplay();

const updateShowParallax = () => {
  showParallax.value = !smAndDown.value;
};

watch(smAndDown, updateShowParallax);
onMounted(updateShowParallax);
</script>

<template>
  <div style="height: 300vh">
    <template v-if="showParallax">
      <v-parallax class="hero" src="/img/index-hero.jpg">
        <div class="text-container">
          <v-img class="text-container-image" src="/img/set2pass.png" eager />
          <h3>Driving School</h3>
          <p>Learn fast and drive safe with SET2PASS</p>
        </div>
      </v-parallax>
    </template>
    <template v-else>
      <v-img src="/img/index-hero.jpg" width="100vw" eager>
        <div class="mobile-wrapper">
          <div class="mobile-text-container">
            <v-img src="/img/set2pass.png" width="300px" eager />
            <h3 class="mt-4">Driving School</h3>
            <p>Learn fast and drive safe with SET2PASS</p>
          </div>
        </div>
      </v-img>
    </template>

    <v-container>
      <v-row>
        <v-col cols="12">Hello</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.hero {
  height: 600px;
}

.text-container-image {
  width: 300px;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 65px;
  right: 60px;
  padding: 0.5rem;
}

.mobile-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.mobile-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 8px;
}

@media (max-width: 1264px) {
  .text-container {
    top: 30px;
    right: 15px;
    padding: 0rem;
  }

  .text-container > h3 {
    font-size: 2rem !important;
  }

  .text-container > p {
    font-size: 1rem !important;
  }
}

@media (max-width: 900px) {
  .text-container-image {
    width: 250px;
  }

  .text-container > h3 {
    font-size: 1.5rem !important;
  }
}

.text-container > h3 {
  font-size: 3.1rem;
}

.text-container > p {
  font-size: 1.2rem;
}
</style>
