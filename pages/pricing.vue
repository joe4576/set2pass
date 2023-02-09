<script setup lang="ts"></script>

<template>
  <hero-page-banner title="Pricing" :background-type="'green-gradient-1'" />

  <hero-base color="background" class="py-12">
    <div class="d-flex justify-center">
      <v-card width="500px" elevation="4" class="px-2">
        <v-card-text class="my-10 px-5">
          <v-row class="justify-center">
            <v-col cols="auto">
              <v-img src="/icon/pricing-icon.svg" eager width="100px" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" class="text-center">
              <h2 class="text-h4">Manual and Automatic Lessons</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" class="text-center">
              <p class="text-body-1">
                To provide the maximum benefit to our students, we always
                recommend 90-minute lessons
              </p>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="auto">
              <span class="text-h2 font-weight-bold">£60</span>
              <span class="text-body-2"> /90 mins</span>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="auto">
              <span class="text-body-2">or </span>
              <span class="text-body-2 font-weight-bold">£40</span>
              <span class="text-body-2">/hour</span>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="auto">
              <v-btn color="primary" width="275px" nuxt to="contact">
                Book now
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </hero-base>

  <hero-base title="Gift vouchers now available!">
    <v-row class="justify-center">
      <v-col cols="auto">
        <v-img
          class="gift-voucher"
          src="/img/gift-voucher.webp"
          width="500px"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <p class="text-body-1">
          To find out more information, please
          <nuxt-link to="contact"> contact us </nuxt-link>
        </p>
      </v-col>
    </v-row>
  </hero-base>
</template>

<style scoped>
.gift-voucher {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
