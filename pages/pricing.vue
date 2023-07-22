<script setup lang="ts">
useMetadata({
  title: "Pricing | Set2Pass",
  description:
    "Check out out current hourly rate for both automatic and manual driving lessons.",
});
</script>

<template>
  <hero-page-banner title="Pricing" />

  <hero-base color="background" class="py-12">
    <div class="d-flex justify-center">
      <icon-card
        icon-url="/icon/pricing-icon.svg"
        title="Manual and Automatic Lessons"
      >
        <v-row>
          <v-col cols="auto" class="text-center">
            <p>
              To provide the maximum benefit to our students, we always
              recommend 90-minute lessons
            </p>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="auto">
            <span class="text-h2 font-weight-bold">£40</span>
            <span class="text-body-2"> /hour</span>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="auto">
            <span class="text-body-2">or </span>
            <span class="text-body-2 font-weight-bold">£60</span>
            <span class="text-body-2"> /90 mins</span>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="auto">
            <v-btn color="primary" width="275px" nuxt to="/contact">
              Book now
            </v-btn>
          </v-col>
        </v-row>
      </icon-card>
    </div>
  </hero-base>

  <hero-base
    id="gift-voucher-container"
    title="Gift vouchers now available!"
    class="pb-10"
  >
    <v-row class="justify-center">
      <v-col cols="12" sm="8" class="d-flex justify-center my-auto">
        <img
          class="gift-voucher"
          src="/img/gift-voucher.webp"
          alt="Set2Pass Gift Voucher"
        />
      </v-col>
      <v-col cols="12" sm="4" class="my-auto">
        <p>
          We now offer gift vouchers, which are available to purchase from your
          instructor.
        </p>
        <p>To find out more, please get in touch.</p>
        <v-btn
          nuxt
          to="contact"
          color="primary"
          :block="$vuetify.display.smAndDown"
        >
          Contact us
        </v-btn>
      </v-col>
    </v-row>
  </hero-base>
</template>

<style scoped>
.gift-voucher {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  max-width: 100%;
  max-height: 300px;
}

#gift-voucher-container p {
  margin: 1rem auto;
}
</style>
