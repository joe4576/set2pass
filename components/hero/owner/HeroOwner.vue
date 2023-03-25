<script setup lang="ts">
defineProps<{
  mobile: boolean;
}>();
</script>

<template>
  <hero-base color="background" v-bind="$attrs">
    <v-row>
      <v-col cols="12" md="auto" class="d-flex align-center justify-center">
        <div class="pt-2 d-flex justify-center flex-column">
          <img src="/img/nikki.webp" class="nikki" alt="Nikki Brown" />
          <p class="text-subtitle-1 font-weight-bold mb-0">
            Nikki Brown - Owner
          </p>
        </div>
      </v-col>
      <v-divider v-if="!mobile" vertical class="ma-5" />
      <v-col class="d-flex align-center flex-column">
        <div class="my-auto">
          <p class="text-body-1">
            The SET2PASS Driving School prides itself on providing quality
            driving instruction, teaching you not only how to pass your test,
            but also preparing you for a lifetime of safe driving.
          </p>
          <p class="text-body-1">
            No matter what your experience or learning style, we put you firmly
            in the driving seat and tailor each lesson around your individual
            needs.
          </p>
        </div>

        <!-- <p class="text-body-1">
          Our client-centred philosophy and dedication to detail are proven to
          get you on the road quicker - our first time pass rate is well above
          the national average.
        </p>
        <p class="text-body-1">
          We also provide FREE online theory training to all SET2PASS Driving
          School students via the Theory Test Pro app. Ask your instructor for
          more information.
        </p> -->
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
