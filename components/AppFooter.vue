<script setup lang="ts"></script>

<template>
  <v-footer class="pa-0">
    <hero-base color="blue-grey-darken-2" full-height class="pb-4">
      <v-row class="pt-10 pb-8">
        <v-col cols="12" sm="4">
          <nuxt-link to="/">
            <img
              src="/img/set2pass.webp"
              style="width: 175px"
              alt="Set2Pass Logo"
            />
          </nuxt-link>
          <p class="mt-3 pl-1 text-blue-grey-lighten-3">Driving School</p>
        </v-col>
        <v-col cols="auto">
          <v-row style="gap: 30px">
            <v-col cols="auto">
              <p class="font-weight-bold">Information</p>
              <ul class="text-blue-grey-lighten-3">
                <li>
                  <nuxt-link to="/how-to-start">How to start</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/pricing">Pricing</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/#faqs">FAQs</nuxt-link>
                </li>
              </ul>
            </v-col>

            <v-col cols="auto">
              <p class="font-weight-bold">Resources</p>
              <ul class="text-blue-grey-lighten-3">
                <li>
                  <nuxt-link to="/contact">Contact us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
                </li>
              </ul>
            </v-col>

            <v-col cols="auto">
              <p class="font-weight-bold">DriveClass</p>
              <ul class="text-blue-grey-lighten-3">
                <li>
                  <nuxt-link to="/driveclass">About</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/driveclass/privacy-policy">
                    Privacy Policy
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-divider class="divider" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          &copy; SET2PASS 2021-2023. All rights reserved.
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          Site created by
          <a href="https://github.com/joe4576" target="_blank"> Joe Brown </a>
        </v-col>
      </v-row>
    </hero-base>
  </v-footer>
</template>

<style scoped>
li {
  list-style: none;
  margin: 10px auto;
}

ul {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

.divider {
  background: #888b8c;
}
</style>
