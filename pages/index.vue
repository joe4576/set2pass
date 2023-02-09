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
  <template v-if="showParallax">
    <v-parallax class="hero" src="/img/index-hero.webp">
      <div class="text-container">
        <v-img class="text-container-image" src="/img/set2pass.webp" eager />
        <h3>Driving School</h3>
        <p>Learn fast and drive safe with SET2PASS</p>
      </div>
    </v-parallax>
  </template>
  <template v-else>
    <v-img src="/img/index-hero.webp" width="100vw" eager>
      <div class="mobile-wrapper">
        <div class="mobile-text-container">
          <v-img src="/img/set2pass.webp" width="300px" eager />
          <h3 class="mt-4 text-h6 font-weight-bold">Driving School</h3>
          <p class="text-body-1">Learn fast and drive safe with SET2PASS</p>
        </div>
      </div>
    </v-img>
  </template>

  <hero-book-now />

  <hero-owner :mobile="!showParallax" class="py-12" />

  <hero-base class="py-8">
    <v-row class="justify-space-around">
      <v-col cols="12" sm="6" md="4">
        <badge image-url="/img/iam-badge.webp">
          IAM member for over 20 years
        </badge>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <badge image-url="/img/dvsa-badge.webp">
          DVSA Approved Driving Instructor
        </badge>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <badge image-url="/img/pass-plus-badge.webp">
          Registered PassPlus provider
        </badge>
      </v-col>
    </v-row>
  </hero-base>

  <hero-base
    id="faqs"
    class="pb-10"
    container-width="800px"
    color="background"
    title="Frequently Asked Questions"
  >
    <frequently-asked-questions />
  </hero-base>

  <hero-testimonial class="pb-10" />

  <hero-base color="teal-lighten-5">
    <v-row class="align-center justify-center">
      <v-col cols="auto">
        <a
          href="https://www.freeindex.co.uk/profile(set2pass)_809203.htm"
          target="_blank"
        >
          <v-img src="/img/freeindex.webp" width="100px" eager />
        </a>
      </v-col>
      <v-col cols="auto">
        <p class="text-body-1 font-weight-bold text-center">
          You can see more reviews on FreeIndex - we're rated 5⭐️ with over 50+
          reviews!
        </p>
      </v-col>
    </v-row>
  </hero-base>

  <hero-theory-test-pro />
</template>

<style scoped>
.hero {
  height: 100vh;
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
