<script setup lang="ts">
useMetadata({
  title: "Set2Pass",
  description:
    "Set2Pass is a driving school that covers Locks Heath and the surrounding areas. We offer both automatic and manual driving lessons.",
});
</script>

<template>
  <template v-if="!$vuetify.display.smAndDown">
    <v-parallax class="hero" src="/img/index-hero.webp">
      <div class="text-container">
        <img
          class="text-container-image"
          src="/img/set2pass.webp"
          alt="Set2Pass Logo"
        />
        <h3>Driving School</h3>
        <p>Learn fast and drive safe with SET2PASS</p>
      </div>
    </v-parallax>
  </template>
  <template v-else>
    <div class="mobile-header-wrapper">
      <div class="mobile-background-image" />
      <div class="mobile-header-content">
        <img
          class="text-container-image"
          src="/img/set2pass.webp"
          alt="Set2Pass Logo"
        />
        <h3 class="mt-4 text-h6 font-weight-bold">Driving School</h3>
        <p>Learn fast and drive safe with SET2PASS</p>
      </div>
    </div>
  </template>

  <hero-book-now />

  <hero-owner :mobile="$vuetify.display.smAndDown" class="py-12" />

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
      <v-col class="my-3" cols="12">
        <v-divider />
      </v-col>
      <v-col class="qualification-section" cols="12">
        <h5 class="text-h5">Additional Qualifications</h5>
        <ul class="qualification-list">
          <li>
            <h6 class="text-h6">Level 3 Award in Education and Training</h6>
            <p>
              Fundamental understanding of the roles and responsibilities of a
              teacher/trainer in relation to legislation, equality, diversity,
              inclusivity and meeting the needs of learners
            </p>
          </li>
          <li>
            <h6 class="text-h6">
              Driving Instructors Association Diploma in Driver Education
              (DipDE)
            </h6>
            <p>
              An industry-based vocational qualification that consolidates the
              various aspects of a driver trainer's role. These range from
              knowing legal obligations and regulations, business knowledge,
              understanding mechanical and vehicle technology aspects, and
              driving theory and teaching knowledge
            </p>
          </li>
        </ul>
      </v-col>
    </v-row>
  </hero-base>

  <hero-base class="py-5" color="green-accent-2">
    <v-row class="align-center justify-center">
      <v-col cols="auto">
        <p class="text-center">
          🎉 We have a
          <b>pass rate of 82%</b>, from April 17th 2022 - April 17th 2023. The
          national average in the UK was only <b>48%</b>! 🎉
        </p>
      </v-col>
    </v-row>
  </hero-base>

  <hero-base
    id="faqs"
    class="pb-10"
    color="background"
    title="Frequently Asked Questions"
  >
    <frequently-asked-questions />
  </hero-base>

  <hero-testimonial class="pb-10" />

  <hero-free-index />

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

.mobile-background-image {
  height: 100%;
  background-image: url("/img/index-hero.webp");
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  -webkit-filter: blur(3px);
}

.mobile-header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.mobile-header-wrapper {
  position: relative;
  height: 400px;
  overflow: hidden;
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

.qualification-list {
  list-style: none;
}

ul.qualification-list li {
  margin: 1rem auto;
}

.qualification-section {
  max-width: 800px;
}
</style>
