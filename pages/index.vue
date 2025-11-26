<script setup lang="ts">
useMetadata({
  title: "Set2Pass",
  description:
    "Set2Pass is a driving school that covers Locks Heath and the surrounding areas. We offer both automatic and manual driving lessons.",
});
</script>

<template>
  <hero-landing />

  <hero-owner class="py-16" />

  <hero-base
    id="faqs"
    class="pb-16"
    title="Frequently Asked Questions"
    color="background"
  >
    <frequently-asked-questions />
  </hero-base>

  <hero-base class="py-5 text-white" color="#1c7333">
    <v-row class="align-center justify-center">
      <v-col cols="auto">
        <p class="text-center">
          🎉 We have a
          <b>pass rate of 84%</b>. The national average in the UK is
          <b>49.9%</b>! 🎉
        </p>
      </v-col>
    </v-row>
  </hero-base>

  <hero-instructors class="pb-16" />

  <hero-testimonial class="pb-16" />

  <hero-free-index />

  <hero-theory-test-pro />
</template>
