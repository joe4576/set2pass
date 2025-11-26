<script setup lang="ts"></script>

<template>
  <hero-base v-bind="$attrs">
    <v-row>
      <v-col
        cols="12"
        md="auto"
        class="d-flex align-center justify-center items-center"
      >
        <div class="d-flex justify-center align-center flex-column">
          <img src="/img/nikki.webp" class="nikki" alt="Nikki Brown" />
          <span class="text-subtitle-1 font-weight-bold mt-4">Nikki Brown</span>
          <span>Owner</span>
        </div>
      </v-col>
      <v-divider v-if="!$vuetify.display.smAndDown" vertical class="ma-5" />
      <v-col class="d-flex align-center flex-column">
        <div class="my-auto">
          <p>
            At SET2PASS, we take immense pride in delivering top-notch driving
            instruction that goes beyond helping you pass your test. Our focus
            is on equipping you with the skills for a lifetime of safe and
            confident driving.
          </p>
          <p>
            Whether you're a beginner or have some driving experience, our
            expert instructors ensure that you are at the center of every
            lesson. We understand that everyone learns differently, so we tailor
            our teaching approach to match your unique needs and learning style.
          </p>
          <p>
            With SET2PASS Driving School, you'll find yourself in the driver's
            seat, taking control of your learning journey. Get ready for an
            empowering and enjoyable driving experience with us!
          </p>
        </div>
      </v-col>
    </v-row>
  </hero-base>
</template>

<style scoped>
.nikki {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  width: 150px;
  margin: 0 auto;
}

p {
  margin: 15px 0;
}
</style>
