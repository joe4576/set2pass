<script setup lang="ts"></script>

<template>
  <hero-base color="secondary">
    <v-row class="justify-center my-1 mx-2 mx-sm-5">
      <v-col cols="12" md="auto" class="my-auto text-center">
        <p class="text-h6">
          Interested in taking lessons? Get yourself booked in today.
        </p>
      </v-col>
      <v-col cols="12" md="auto" class="my-auto text-center">
        <v-btn :block="$vuetify.display.xs" color="primary" nuxt to="/contact">
          Book Now
        </v-btn>
      </v-col>
    </v-row>
  </hero-base>
</template>
