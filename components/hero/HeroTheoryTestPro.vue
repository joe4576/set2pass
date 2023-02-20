<script setup lang="ts"></script>

<template>
  <hero-base
    id="theory-test-pro"
    :background-type="'orange-gradient'"
    class="py-5"
  >
    <v-row>
      <v-col class="my-auto" cols="12" sm="9">
        <p class="text-body-1 text-white">
          We provide FREE online theory training to all SET2PASS Driving School
          students via the
          <a href="https://www.theorytestpro.co.uk/" target="_blank"
            >Theory Test Pro</a
          >
          app. Ask your instructor for more information.
        </p>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="12" sm="3">
        <a href="https://www.theorytestpro.co.uk/" target="_blank">
          <img
            class="theory-test-pro-logo"
            src="/img/theory-test-pro-logo.webp"
          />
        </a>
      </v-col>
    </v-row>
  </hero-base>
</template>

<style scoped>
.theory-test-pro-logo {
  width: 150px;
  display: block;
}
</style>
